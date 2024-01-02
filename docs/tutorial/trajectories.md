# Tutorial: Trajectory Execution

Now that you should know how to instruct your robot to go from point A to point B in a simple motion instruction (see [Tutorial: Motor Control](motor.md)), this tutorial will cover more complex, arbitrary multi-setpoint trajectories.

## Position-controlled high frequency trajectories

The most straightforward way to command a robot involves position commands since they abstract from the underlying control loops, which ultimately translate to current references applied to the motors.
As opposed to having robot joints perform a steady, long transition from origin to goal, it is also interesting to follow whole paths of points defined as closely together (in terms of space and time) as possible, which would render the resulting motion smooth and highly dynamic.

In short, this is your preferred control mode if you need to:

1. traverse a list of points which are known beforehand (a.k.a. **offline-based** trajectories), e.g. read from a file and/or generated by an offline planner, or
2. translate a "live" source of targets (i.e. **online-based**) into robot motion, acquired through a controller device such as a joystick, fetched from a visual servoing system, or generated with a time-parameterized formula, for instance.

However, it is **not** a good choice whenever the distance between points is too high and/or the expected time step per instruction is close to the order of one second or more (most usually, we want to issue position commands every 10-50 milliseconds, hence the "high frequency").
In that case, stick to [Tutorial: Motor Control](motor.md) and the [`yarp::dev::IPositionControl`](http://www.yarp.it/git-master/classyarp_1_1dev_1_1IPositionControl.html) interface.

The adequate YARP interface to achieve position-controlled high frequency trajectories is [`yarp::dev::IPositionDirect`](http://www.yarp.it/git-master/classyarp_1_1dev_1_1IPositionDirect.html).

### Methods

We have prepared several implementations to cover most common scenarios, make sure to pick the one that best fits your needs.
The current default is **"online remote push"**, which is often the correct choice in terms of support for online/offline trajectories, remote launch and simulation-readiness.

| method               | internal<br>mode | online<br>trajectories | offline<br>trajectories | suitable for<br>simulation | variable<br>period | launched<br>locally | launched<br>remotely | examples |
|----------------------|:----------------:|:----------------------:|:-----------------------:|:--------------------------:|:------------------:|:-------------------:|:--------------------:|:--------:|
| online remote push   |        CSP       |         **yes**        |         **yes**         |           **yes**          |       **yes**      |       **yes**       |        **yes**       | [C++](https://robots.uc3m.es/yarp-devices/exampleOnlineTrajectoryRemotePush_8cpp-example.html), [Python](https://robots.uc3m.es/yarp-devices/exampleOnlineTrajectoryRemotePush_8py-example.html) |
| online remote pull   |        CSP       |         **yes**        |          no (1)         |         **yes** (2)        |         no         |        no (1)       |        **yes**       | [C++](https://robots.uc3m.es/yarp-devices/exampleOnlineTrajectoryRemotePull_8cpp-example.html), [Python](https://robots.uc3m.es/yarp-devices/exampleOnlineTrajectoryRemotePull_8py-example.html) |
| online local pull    |        CSP       |         **yes**        |          no (1)         |             no             |         no         |       **yes**       |          no          | [C++](https://robots.uc3m.es/yarp-devices/exampleOnlineTrajectoryLocalPull_8cpp-example.html) |
| offline synchronous  |    ip (pt/pvt)   |           no           |         **yes**         |             no             |         no         |       **yes**       |      **yes** (4)     | [C++](https://robots.uc3m.es/yarp-devices/exampleOfflineTrajectorySync_8cpp-example.html), [Python](https://robots.uc3m.es/yarp-devices/exampleOfflineTrajectorySync_8py-example.html) |
| offline asynchronous |    ip (pt/pvt)   |         no (3)         |         **yes**         |             no             |       **yes**      |       **yes**       |        **yes**       | [C++](https://robots.uc3m.es/yarp-devices/exampleOfflineTrajectoryAsync_8cpp-example.html), [Python](https://robots.uc3m.es/yarp-devices/exampleOfflineTrajectoryAsync_8py-example.html) |

- (1) Technically plausible, but either suboptimal or makes little sense since better alternatives exist.
- (2) An emulated sync port is needed, use `yarp clock --period value_ms --name /port` to stream current time at the desired rate.
- (3) Unless you really don't mind coping with noticeable delays due to having an internal buffer of points.
- (4) Make sure to configure your output port in write strict mode, or pass `--writeStrict on` to the `remote_controlboard` device.

### Glossary

The [`TechnosoftIpos`](https://github.com/roboticslab-uc3m/yarp-devices/tree/master/libraries/YarpPlugins/TechnosoftIpos) device encapsulates a collection of CANopen instructions that enable communication with the robot's iPOS drivers.
We have implemented `yarp::dev::IPositionDirect` in a twofold manner:

- Cyclic synchronous position (CSP): this low-level iPOS mode assumes position commands are sent in a periodic manner - in our case, defined by the `syncPeriod` option to [`CanBusBroker`](https://github.com/roboticslab-uc3m/yarp-devices/tree/master/libraries/YarpPlugins/CanBusBroker) (configurable; current default at time of writing is 0.02 seconds). If you choose a CSP-compliant method, an internal interpolator will adjust incoming values to avoid gaps as much as possible (thus achieving a smooth behavior) unless the command period used in your application matches said synchronization period, in which case values will be processed exactly as they are. Provided examples show how to avoid detrimental clock drifts.
- Interpolated position (ip): involves an internal setpoint buffer which depletes at a constant (**synchronous**) or variable (**asynchronous**) period. Because of said buffer and the delays it would introduce, *ip* is not suitable for online trajectories. Users can select one of two submodes: *pt* (linear interpolation) or *pvt* (cubic interpolation). Note that *ip* is considered legacy per the latest CANopen standards.

On the above premises, implemented methods can be described as follows:

- Online remote push: CSP trajectory execution, best suited for online targets generated on the fly (but also good if loading saved setpoints from a file), can be tested on the simulator. In this case, the client application manages a timer or anything of that sort to "push" setpoints on a precise schedule. Said application is usually not executed aboard the robot (i.e. remote).
- Online remote pull: largely the same as above except that it is designed to connect to a remote synchronization port and send position commands in a callback fashion. The port streams current system clock at the same rate CSP expects a new setpoint. On the real robot, look for a `/<prefix>/sync:o` port. You can also mimick this behavior in simulation, check the footnotes for the previous table.
- Online local pull: also callback-based in the same vein, but it depends on passing a semaphore handle to `CanBusBroker`, therefore it is only suitable for applications that run on the robot board and instantiate `CanBusBroker` along with the full robot configuration. The handle you need to pass is an instance of [`StateObserver`](https://robots.uc3m.es/yarp-devices/classroboticslab_1_1StateObserver.html).
- Offline synchronous: depends on [`yarp::dev::IRemoteVariables`](http://www.yarp.it/git-master/classyarp_1_1dev_1_1IRemoteVariables.html) to correctly configure `TechnosoftIpos` for compliance with the *ip* mode ([docs](https://robots.uc3m.es/yarp-devices/md_libraries_YarpPlugins_CanBusBroker_README.html)). Solely for use in offline trajectories (e.g. loaded from file) in which all targets are expected to be reached on a fixed period (i.e. synchronously). For efficiency, you should send all those points at once, as opposed to using a timer or a `for`-loop with delays.
- Offline asynchronous: same as above, but points are sent gradually instead of in a single batch. It is allowed to have a varying period between points. Therefore, commands would be usually issued in a `for`-loop with a variable delay (i.e. asynchronously).