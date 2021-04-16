# Driver Check Procedure

1. Turn on 42V power supplies.
2. Power up and turn on PC manipulation and PC locomotion if they are not already on.
3. `ssh teo@manipulation` (this is for the manipulation PC)
4. `dumpCanBus --canDevice /dev/can0` (start engines and annotate results, ctrl + c to stop)
5. `dumpCanBus --canDevice /dev/can1` (start engines and annotate results, ctrl + c to stop)
6. `nano /home/teo/teo-body/build/share/teo-body/contexts/oneCanBusOneWrapper/oneCanBusOneWrapper.ini` (modifying canDevice and ids)
7. `oneCanBusOneWrapper`
8. [new terminal 1] `yarp rpc /wrapper0/rpc:i`
9. [new terminal 1] `get encs` ((should give around 0.0, but an exact 0 isn't such a good indication either))
10. [new terminal 1] `set pos 0 5` ((movement should be seen and heard))
11. [new terminal 1] `get encs` ((should give around 5))
12. [new terminal 1] `set pos 0 0` ((movement should be seen and heard))
13. [new terminal 1] `get encs` ((should give around 0, ctrl + c to stop))
14. ctrl+c to stop `oneCanBusOneWrapper`
15. Repeat from step 6 for each driver.
16. If everything has worked, launchManipulation (or launchLocomotion) can be launched to test all at once ((e.g. `yarp rpc /teo/leftLeg/rpc: i` and then `set poss (2 2 2 2 2)`))
17. `sudo shutdown -h now` ((this is about ssh))
18. `ssh teo@locomotion` (this is for the locomotion PC)
19. Repeat from step 4 to 17.
