# Appendix C: TEO Network Information

* [TEONET (main router)](#teonet-main-router)
* [TL-WR2543ND: router configured as switch](#tl-wr2543nd-router-configured-as-switch)
* [EdgeRouter X: Teo internal router as a switch](#edgerouter-x-teo-internal-router-as-a-switch)
* [manipulation (robot front right PC)](#manipulation-robot-front-right-pc)
  * [manipulation additional setup](#manipulation-additional-setup)
* [locomotion (robot front left PC)](#locomotion-robot-front-left-pc)
  * [locomotion additional setup](#locomotion-additional-setup)
* [teo-head (robot back left PC)](#teo-head-robot-back-left-pc)
* [teo-main](#teo-main)
* [teo-oliver](#teo-oliver)
* [teo-nobita](#teo-nobita)
* [teo-benji](#teo-benji)
* [teo-suneo](#teo-suneo)
* [teo-bobobo](#teo-bobobo)
* [humanoidsUC3M](#humanoidsuc3m)
* [teo-heidi](#teo-heidi)
* [teo-goku](#teo-goku)
* [Mapping hostnames to IP addreses in your computer](#mapping-hostnames-to-ip-addreses-in-your-computer)
* [Other hardware configuration](#other-hardware-configuration)
* [Uncategorized](#uncategorized)

## TEONET (main router)

- wifi-ssid: TEONET
- wifi-password: teochallenge
  
- External IP: 163.117.150.74
- Internal IP: 2.2.2.1
- IP Subnet Mask: 255.255.255.0
- Gateway IP Address: 163.117.150.2
- Primary DNS: 163.117.131.35
- Configuration web: www.routerlogin.net
- user: admin
- pass: admin

## TL-WR2543ND: router configured as switch
- External IP: Dynamic IP
- Internal IP: 2.2.2.2
- IP Subnet Mask: 255.255.255.0
- user: admin
- pass: admin

## EdgeRouter X: Teo internal router as a switch
- Internal IP: 2.2.2.10
- IP Subnet Mask: 255.255.255.0
- user: ubnt
- pass: ubnt

## manipulation (robot front right PC)

Memory 3.1 GiB, Processor Intel® Core™2 Duo CPU E7500 @ 2.93GHz x 2, Disk 106 GiB.
- OS: Ubuntu 16.04 Xenial (per [teo-main#32](https://github.com/roboticslab-uc3m/teo-main/issues/32#issuecomment-364136297) has dual boot: Debian GNU/Linux 6.0.10 Squeeze)
- Maintainer: [@rsantos88](https://github.com/rsantos88)

Intended for [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices) and [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics).

- teo right side
- wlan1  5c:d9:98:9a:94:5c  2.2.2.51
- eth0  00:18:7d:0b:2d:9d  2.2.2.61 
- user: teo
- pass: teo
- su: manipulation

Runs `yarprun --server /manipulation` as service using [daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md), activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarprun --server /manipulation
```

### manipulation additional setup
- JR3: [install-jr3.md](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-jr3.md)
- CuiAbsolute:
   - [VirtualBox Image with Windows 7 and MPLAB IDE v8.92](https://drive.google.com/open?id=1M8_ixoSgd8n-s4Gv71IwQD_nJKU8QcJH)
   - [CuiAbsolute Documentation](../cui-absolute-values.md)

## locomotion (robot front left PC)
Memory 3.1 GiB, Processor Intel® Core™2 Duo CPU E7500 @ 2.93GHz x 2, Disk 106 GiB.
- OS: Ubuntu 16.04 Xenial (per [teo-main#32](https://github.com/roboticslab-uc3m/teo-main/issues/32#issuecomment-364136297) has dual boot: Debian GNU/Linux 6.0.10 Squeeze)
- Maintainer: [@rsantos88](https://github.com/rsantos88)

Intended for [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices) and [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics).

- teo left side
- wlan1  5c:d9:98:9a:94:5d  2.2.2.52
- eth0  00:18:7d:0b:2d:71  2.2.2.62 
- user: teo
- pass: teo
- su: locomotion

The execution of `yarprun --server /locomotion` is implemented as service using [daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md), activated in `/etc/rc.local` through the line lines:

```bash
#!/bin/bash  
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp  
yarprun --server /locomotion
```

### locomotion additional setup
- XSENS: [install-xsens.md](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-xsens.md)
- CuiAbsolute:
   - [VirtualBox Image with Windows 7: MPLAB IDE v8.92 and EasySetUp](https://drive.google.com/a/uc3m.es/folderview?id=0BxR76I90oKSmdnRhQlpsS3pXWm8&usp=sharing)
   - [CuiAbsolute Documentation](../cui-absolute-values.md)

## teo-head (robot back left PC)
Memory 3.1 GiB, Processor Intel® Core™ i5-4570S CPU @ 2.90GHz x 4, Disk 52 GiB.
- OS: Ubuntu 15.04 w/ 3.19.0-18-generic.
- Maintainer: [@rsantos88](https://github.com/rsantos88)

Intended for [vision](https://github.com/roboticslab-uc3m/vision) and [speech](https://github.com/roboticslab-uc3m/speech).

- eth1  00:01:2e:51:9c:c1  2.2.2.53  
- user: teo
- pass: teo

The execution of `yarprun --server /head` is implemented as service using `daemontools` ([Help on daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md)). `daemontools` is activated in `/etc/rc.local` through the line (before exit):

```bash
/bin/csh -cf '/usr/bin/svscanboot &'
```

`yarprun --server /head` is activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarprun --server /head
```

## teo-main
Note: Must update, see [#41](https://github.com/roboticslab-uc3m/teo-developer-manual/issues/41).

Memory 3.9 GiB, Processor Intel® Core™2 Duo CPU E8400 @ 3.00GHz x 2, Graphics NVIDIA GeForce 9500 GT/PCIe/SSE2 (G96 rev a1), Disk 487.9 GiB.
- OS: Ubuntu 14.10 64-bit.
- Maintainers: ?
- Other details: Origin old miguelgfierro.

- eth0  00:24:8c:26:ff:85  2.2.2.50
- user: teo
- pass: teo

No longer runs `yarp server`, but used to run it as service using [daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md)), activated in `/etc/service/yarpserver/run` with `chmod +x` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarpserver
```

## teo-oliver
Memory 7,7 GiB, Processor Intel® Core™ i5-4460 CPU @ 3.20GHz × 4, Graphics Intel® Haswell Desktop , Disk 507,6 GB.
- OS: ubuntu 14.04 LTS
- Maintainer: @rsantos88

## teo-nobita
Memory 3,8 GiB, Processor Intel® Core™ 2 Duo CPU E8400 @ 3.00GHz × 2, Graphics NV98, Disk 153,8 GB.
- OS: ubuntu 16.04 LTS
- Maintainer: ?

## teo-benji
Memory 1.9 GiB (DDR II 800), Processor Intel® Core™ i3 CPU 540 @ 3.07GHz × 4, Graphics Intel Ironlake Desktop, Disk 488,2 GiB.
- OS: Ubuntu 16.04 LTS 64-bit
- Maintainer: ?
- Other details: Origin old teo-main. loli -\> aitor/javier.

## teo-suneo
Memory 3,3 GiB, Processor Intel® Core™ 2 CPU 6320 @ 1.86GHz × 2, Graphics Gallium 0.4 on NV86, Disk 153,8 GB.
- OS: ubuntu 16.04 LTS 64-bit
- Maintainer: Lucas ?

## teo-bobobo
Memory 6,9 GiB, Processor Intel® Core™ 2 Duo CPU E8400 @ 3.00GHz × 2, Graphics GeForce 9500 GT, Disks 256 GiB and 100 GiB .
- OS: ubuntu 14.04 LTS
- Maintainer: @RaulFdzbis

## humanoidsUC3M
Memory 62,9 GiB, Processor Intel® Core™ i7-4820K CPU @ 3.70GHz × 8, Graphics GeForce GT 630/PCIe/SSE2, Disk 204,5 GiB.
- OS: ubuntu 14.04 LTS 64-bit
- Maintainer: @AlvaroMartinezR

## teo-heidi
Memory 2,0 GiB, Processor AMD Athlon(tm) 64 X2 Dual Core Processor 4200+ 2.21 GHz, Graphics Nvidia GeForce 7300 LE, Disks 114,5 GiB and 149,05 GiB.
- OS: Windows 10 Home
- Maintainer: Pedro Portalatin ?

## teo-goku
Memory 1.8 GiB, Processor Intel® Core™ i3 CPU 540 @ 3.07GHz × 4, Graphics Intel® Ironlake Desktop, Disk 243.9 GiB. Does not recognize PCI devices.
- OS: Ubuntu 14.10 64-bit.
- Maintainer: jlorente -\> daniel. ?


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
- [Setting up Wifi connection: Netgear A6100 WiFi USB Mini Adapter](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-netgear-a6100.md)

## Uncategorized
```bash
sudo mount -t nfs 163.117.150.231:/home/teo sitio\_de\_montaje
rsync -avzP local/dir/ teo@2.2.2.51:remote/dir/
```
