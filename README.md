Welcome to the tentative entry point for TEO software. Here we will speak about:

1. An overview on TEO humanoid robot software
   1. TEO humanoid robot software architecture
   1. TEO humanoid robot software intended for use on any PC
   1. TEO humanoid robot firmware intended for use inside the robot
   1. TEO humanoid robot demonstration software
   1. TEO humanoid robot research software
1. Developing TEO humanoid robot software
1. Additional documentation about TEO humanoid robot software

# 1. An overview on TEO humanoid robot software

## 1.i. TEO humanoid robot software architecture

While there is technically no software architecture diagram, as it is flexible, a good example can be found at: https://github.com/roboticslab-uc3m/follow-me

## 1.ii. TEO humanoid robot source code intended for use on any PC

The main TEO software repository intended for installing on any PC is called [teo-main](https://github.com/roboticslab-uc3m/teo-main). It pulls contents from the following repositories:

- [teo-software-manual](https://github.com/roboticslab-uc3m/teo-software-manual): This TEO software manual.
- [teo-hardware-manual](https://github.com/roboticslab-uc3m/teo-hardware-manual): The TEO hardware manual.
- [teo-openrave-models](https://github.com/roboticslab-uc3m/teo-openrave-models): TEO OpenRAVE models.
- [installation-guides](https://github.com/roboticslab-uc3m/installation-guides): Centralized administration of dependency installation guides.
- [openrave-yarp-plugins](https://github.com/roboticslab-uc3m/openrave-yarp-plugins): OpenRAVE plugins to interface OpenRAVE with YARP.
- [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics): Kinematics and dynamics solvers and controllers.
- [vision](https://github.com/roboticslab-uc3m/vision): Vision processing.
- [speech](https://github.com/roboticslab-uc3m/speech): Text To Speech (TTS) and Automatic Speech Recognition (ASR).
- [tools](https://github.com/roboticslab-uc3m/tools): Additional software tools.

Notes on [teo-main](https://github.com/roboticslab-uc3m/teo-main) and the repositories from which it pulls contents:
- Due to ongoing migration efforts ([click here to read the full story](https://github.com/roboticslab-uc3m/QA/issues/2)), [teo-main](https://github.com/roboticslab-uc3m/teo-main) is still not fully functional. It is best to download and install each separate repository. If there is an issue on any given one, post a GitHub issue on the corresponding repository and we'll try to get back to you.
- The `teoSim` simulator of [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics) will soon be replaced by components from [openrave-yarp-plugins](https://github.com/roboticslab-uc3m/openrave-yarp-plugins), which also include collision avoidance.
- Tts/asr will be migrated to [speech](https://github.com/roboticslab-uc3m/speech), but is currently still in [vision](https://github.com/roboticslab-uc3m/vision).
- The only [tool](https://github.com/roboticslab-uc3m/tools) is currently still inside [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices).

Keep up on the status of these issues on: https://github.com/roboticslab-uc3m/QA/issues/2 and https://github.com/orgs/roboticslab-uc3m/projects/2

## 1.iii. TEO humanoid robot firmware intended for use inside the robot
The robot device drivers are in [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices). TEO uses three instances of this repository:
- teo-manipulation: For the TEO manipulation PC (arms and head joint control, JR3 force/torque sensors).
- teo-locomotion: For the TEO locomotion PC (legs and torso joint control, XSENSE inertial sensor)
- teo-head: For the TEO head PC (ASUS XTion Pro Live RGBD sensor, PointGrey RGB camera).

We are in fact considering creating specific superbuild repositories for each TEO PC.

## 1.iv. TEO humanoid robot demonstration software
- [follow-me](https://github.com/roboticslab-uc3m/follow-me): A robotic face following and arm waving demo.
- [waiter](https://github.com/roboticslab-uc3m/waiter): Robot waiter application.

## 1.v. TEO humanoid robot research software
- [textiles](https://github.com/roboticslab-uc3m/textiles)
- [xgnitive](https://github.com/roboticslab-uc3m/xgnitive)

# 2. Developing TEO humanoid robot software

# 3. Additional documentation about TEO humanoid robot software
Also still lots of material on [the wiki](http://robots.uc3m.es)!

We'll be porting material and updating little by little!

Keep up on this on: https://github.com/roboticslab-uc3m/QA/issues/2 and https://github.com/orgs/roboticslab-uc3m/projects/2

Put an [issue](https://github.com/roboticslab-uc3m/teo-software-manual/issues/new) if you have any doubts!
