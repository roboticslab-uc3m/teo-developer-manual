# Demo Procedure

## Preparation

1. Remove any obstacles (table, curtains, chairs... or other objects that may interfere).
1. Place the robot in a position where it can have space and cannot hit any obstacle.
1. Make sure all emergency stop buttons (main and per robot part) are closed.
1. Turn on both [42V power supplies](fig/power-supply.jpg) (check they are actually at 42V before proceeding further) and open the main emergency button.
1. On the [rear panel](/fig/main-switches.jpg) of the robot, press the "General" red button first. The button should light up.
1. Press other relevant buttons and make sure they light up: manipulation PC and the robot parts you want to use.
1. Turn on the manipulation PC.
1. Wait until the manipulation PC has finished booting. You can monitor this through `ping manipulation` issued from another PC connected to the robot's local network.
1. Issue `ssh teo@manipulation` from said external PC (alternatively: `ssh teo@2.2.2.51`).
1. Open the [emergency buttons](/fig/emergency-buttons.jpg) for the robot parts you need. Keep these buttons close and ready to be used.
1. Issue `launchCanBus --from manipulation.ini` or the INI file most suitable for your demo, check for possible errors or warnings.

## Demonstration Instructions

Refer to the specific instructions of the demo you want to launch:

- [teo-self-presentation](https://github.com/roboticslab-uc3m/teo-self-presentation)
- [teo-follow-me](https://github.com/roboticslab-uc3m/teo-follow-me)
- [teo-waiter](https://github.com/roboticslab-uc3m/teo-waiter)
- [teo-demos-misc](https://github.com/roboticslab-uc3m/teo-demos-misc)

## See also

- <https://apps-robots.uc3m.es/robots/wiki/Qu%C3%A9_llevar_a_Demos_(TEO)>
