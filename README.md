Welcome to the tentative entry point for TEO software. Here we will speak about:
1. TEO humanoid robot software intended for use on any PC
2. TEO humanoid robot firmware intended for use inside the robot
3. TEO humanoid robot demonstration software
4. TEO humanoid robot research software
5. TEO humanoid robot additional documentation

## 1. TEO humanoid robot source code intended for use on any PC

The main TEO software repository intended for installing on any PC is called [teo-main](https://github.com/roboticslab-uc3m/teo-main). It pulls contents from the following repositories:

- [teo-software-manual](https://github.com/roboticslab-uc3m/teo-software-manual): This TEO software manual.
- [teo-hardware-manual](https://github.com/roboticslab-uc3m/teo-hardware-manual): The TEO hardware manual.
- [teo-openrave-models](https://github.com/roboticslab-uc3m/teo-openrave-models): TEO OpenRAVE models.
- [installation-guides](https://github.com/roboticslab-uc3m/installation-guides): Centralized administration of dependency installation guides.
- [openrave-yarp-plugins](https://github.com/roboticslab-uc3m/openrave-yarp-plugins): OpenRAVE plugins to interface OpenRAVE with YARP.
- [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics)
- [vision](https://github.com/roboticslab-uc3m/vision)
- [speech](https://github.com/roboticslab-uc3m/speech)
- [tools](https://github.com/roboticslab-uc3m/tools)

Notes on [teo-main](https://github.com/roboticslab-uc3m/teo-main) and the repositories from which it pulls contents:
- Due to ongoing migration efforts ([click here to read the full story](https://github.com/roboticslab-uc3m/QA/issues/2)), [teo-main](https://github.com/roboticslab-uc3m/teo-main) is still not fully functional. It is best to download and install each separate repository. If there is an issue on any given one, post a GitHub issue on the corresponding repository and we'll try to get back to you.
- The `teoSim` simulator of [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics) will soon be replaced by components from [openrave-yarp-plugins](https://github.com/roboticslab-uc3m/openrave-yarp-plugins), which also include collision avoidance.
- Tts/asr will be migrated to [speech](https://github.com/roboticslab-uc3m/speech), but is currently still in [vision](https://github.com/roboticslab-uc3m/vision).
- The only [tool](https://github.com/roboticslab-uc3m/tools) is currently still inside [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices).

Keep up on the status of these issues on: https://github.com/roboticslab-uc3m/QA/issues/2 and https://github.com/orgs/roboticslab-uc3m/projects/2

## 2. TEO humanoid robot firmware intended for use inside the robot
The robot device drivers are in [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices). Specifications are: teo-manipulation, teo-locomotion, teo-head.

## 3. TEO humanoid robot demonstration software
While there is technically no software architecture diagram, as it is flexible, a good example can be found at: https://github.com/roboticslab-uc3m/follow-me

## 4. TEO humanoid robot research software
xgnitive, textiles

## 5. TEO humanoid robot additional documentation
Also still lots of material on [the wiki](http://robots.uc3m.es)!

We'll be porting material and updating little by little!

Keep up on this on: https://github.com/roboticslab-uc3m/QA/issues/2 and https://github.com/orgs/roboticslab-uc3m/projects/2

Put an [issue](https://github.com/roboticslab-uc3m/teo-software-manual/issues/new) if you have any doubts!
