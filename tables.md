# Tables
- [Joint Limits](#joint-limits)
- [DH Parameter Table](#dh-parameter-table)
- [Link Lengths](#link-lengths)
- [Bill of materials (BOM)](#bill-of-materials-bom)
- [Motores: motores](#motores-motores)
- [Motores: protecciones-brazos](#motores-protecciones-brazos)
- [Motores: protecciones-piernas](#motores-protecciones-piernas)
- [Motores: transmision](#motores-transmision)

## Joint Limits
Can be found at [Motores: motores](#motores-motores)

## DH Parameter Table

- Github: [dh-table.csv](/csv/dh-table.csv)
- Gitbook: {% includeCsv src="../csv/dh-table.csv", useHeader="true" %}{% endincludeCsv %}

## Link Lengths
| lengths | distance [mm] | |
| ------------ | ------------ | ------------ |
| l0 | 193.2| |	
| l1 | 305| |	
| l2 | 162.5 | | 	
| l3 | 59.742 | | 	
| l4 | 37.508 | | 	
| l5 | 346.92 | |	
| l6 | 329.01 | |	
| l7 | 202 | |	
| l8 | 187.496 | Con F/T, a 2 cm debajo chapa final mano.|
| l9 | 92 | 	
| l10 | 330 | | 	
| l11 | 300 | | 	
| l12 | 123.005 | | 	
| l13 | 146 | | 	
| l14 | 18| | 	
| l15 | 26 | | 	
| l16 | 17.5 | | 	

# Bill of materials (BOM)

Device | Brand | Model | YARP device | Desciption/Comments
---|---|---|---|---
EC Motor|Maxon|F400108/F411815||F400108 -> wrists joints and axial legs<br/> F411815 -> the rest
Motor Driver|Technosoft|iPOS 3602/3604/4808|TechnosoftIpos|3602 -> front wrist<br/>3604 -> all except legs and trunk<br/>4808 -> legs and trunk
Relative Encoder|CUI Inc|AMT 203-V|TechnosoftIpos|
Absolute Encoder|CUI Inc|AMT 203-V|CuiAbsolute|Uses PIC18F2580
Force-Torque Sensor|JR3|50M31A3-125-DH|Jr3|50M31A3-125-DH -> wrist<br/>((( unknown ))) -> ankle
Inertial Sensor|XSENS|MTi-28A53G35|xsensmtx|Product ID: MTi-28A53G35<br/> Device ID: 00305355<br/>
RGBD Sensor|ASUS|XtionPRO Live|OpenNI2Server|RGB and Depth Sensor
RGB Camera|Point Grey|Flea3 FL3-U3-88S2C-C|AravisGigE|USB3
Fetch Hand|Lacquey|Fetch Hand|LacqueyFetch|Three finger underactuated

## Motores: motores
- Github: [motores-motores.csv](csv/motores-motores.csv)
- Gitbook: {% includeCsv src="csv/motores-motores.csv", useHeader="true" %}{% endincludeCsv %}

## Motores: protecciones-brazos
- Github: [motores-protecciones-brazos.csv](csv/motores-protecciones-brazos.csv)
- Gitbook: {% includeCsv src="csv/motores-protecciones-brazos.csv", useHeader="true" %}{% endincludeCsv %}

## Motores: protecciones-piernas
- Github: [motores-protecciones-piernas.csv](csv/motores-protecciones-piernas.csv)
- Gitbook: {% includeCsv src="csv/motores-protecciones-piernas.csv", useHeader="true" %}{% endincludeCsv %}

## Motores: transmision
- Github: [motores-transmision.csv](csv/motores-transmision.csv)
- Gitbook: {% includeCsv src="csv/motores-transmision.csv", useHeader="true" %}{% endincludeCsv %}
