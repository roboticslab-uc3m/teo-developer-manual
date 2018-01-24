# Appendix A: TEO Diagrams
- [Joint Indexes](#joint-indexes)
- [Joint Directions of Rotation](#joint-directions-of-rotation)
- [DH Parameter Table](#dh-parameter-table)
- [DH Coordinate Systems Drawing](#dh-coordinate-systems-drawing)
- [Link Lengths](#link-lengths)
- [COGs](#cogs)
- [F-T sensors](#f-t-sensors)
- [JR3 wrists drawings](#jr3-wrists-drawings)

## Joint Indexes

| Joint Indexes (CAN bus) |Joint Indexes (YARP ports) |
| ------------- | ------------- |
| <img alt="DH" src="../assets/Joints_(can).png" width="300" /> | <img alt="DH" src="../assets/Joints_(yarp).png" width="500" /> |

## Joint Directions of Rotation
| Joint Directions of Rotation |
| ------------- |
| <img alt="DH" src="../assets/Directions.png" width="300" /> |

## DH Parameter Table

- DH Parameter Table:
  - View: [Markdown (.md)](../assets/dh-table.md)
  - Original: [LibreOffice Calc (.ods)](../assets/src/dh-table.ods)

## DH Coordinate Systems Drawing

<img alt="DH" src="../assets/dh-drawing.png" width="400" />

## Link Lengths
<img alt="DH" src="../assets/Lengths.png" width="250" />  <img alt="DH" src="../assets/TEO_by_links.JPG" width="400" /> 

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

## Joint mechanical limits

| Limb            | Link                                               | Upper limit | Lower limit |
|:----------------|:---------------------------------------------------|:--------|:-----|
| Left leg        | 1                                                  | 0      | 0    | 
|                 | 2                                                  | 0  | 0    | 
|                 | 3                                                  | 0      | 0    | 
|                 | 4                                                  | 0     | 0 | 
|                 | 5                                                  | 0  | 0    | 
|                 | 6                                                  | 0    | 0    | 
| Right leg       | 1                                                  | 0      | 0    | 
|                 | 2                                                  | 0   | 0    | 
|                 | 3                                                  | 0      | 0    | 
|                 | 4                                                  | 0      | 0  | 
|                 | 5                                                  | 0     | 0    | 
|                 | 6                                                  | 0      | 0    | 
| Right arm       | 1                                                  | 90 | -90 *   | 
|                 | 2                                                  | -70 | 30    | 
|                 | 3                                                  | 80 | -55 | 
|                 | 4                                                  | 80 | -15  | 
|                 | 5                                                  | 75 | -50  | 
|                 | 6                                                  | 100 | -55   | 
| Left arm        | 1                                                  | -90 | 90 * | 
|                 | 2                                                  | 70 | -30 | 
|                 | 3                                                  | -80 | 55   | 
|                 | 4                                                  | -80 |15 | 
|                 | 5                                                  | -75 | 50  | 
|                 | 6                                                  | -100 | 55 | 
| Trunk           | 1                                                  | 0     | 0   | 
|                 | 2                                                  | 0     | 0    | 
| Head            | 1                                                  | 0     | 0    | 
|                 | 2                                                  | 0     | 0    | 


## COGs
| COGs |
| ---------- |
| <img alt="DH" src="../assets/Masses.png" width="300" />  |

## F-T sensors
|  F-T sensors  |
| ---------- |
| <img alt="DH" src="../assets/Ftsensors.png" width="300" />  |

## JR3 wrists drawings
| F-T sensors  |
| ---------- |
| [File:Jr3 50M31 corregido.pdf](../assets/src/Jr3_50M31_corregido.pdf) |
