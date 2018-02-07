# Appendix B: TEO Network Information

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

The execution of `yarprun --server /manipulation` is implemented as service using `daemontools` ([Help on daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md)). `daemontools` is activated in `/etc/rc.local` through the line (before exit):

```bash
/bin/csh -cf '/usr/bin/svscanboot &'
```

`yarprun --server /manipulation` is activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

```bash
#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp
yarprun --server /manipulation
```

### manipulation additional setup
- JR3: [install-jr3.md](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-jr3.md)

## locomotion (robot front left PC)

Memory 3.1 GiB, Processor Intel® Core™2 Duo CPU E7500 @ 2.93GHz x 2, Disk 106 GiB. Debian GNU/Linux 6.0.10 (squeeze). jgvictores.

Intended for [yarp-devices](https://github.com/roboticslab-uc3m/yarp-devices), automatically runs `yarprun --server /locomotion`.

- teo left side
- wlan1  5c:d9:98:9a:94:5d  2.2.2.52
- eth0  00:18:7d:0b:2d:71  2.2.2.62 
- user: teo
- pass: teo
- su: locomotion

The execution of `yarprun --server /locomotion` is implemented as service using `daemontools` ([Help on daemontools](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-daemontools.md)). `daemontools` is activated in `/etc/rc.local` through the line (before exit):

```bash
/bin/csh -cf '/usr/bin/svscanboot &'
```

`yarprun --server /locomotion` is activated in `/etc/service/yarprun/run` with `chmod +x` through the lines:

```bash
#!/bin/bash  
export PATH=/usr/local/bin:/usr/bin:/bin
export YARP_CONFIG_HOME=/home/teo/.config/yarp  
yarprun --server /locomotion
```

### locomotion additional setup
- XSENS: [install-xsens.md](https://github.com/roboticslab-uc3m/installation-guides/blob/master/install-xsens.md)

## teo-head (robot back left PC)

Memory 3.1 GiB, Processor Intel® Core™ i5-4570S CPU @ 2.90GHz x 4, Disk 52 GiB. Ubuntu 15.04 w/ 3.19.0-18-generic. jgvictores.

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

## teo-oliver
Memory 7,7 GiB, Processor Intel® Core™ i5-4460 CPU @ 3.20GHz × 4, Graphics Intel® Haswell Desktop , Disk 507,6 GB.
O.S: ubuntu 14.04 LTS
Actual user: Raúl de Santos Rico

## teo-nobita
Memory 3,8 GiB, Processor Intel® Core™ 2 Duo CPU E8400 @ 3.00GHz × 2, Graphics NV98, Disk 153,8 GB.
O.S: ubuntu 16.04 LTS
Actual user: ?

## teo-benji
Memory 1.9 GiB (DDR II 800), Processor Intel® Core™ i3 CPU 540 @ 3.07GHz × 4, Graphics Intel Ironlake Desktop, Disk 488,2 GiB.
O.S: Ubuntu 16.04 LTS 64-bit
Actual user: ?
Other details: Origin old teo-main. loli -\> aitor/javier.

## teo-suneo
Memory 3,3 GiB, Processor Intel® Core™ 2 CPU 6320 @ 1.86GHz × 2, Graphics Gallium 0.4 on NV86, Disk 153,8 GB.
O.S: ubuntu 16.04 LTS 64-bit
Actual user: Lucas

## teo-bobobo
Memory 6,9 GiB, Processor Intel® Core™ 2 Duo CPU E8400 @ 3.00GHz × 2, Graphics GeForce 9500 GT, Disks 256 GiB and 100 GiB .
O.S: ubuntu 14.04 LTS
Actual user: Raúl Fernandez Fernandez

## humanoidsUC3M
Memory 62,9 GiB, Processor Intel® Core™ i7-4820K CPU @ 3.70GHz × 8, Graphics GeForce GT 630/PCIe/SSE2, Disk 204,5 GiB.
O.S: ubuntu 14.04 LTS 64-bit
Actual user: Alvaro Martinez Robledo

## teo-heidi
Memory 2,0 GiB, Processor AMD Athlon(tm) 64 X2 Dual Core Processor 4200+ 2.21 GHz, Graphics Nvidia GeForce 7300 LE, Disks 114,5 GiB and 149,05 GiB.
O.S: Windows 10 Home
Actual user: Pedro Portalatin

## teo-goku
Memory 1.8 GiB, Processor Intel® Core™ i3 CPU 540 @ 3.07GHz × 4, Graphics Intel® Ironlake Desktop, Disk 243.9 GiB. Does not recognize PCI devices. Ubuntu 14.10 64-bit. jlorente -\> daniel.


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
