# Overview: Firmware

The robot device drivers are in [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices), and will soon be connected to [teo-configuration-files](https://github.com/roboticslab-uc3m/teo-configuration-files). TEO uses three instances of this repository:

* teo-manipulation: For the TEO manipulation PC \(arms and head joint control, JR3 force/torque sensors\).
* teo-locomotion: For the TEO locomotion PC \(legs and torso joint control, Xsens inertial sensor\)
* teo-head: For the TEO head PC \(ASUS XTion Pro Live RGBD sensor, PointGrey RGB camera\).

We are in fact considering creating specific superbuild repositories for each TEO PC.

