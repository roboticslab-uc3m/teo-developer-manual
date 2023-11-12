# Overview: Firmware

The robot PC device drivers are hosted at [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices), and configured for TEO via [teo-configuration-files](https://github.com/roboticslab-uc3m/teo-configuration-files). TEO uses three instances of this repository:

* manipulation: For the TEO manipulation PC \(arms and head joint control, JR3 force/torque sensors\).
* locomotion: For the TEO locomotion PC \(legs and torso joint control, Xsens inertial sensor\)
* head: For the TEO head PC \(ASUS XTion Pro Live RGBD sensor, PointGrey RGB camera\).

More details on these instances and their configuration can be found in [Network Information](../network-information.md).

Additional low-level microcontroller firmware used in TEO can be found here:

* [cui-pic-firmware](https://github.com/roboticslab-uc3m/cui-pic-firmware)
* [lacquey-pic-firmware](https://github.com/roboticslab-uc3m/lacquey-pic-firmware) (legacy)
* [jr3-mbed-firmware](https://github.com/roboticslab-uc3m/jr3-mbed-firmware) (includes a PWM controller for the Lacquey fetch hand)
* [textiles-arduino-firmware](https://github.com/roboticslab-uc3m/textiles-arduino-firmware)
* [Dextra](https://github.com/roboticslab-uc3m/Dextra)
