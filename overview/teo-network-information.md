## TEONET (router)

`wifi-ssid: TEONET`  
`wifi-password: teochallenge`  
`note: wifi disabled in lab.`  
  
`External IP: 163.117.150.74`  
`Internal IP: 2.2.2.1`  
`user: admin`  
`pass: admin`

## teo-main

Memory 3.9 GiB, Processor Intel® Core™2 Duo CPU E8400 @ 3.00GHz x 2,
Graphics NVIDIA GeForce 9500 GT/PCIe/SSE2 (G96 rev a1), Disk 487.9 GiB.
Origin old miguelgfierro. Ubuntu 14.10 64-bit. jgvictores.

Intended for kinematics-dynamics @ GitHub, automatically runs "yarp
server" on port 10000.

`eth0  00:24:8c:26:ff:85  2.2.2.50`  
`user: teo`  
`pass: teo`

The execution of "yarp server" is activated in "~/.profile" through the
lines:

`yarp conf 2.2.2.50 10000`  
`gnome-terminal -e "yarp server --write" &`

## manipulation (robot front right PC)

Memory 3.1 GiB, Processor Intel® Core™2 Duo CPU E7500 @ 2.93GHz x 2,
Disk 106 GiB. Debian GNU/Linux 6.0.10 (squeeze). jgvictores.

Intended for yarp-devices @ GitHub, automatically runs "yarprun --server
/manipulation".

`teo right side`  
`wlan1  5c:d9:98:9a:94:5c  2.2.2.51`  
`eth0  00:18:7d:0b:2d:9d  2.2.2.61`  
`user: teo`  
`pass: teo`  
`su: manipulation`

The execution of "yarprun --server /manipulation" is implemented as
service using "daemontools" ([Help on
daemontools](Help_on_daemontools "wikilink")). "daemontools" is
activated in "/etc/rc.local" through the line (before exit):

`/bin/csh -cf '/usr/bin/svscanboot &'`

"yarprun --server /manipulation" is activated in
"/etc/service/yarprun/run" through the lines:

`#!/bin/bash`  
`export PATH=/usr/local/bin:/usr/bin:/bin`  
`export YARP_CONF=/home/teo/.config/yarp`  
`yarprun --server /manipulation`

Additionally, in .profile, at the end, we have:

`export YARP_DATA_DIRS=$HOME/repos/teo-body/build/share/teo-body`  
`export PATH=$PATH:$HOME/repos/teo-body/build/bin`

### JR3 card

Now add the following lines to /etc/rc.local (lines before the exit) to
automatically run the jr3 module in the PC switching
on:

`insmod /home/teo/repos/LoliRepo/jr3/jr3pci-linux-0.5/jr3pci-driver.ko`  
`mknod /dev/jr3 c 39 0`  
`chmod 777 /dev/jr3 #admin permission `

If green LEDs are off after switching on the PC and "jr3pci\_driver"
does not appear after doing lsmod, try in the jr3 directory
(manipulation PC: home/teo/repos/LoliRepo/jr3/jr3pci-linux-0.5/) and see
README\_loli. Maybe "make clean" before, sometimes work:

`sudo make`  
`sudo insmod jr3pci-driver.ko`  
`sudo make node`

If it doesn't work, type "$ lspci" to see PCI devices connected to the
computer. It should be there "PCI bridge: Pericom Semiconductor
PI7C9X110 PCI Express to PCI bridge" which is the PCI card Adapter. If
nothing works, shutdown and revise connections\!\! (Revise: PCI adapter
connections, power and PCI slots).

In order tu **run the acquisition program**, go to $manipulationPC:
/home/teo/repos/LoliRepo/LoliRepo/TFM/jr3Yarp/jr3pci4channelYarp/build
and execute ./jr3pci4channelYarp for all sensors data acquisition.

## locomotion (robot front left PC)

Memory 3.1 GiB, Processor Intel® Core™2 Duo CPU E7500 @ 2.93GHz x 2,
Disk 106 GiB. Debian GNU/Linux 6.0.10 (squeeze). jgvictores.

Intended for yarp-devices @ GitHub, automatically runs "yarprun --server
/locomotion".

`teo left side`  
`wlan1  5c:d9:98:9a:94:5d  2.2.2.52`  
`eth0  00:18:7d:0b:2d:71  2.2.2.62`  
`user: teo`  
`pass: teo`  
`su: locomotion`

The execution of "yarprun --server /locomotion" is implemented as
service using "daemontools" ([Help on
daemontools](Help_on_daemontools "wikilink")). "daemontools" is
activated in "/etc/rc.local" through the line (before exit):

`/bin/csh -cf '/usr/bin/svscanboot &'`

"yarprun --server /locomotion" is activated in
"/etc/service/yarprun/run" through the lines:

<File:#!/bin/bash>  
`export PATH=/usr/local/bin:/usr/bin:/bin`  
`export YARP_CONF=/home/teo/.config/yarp`  
`yarprun --server /locomotion`

Additionally, in .profile, at the end, we
have:

`export YARP_DATA_DIRS=$HOME/repos/teo-body/build/share/teo-body:/usr/local/share/iCub/`  
`export PATH=$PATH:$HOME/repos/teo-body/build/bin`

In order to allow yarp to read data from the sensors connected via USB
port, you need to add the following rule for udev system:

` KERNEL == "ttyUSB0", MODE = "0777"`

The advise from [debian udev
documentation](https://wiki.debian.org/udev) is to define rules in a
file named "z21\_persistent-local.rules". If there is no such file, it
is recommended to create one. Taking this in consideration, the file
name and path should look like this:
**/etc/udev/rules.d/z21\_persistent-local.rules**

## teo-head (robot back left PC)

Memory 3.1 GiB, Processor Intel® Core™ i5-4570S CPU @ 2.90GHz x 4, Disk
52 GiB. Ubuntu 15.04 w/ 3.19.0-18-generic. jgvictores.

Intended for vision @ GitHub.

`eth1  00:01:2e:51:9c:c1  2.2.2.53`  
`user: teo`  
`pass: teo`

The execution of "yarprun --server /head" is implemented as service
using "daemontools" ([Help on
daemontools](Help_on_daemontools "wikilink")). "daemontools" is
activated in "/etc/rc.local" through the line (before exit):

`/bin/csh -cf '/usr/bin/svscanboot &'`

"yarprun --server /head" is activated in "/etc/service/yarprun/run"
through the lines:

`#!/bin/bash`  
`export PATH=/usr/local/bin:/usr/bin:/bin`  
`export YARP_CONF=/home/teo/.config/yarp`  
`yarprun --server /head`

## teo-benji

Memory 1.9 GiB (DDR II 800), Processor AMD Athlon(tm) 64 Processor 3200+
x 1, Graphics ATI Gallium 0.4 on ATI RV515, Disk 155.3 GiB. Origin old
teo-main. Ubuntu 14.10 64-bit. loli -\> aitor/javier.

## teo-goku

Memory 1.8 GiB, Processor Intel® Core™ i3 CPU 540 @ 3.07GHz × 4,
Graphics Intel® Ironlake Desktop, Disk 243.9 GiB. Does not recognize PCI
devices. Ubuntu 14.10 64-bit. jlorente -\> daniel.

## teo-heidi

pedro -\> rFdez.

## Mapping hostnames to IP addreses in your computer

You can edit the /etc/hosts file of your system for mapping some
hostnames to IP addreses. Now, you can associate the name of teo pc's
with their Ips:

`2.2.2.51 manipulation`  
`2.2.2.52 locomotion`  
`2.2.2.53 head`

For example, if you want connect by ssh with teo-manipulation PC, you
can put “ssh manipulation” instead of “ssh 2.2.2.51”. It's easier to
remember\!\!

## Setting up Wifi connection: Netgear A6100 WiFi USB Mini Adapter

First, we have to install required drivers that have not been merged
with the linux kernel and do not come with most linux distros.

We can install the required build packages, corresponding to our kernel
version:

`uname -r`  
`sudo apt-get install linux-headers-$(uname -r) build-essential`

Now, we will download the source code:

`cd $HOME`  
`mkdir -p src`  
`cd src`  
`git clone `<https://github.com/diederikdehaas/rtl8812AU.git>

Compile the kernel module:

`cd rtl8812AU-driver-4.3.14`  
`make`

Now Then install using make install. Then add 8812au to the end of the
file /etc/modules with tee -a to tell the OS to load the driver when it
boots

`sudo make install`  
`sudo modprobe 8812au`  
`echo 8812au | sudo tee -a /etc/modules`

The wireless should now be working

## Uncategorized

sudo mount -t nfs 163.117.150.231:/home/rh2 sitio\_de\_montaje

rsync -avzP teo-body/ teo@2.2.2.51:test/teo-body/
