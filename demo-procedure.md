# Demo Procedure

### Preparation:

1. Remove obstacles (table, curtains, chairs... or another objects that may interfere)
2. Place the robot in a position that can have space and can not hit any obstacle
3. Turn on the [power supplies](/fig/power-supply.jpg), adjust them to 42 volts and check that the emergency button of the power suppies is raised up.
4. In the back of the robot, there are a [panel](/fig/main-switches.jpg). Press the "General" button first. The button should light up.
5. Then you must turn on:
   * The power buttons of the PCs that are involved in the demo. These buttons are labeled as `CABEZA CPU`, `MANIPULADOR CPU`, `LOCOMOTOR CPU`. Important to keep in mind is that the manipulation computer (labeled as `MANIPULADOR CPU`) contains the `yarp server`, (used for the communication of processes between the different PCs), so it is necessary to turn this PC on to get that everything works correctly.
   * Turn on the power buttons of the motors belonging to the extremities involved in the demo, labeled as `CABEZA CUELLO`, `MANIPULADOR IZQUIERDO`, `MANIPULADOR DERECHO`, `LOCOMOTOR IZQUIERDO`, `LOCOMOTOR DERECHO`.
6. Then, turn on each of the [switches](/fig/pc-switches.jpg) corresponding to the computers. The buttons of the second column are responsible for turning on the computers of the head, manipulation and locomotion in this order. The buttons of the first column are used to reset the computers in the same order as the second column. 
7. If it was needed or it was interesting for the demo:
   * turn on the television
   * turn on the chest lights (You can use a mobile application named: [Serial Bluetooth Terminal](https://play.google.com/store/apps/details?id=de.kai_morich.serial_bluetooth_terminal&gl=ES) to change the colors sequence)
8. Have the [emergency buttons](/fig/emergency-buttons.jpg) of the motors close to you and open the ones we're going to use.
9. Double click on the desktop icon "teo-main yarpmanager":
Click on "Refresh status" (blue button in fourth position).
In "Resource" (Bottom right), computers that have been previously turned on must be listed as "available" (green). If there are problems, restart again in the order indicated, or follow the procedure indicated in [TEO_Network_troubleshooting](http://robots.uc3m.es/index.php/TEO_Network_troubleshooting)
10. Click on "Run" (green Play button)
11. Check the operation of each program through "teoTools_App"

### Demostration instructions:

* [Teo-self-presentation](https://github.com/roboticslab-uc3m/teo-self-presentation)
* [Follow-me](https://github.com/roboticslab-uc3m/follow-me)
* [Teo-waiter](https://github.com/roboticslab-uc3m/waiter/tree/develop)
