# Overview: PC Software

The main TEO software repository intended for installing on any PC is called [teo-main](https://github.com/roboticslab-uc3m/teo-main). It pulls contents from the following repositories:

* [teo-software-manual](https://github.com/roboticslab-uc3m/teo-software-manual): This TEO software manual.
* [teo-hardware-manual](https://github.com/roboticslab-uc3m/teo-hardware-manual): The TEO hardware manual.
* [teo-openrave-models](https://github.com/roboticslab-uc3m/teo-openrave-models): TEO OpenRAVE models.
* [best-practices](https://github.com/roboticslab-uc3m/best-practices)
* [project-generator](https://github.com/roboticslab-uc3m/project-generator)
* [installation-guides](https://github.com/roboticslab-uc3m/installation-guides): Centralized administration of dependency installation guides.
* [openrave-yarp-plugins](https://github.com/roboticslab-uc3m/openrave-yarp-plugins): OpenRAVE plugins to interface OpenRAVE with YARP.
* [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics): Kinematics and dynamics solvers and controllers.
* [vision](https://github.com/roboticslab-uc3m/vision): Vision processing.
* [speech](https://github.com/roboticslab-uc3m/speech): Text To Speech \(TTS\) and Automatic Speech Recognition \(ASR\).
* [tools](https://github.com/roboticslab-uc3m/tools): Additional software tools.

Notes on [teo-main](https://github.com/roboticslab-uc3m/teo-main) and the repositories from which it pulls contents:

* Due to ongoing migration efforts \([click here to read the full story](https://github.com/roboticslab-uc3m/QA/issues/2)\), [teo-main](https://github.com/roboticslab-uc3m/teo-main) is still not fully functional. It is best to download and install each separate repository. If there is an issue on any given one, post a GitHub issue on the corresponding repository and we'll try to get back to you.
* The `teoSim` simulator of [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics) will soon be replaced by components from [openrave-yarp-plugins](https://github.com/roboticslab-uc3m/openrave-yarp-plugins), which also include collision avoidance.
* Tts/asr will be migrated to [speech](https://github.com/roboticslab-uc3m/speech), but is currently still in [vision](https://github.com/roboticslab-uc3m/vision).
* The only [tool](https://github.com/roboticslab-uc3m/tools) is currently still inside [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices).

Keep up on the status of these issues on: [https://github.com/roboticslab-uc3m/QA/issues/2](https://github.com/roboticslab-uc3m/QA/issues/2) and [https://github.com/orgs/roboticslab-uc3m/projects/2](https://github.com/orgs/roboticslab-uc3m/projects/2)

