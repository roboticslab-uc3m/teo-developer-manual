# TEO Network Information

## TEONET (router)

- wifi-ssid: TEONET
- wifi-password: teochallenge
  
- External IP: 163.117.150.74
- Internal IP: 2.2.2.1
- user: admin
- pass: admin

## teo-main

Memory 3.9 GiB, Processor Intel® Core™2 Duo CPU E8400 @ 3.00GHz x 2, Graphics NVIDIA GeForce 9500 GT/PCIe/SSE2 (G96 rev a1), Disk 487.9 GiB. Origin old miguelgfierro. Ubuntu 14.10 64-bit. @jgvictores, @rsantos88.

Intended for [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics), etc, automatically runs `yarp server` on port 10000.

- eth0  00:24:8c:26:ff:85  2.2.2.50
- user: teo
- pass: teo

The execution of `yarp server` is activated in `~/.profile` through the lines:

```bash
yarp conf 2.2.2.50 10000
gnome-terminal -e "yarp server --write" &
```

## manipulation (robot front right PC)

Memory 3.1 GiB, Processor Intel® Core™2 Duo CPU E7500 @ 2.93GHz x 2, Disk 106 GiB. Debian GNU/Linux 6.0.10 (squeeze). jgvictores.

Intended for [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices), automatically runs `yarprun --server /manipulation`.

- teo right side
- wlan1  5c:d9:98:9a:94:5c  2.2.2.51
- eth0  00:18:7d:0b:2d:9d  2.2.2.61 
- user: teo
- pass: teo  
- su: manipulation

The execution of `yarprun --server /manipulation` is implemented as service using `daemontools` ([Help on daemontools](Help_on_daemontools "wikilink")). `daemontools` is activated in `/etc/rc.local` through the line (before exit):

```bash
/bin/csh -cf '/usr/bin/svscanboot &'
```

`yarprun --server /manipulation` is activated in `/etc/service/yarprun/run` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONF=/home/teo/.config/yarp
yarprun --server /manipulation
```

Additionally, in `.profile`, at the end, we have:

```bash
export YARP_DATA_DIRS=$HOME/repos/teo-body/build/share/teo-body
export PATH=$PATH:$HOME/repos/teo-body/build/bin
```

## locomotion (robot front left PC)

Memory 3.1 GiB, Processor Intel® Core™2 Duo CPU E7500 @ 2.93GHz x 2, Disk 106 GiB. Debian GNU/Linux 6.0.10 (squeeze). jgvictores.

Intended for [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices), automatically runs `yarprun --server /locomotion`.

- teo left side
- wlan1  5c:d9:98:9a:94:5d  2.2.2.52
- eth0  00:18:7d:0b:2d:71  2.2.2.62 
- user: teo
- pass: teo
- su: locomotion

The execution of "yarprun --server /locomotion" is implemented as service using "daemontools" ([Help on daemontools](Help_on_daemontools "wikilink")). "daemontools" is activated in "/etc/rc.local" through the line (before exit):

```bash
/bin/csh -cf '/usr/bin/svscanboot &'
```

`yarprun --server /locomotion` is activated in `/etc/service/yarprun/run` through the lines:

```bash
#!/bin/bash  
`export PATH=/usr/local/bin:/usr/bin:/bin`  
`export YARP_CONF=/home/teo/.config/yarp`  
`yarprun --server /locomotion`
```

Additionally, in `.profile`, at the end, we have:

```bash
export YARP_DATA_DIRS=$HOME/repos/teo-body/build/share/teo-body:/usr/local/share/iCub/
export PATH=$PATH:$HOME/repos/teo-body/build/bin
```

In order to allow yarp to read data from the sensors connected via USB
port, you need to add the following rule for udev system:

` KERNEL == "ttyUSB0", MODE = "0777"`

The advise from [debian udev documentation](https://wiki.debian.org/udev) is to define rules in a file named `z21\_persistent-local.rules`. If there is no such file, it is recommended to create one. Taking this in consideration, the file
name and path should look like this: `/etc/udev/rules.d/z21\_persistent-local.rules`

## teo-head (robot back left PC)

Memory 3.1 GiB, Processor Intel® Core™ i5-4570S CPU @ 2.90GHz x 4, Disk 52 GiB. Ubuntu 15.04 w/ 3.19.0-18-generic. jgvictores.

Intended for [vision](https://github.com/roboticslab-uc3m/vision) and [speech](https://github.com/roboticslab-uc3m/speech).

- eth1  00:01:2e:51:9c:c1  2.2.2.53  
- user: teo
- pass: teo

The execution of `yarprun --server /head` is implemented as service using `daemontools` ([Help on daemontools](Help_on_daemontools "wikilink")). `daemontools` is activated in `/etc/rc.local` through the line (before exit):

```bash
/bin/csh -cf '/usr/bin/svscanboot &'
```

`yarprun --server /head` is activated in `/etc/service/yarprun/run` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONF=/home/teo/.config/yarp
yarprun --server /head
```
## teo-benji

Memory 1.9 GiB (DDR II 800), Processor AMD Athlon(tm) 64 Processor 3200+ x 1, Graphics ATI Gallium 0.4 on ATI RV515, Disk 155.3 GiB. Origin old teo-main. Ubuntu 14.10 64-bit. loli -\> aitor/javier.

## teo-goku

Memory 1.8 GiB, Processor Intel® Core™ i3 CPU 540 @ 3.07GHz × 4, Graphics Intel® Ironlake Desktop, Disk 243.9 GiB. Does not recognize PCI devices. Ubuntu 14.10 64-bit. jlorente -\> daniel.

## teo-heidi

pedro -\> rFdez.

## Mapping hostnames to IP addreses in your computer

You can edit the `/etc/hosts` file of your system for mapping some hostnames to IP addreses. Now, you can associate the name of teo pc's
with their IPs:

```bash
2.2.2.51 manipulation
2.2.2.52 locomotion
2.2.2.53 head
```

For example, if you want connect by ssh with teo-manipulation PC, you can put `ssh manipulation` instead of `ssh 2.2.2.51`. It's easier to remember!!

## Other hardware configuration

- [JR3 card](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-jr3.md)
- [Setting up Wifi connection: Netgear A6100 WiFi USB Mini Adapter](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-netgear-a6100.md)

## Uncategorized
```bash
sudo mount -t nfs 163.117.150.231:/home/rh2 sitio\_de\_montaje
rsync -avzP teo-body/ teo@2.2.2.51:test/teo-body/
```
