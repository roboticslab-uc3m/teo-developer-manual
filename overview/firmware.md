# Overview: Firmware

The robot PC device drivers are in [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices), and configured for TEO via [teo-configuration-files](https://github.com/roboticslab-uc3m/teo-configuration-files). TEO uses three instances of this repository:

* manipulation: For the TEO manipulation PC \(arms and head joint control, JR3 force/torque sensors\).
* locomotion: For the TEO locomotion PC \(legs and torso joint control, Xsens inertial sensor\)
* head: For the TEO head PC \(ASUS XTion Pro Live RGBD sensor, PointGrey RGB camera\).

More information on these instances and their configuration can be found in the [TEO Network Information](../appendix/c-teo-network-information.md) appendix.

Additional low-level microcontroller firmware used in TEO can be found in [yarp-devices/firmware](https://github.com/roboticslab-uc3m/yarp-devices/tree/develop/firmware).
