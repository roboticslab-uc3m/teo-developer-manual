# Network Information

## TEONET (main router)

- wifi-ssid: TEONET
- wifi-password: teochallenge

- External IP: 163.117.150.74
- Internal IP: 2.2.2.1
- IP Subnet Mask: 255.255.255.0
- Gateway IP Address: 163.117.150.2
- Primary DNS: 163.117.131.35
- Configuration web: www.routerlogin.net
- user: admin
- pass: admin

## TL-WR2543ND: router configured as switch

- External IP: Dynamic IP
- Internal IP: 2.2.2.2
- IP Subnet Mask: 255.255.255.0
- user: admin
- pass: admin

## Ubiquiti EdgeRouter X: Teo internal router as a switch

- Internal IP: 2.2.2.10
- IP Subnet Mask: 255.255.255.0
- user: ubnt
- pass: ubnt

## manipulation (left robot PC)

Memory 16 GiB, Processor Intel(R) Core(TM) i7-10710U CPU @ 1.10GHz, Disk 111 GiB.

- OS (dual boot):
  - Partition 80Gb: Ubuntu 20.04 Focal Fossa
  - Partition 20Gb: Ubuntu 16.04 Xenial

### manipulation: pass

- teo / teo
- su: manipulation

### manipulation: MAC/IP

- wlan1  5c:d9:98:9a:94:5c  2.2.2.51
- eth0  00:18:7d:0b:2d:9d  2.2.2.61

### manipulation: init

Runs `yarp server` as service using [daemontools](https://robots.uc3m.es/installation-guides/install-daemontools.html)), activated in `/etc/service/yarpserver/run` with `chmod +x` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarp server --read
```

Also, runs `yarprun --server /manipulation` as service using [daemontools](https://robots.uc3m.es/installation-guides/install-daemontools.html), activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

```bash
#!/bin/bash
export ATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarprun --server /manipulation
```

### manipulation: install

- [GCC 7.5](https://github.com/roboticslab-uc3m/teo-hardware-issues/issues/58#issuecomment-683809599)
- [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices)
- [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics)
- [PCAN-M2](https://robots.uc3m.es/installation-guides/install-pcan.html)
- [JR3](https://robots.uc3m.es/installation-guides/install-jr3.html)
- CuiAbsolute:
   - [VirtualBox Image with Windows 7 and MPLAB IDE v8.92](https://drive.google.com/open?id=1M8_ixoSgd8n-s4Gv71IwQD_nJKU8QcJH)
- `YARP_ROBOT_NAME=teo`
- `YARP_PORT_PREFIX=/teo`
- `YARP_COLORED_OUTPUT=1`

## locomotion (right robot PC)

Memory 16 GiB, Processor Intel(R) Core(TM) i5-7300U CPU @ 2.60GHz, GPU: HD Graphics 620, Disk 106 GiB.

- OS (dual boot):
  - Partition 80Gb: Ubuntu 20.04 Focal Fossa
  - Partition 20Gb: Ubuntu 16.04 Xenial

### locomotion: pass

- teo / teo
- su: locomotion

### locomotion: MAC/IP

- wlan1  5c:d9:98:9a:94:5d  2.2.2.52
- eth0  00:18:7d:0b:2d:71  2.2.2.62

### locomotion: init

The execution of `yarprun --server /locomotion` is implemented as service using [daemontools](https://robots.uc3m.es/installation-guides/install-daemontools.html), activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

```bash
#!/bin/bash  
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarprun --server /locomotion
```

### locomotion: install

- [GCC 7.5](https://github.com/roboticslab-uc3m/teo-hardware-issues/issues/58#issuecomment-683809599)
- [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices)
- [kinematics-dynamics](https://github.com/roboticslab-uc3m/kinematics-dynamics)
- [XSENS](https://robots.uc3m.es/installation-guides/install-xsens.html)
- CuiAbsolute:
   - [VirtualBox Image with Windows 7: MPLAB IDE v8.92 and EasySetUp](https://drive.google.com/a/uc3m.es/folderview?id=0BxR76I90oKSmdnRhQlpsS3pXWm8&usp=sharing)
- `YARP_ROBOT_NAME=teo`
- `YARP_PORT_PREFIX=/teo`
- `YARP_COLORED_OUTPUT=1`

## teo-head (center robot PC)

Memory 16 GiB, Processor Intel(R) Core(TM) i5-7300U CPU @ 2.60GHz, GPU: HD Graphics 620, Disk 52 GiB.
- OS (dual boot):
  - Partition 40Gb: Ubuntu 20.04 Focal Fossa
  - Partition 20Gb: Ubuntu 16.04 Xenial

### teo-head: pass

- user: teo
- pass: teo

### teo-head: MAC/IP

- eth1  00:01:2e:51:9c:c1  2.2.2.53

### teo-head: init

The execution of `yarprun --server /head` is implemented as service using [daemontools](https://robots.uc3m.es/installation-guides/install-daemontools.html), activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarprun --server /head
```

### teo-head: install

- [GCC 7.5](https://github.com/roboticslab-uc3m/teo-hardware-issues/issues/58#issuecomment-683809599)
- [vision](https://github.com/roboticslab-uc3m/vision)
- [speech](https://github.com/roboticslab-uc3m/speech)
- `YARP_COLORED_OUTPUT=1`

## Mapping hostnames to IP addresses in your computer

You can edit the `/etc/hosts` file of your system for mapping some hostnames to IP addresses. Now, you can associate the name of teo pc's
with their IPs:

```bash
2.2.2.51 manipulation
2.2.2.52 locomotion
2.2.2.53 head
```

For example, if you want connect by ssh with teo-manipulation PC, you can put `ssh manipulation` instead of `ssh 2.2.2.51`. It's easier to remember!!

## Other hardware configuration

- [Setting up Wifi connection: Netgear A6100 WiFi USB Mini Adapter](https://robots.uc3m.es/installation-guides/install-netgear-a6100.html)

## Uncategorized

```bash
sudo mount -t nfs 163.117.150.231:/home/teo sitio\_de\_montaje
rsync -avzP local/dir/ teo@2.2.2.51:remote/dir/
```
