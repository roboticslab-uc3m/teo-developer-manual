# Demo Procedure

## Preparation

1. Remove any obstacles (table, curtains, chairs... or other objects that may interfere).
1. Place the robot in a position where it can have space and cannot hit any obstacle.
1. Make sure all emergency stop buttons (main and per robot part) are closed.
1. Turn on both [42V power supplies](fig/power-supply.jpg) (check they are actually at 42V before proceeding further) and open the main emergency button.
1. On the [rear panel](fig/main-switches.jpg) of the robot, press the "General" red button first. The button should light up. For the demo we will also need to press the CABEZA CPU, MANIPULADOR CPU, MANIPULADOR DERECHO, MANIPULADOR IZQUIERDO. 
1. Press other relevant buttons and make sure they light up: manipulation PC and the robot parts you want to use.
1. Turn on the manipulation PC (the PC is in the right side of the chest, to turn it on you have to take the long grey cable with red in it and make a 
short circuit with the connecter of the cable and the metalic part of TEO).
1. Turn on the head PC (the PC is the center of the chest and it has a small button on the right side).
1. Wait until the manipulation PC and head PC have finished booting. You can monitor this through `ping manipulation` and `ping head` issued from another PC connected to the robot's local network.
1. Connect by ssh to `ssh manipulation` and `ssh head`.
1. Open the [emergency buttons](fig/emergency-buttons.jpg) for the robot parts you need. Keep these buttons close and ready to be used.

1. If you want to try a specific part of TEO, in manipulation PC run `launchCanBus --from launchCanBus/(specific part that you wanna try)`.
1. In another terminar in manipulation PC run `yarp rpc /teo/(specific part that you wanna try)/rpc:i`.
1. Run the yarp commands like `set pos 0 -25`    

## Demonstration Instructions

Refer to the specific instructions of the demo you want to launch:

- [teo-self-presentation](https://github.com/roboticslab-uc3m/teo-self-presentation)
- [teo-follow-me](https://github.com/roboticslab-uc3m/teo-follow-me)
- [teo-waiter](https://github.com/roboticslab-uc3m/teo-waiter)
- [teo-demos-misc](https://github.com/roboticslab-uc3m/teo-demos-misc)

## See also

- [driver check procedure](driver-check-procedure.md)
- wiki: [Qué llevar a Demos (TEO)](https://apps-robots.uc3m.es/robots/wiki/Qu%C3%A9_llevar_a_Demos_(TEO))
