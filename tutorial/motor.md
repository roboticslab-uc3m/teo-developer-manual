# Tutorial: Motor Control

Throughout this section, refer to the [Joint Indexes (YARP ports)](diagrams.html#joint-indexes)  diagram to see port names and joint indexes, as well as the [Joint Directions of Rotation](diagrams.html#joint-directions-of-rotation) diagram.

1. Directly talking to ports. From a terminal, connect to the limb you prefer (substitute `leftArm` following the above mentioned diagram):

  ```bash
  yarp rpc /teoSim/leftArm/rpc:i
  ```

  From within this, we can send joint space movements, read encoders, etc. For instance, send an absolute joint position command, to joint 0, setting the target to -25 degrees:

  ```
  set pos 0 -25
  ```

  You should in turn receive should get some kind of feedback, such as:

  ```
  Response: [ok]
  ```

  In line with the hacks mentioned above, refer to a more exhaustive list at: [yarp-tricks: remote_controlboard (from developer-manual)](http://robots.uc3m.es/gitbook-developer-manual/appendix/yarp-tricks.html#remotecontrolboard)

2. Via GUIs. Two options to launch the YARP motor GUI for `teoSim`:
    - Via terminal:
    ```
    yarpmotorgui --from yarpmotorgui/teoSim.ini
    ```
    - Via the application manager (better practice): Navigate through `Applications` > `teoSimTools_App` > right-click on `yarpmotorgui` > `Run`

  Any of the two options, and clicking `OK` (ignore the current warnings regarding hands for now) should get you a window similar to the one depicted below.

  ![yarpmotorgui](../fig/teo-yarpmotorgui.png)

3. Within our programs and scripts, using the APIs provided by YARP.
  - APIs
    - [The YARP motor control interfaces](https://www.yarp.it/yarp_motor_control.html)
    - [yarp::dev::IPositionControl](https://www.yarp.it/classyarp_1_1dev_1_1IPositionControl.html)
    - [yarp::dev::IVelocityControl](https://www.yarp.it/classyarp_1_1dev_1_1IVelocityControl.html)
    - [yarp::dev::ITorqueControl](https://www.yarp.it/classyarp_1_1dev_1_1ITorqueControl.html)
    - [yarp::dev::IEncoders](https://www.yarp.it/classyarp_1_1dev_1_1IEncoders.html)
    - [roboticslab::YarpOpenraveControlboard](http://robots.uc3m.es/dox-openrave-yarp-plugins/classroboticslab_1_1YarpOpenraveControlboard.html)
    - [roboticslab::CanBusControlboard](http://robots.uc3m.es/dox-yarp-devices/classroboticslab_1_1CanBusControlboard.html)
  - Examples
    - https://github.com/roboticslab-uc3m/yarp-devices/tree/master/examples/cpp/exampleRemoteControlboard
    - https://github.com/roboticslab-uc3m/yarp-devices/blob/master/examples/matlab/exampleRemoteControlboard.m
    - https://github.com/roboticslab-uc3m/yarp-devices/blob/master/examples/python/exampleRemoteControlboard.py
    - [iCub-main: Getting accustomed with motor interfaces](https://robotology.github.io/robotology-documentation/doc/html/icub_motor_control_tutorial.html), but in the `remote` line, switch from `/icubSim/right_arm` to `/teoSim/leftArm` or the limb of your selection.
