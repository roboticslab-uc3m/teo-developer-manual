# Network Information

* [TEONET (main router)](#teonet-main-router)
* [TL-WR2543ND: router configured as switch](#tl-wr2543nd-router-configured-as-switch)
* [EdgeRouter X: Teo internal router as a switch](#edgerouter-x-teo-internal-router-as-a-switch)
* [manipulation (robot front right PC)](#manipulation-robot-front-right-pc)
  * [manipulation additional setup](#manipulation-additional-setup)
* [locomotion (robot front left PC)](#locomotion-robot-front-left-pc)
  * [locomotion additional setup](#locomotion-additional-setup)
* [teo-head (robot back left PC)](#teo-head-robot-back-left-pc)
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

## manipulation (left robot PC)

Memory 3.1 GiB, Processor Intel® Core™2 Duo CPU E7500 @ 2.93GHz x 2, Disk 106 GiB.
- OS: Ubuntu 16.04 Xenial
- Maintainer: [@rsantos88](https://github.com/rsantos88)

Intended for [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices) and [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics).

- teo right side
- wlan1  5c:d9:98:9a:94:5c  2.2.2.51
- eth0  00:18:7d:0b:2d:9d  2.2.2.61 
- user: teo
- pass: teo
- su: manipulation

Runs `yarp server` as service using [daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md)), activated in `/etc/service/yarpserver/run` with `chmod +x` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarp server --read
```

Also, runs `yarprun --server /manipulation` as service using [daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md), activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

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

## locomotion (right robot PC)
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

The execution of `yarprun --server /locomotion` is implemented as service using [daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md), activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

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

## teo-head (center robot PC)
Memory 3.1 GiB, Processor Intel® Core™ i5-4570S CPU @ 2.90GHz x 4, Disk 52 GiB.
- OS: OS: Ubuntu 16.04 Xenial.
- Maintainer: [@rsantos88](https://github.com/rsantos88)

Intended for [vision](https://github.com/roboticslab-uc3m/vision) and [speech](https://github.com/roboticslab-uc3m/speech).

- eth1  00:01:2e:51:9c:c1  2.2.2.53  
- user: teo
- pass: teo

The execution of `yarprun --server /head` is implemented as service using [daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md), activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarprun --server /head
```

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
