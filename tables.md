# Tables
- [Joint Limits](#joint-limits)
- [DH Parameters](#dh-parameters)
- [Link Lengths](#link-lengths)
- [Bill of materials (BOM)](#bill-of-materials-bom)
- [Motores](#motores)
   - [Motores: motores](#motores-motores)
   - [Motores: protecciones-brazos](#motores-protecciones-brazos)
   - [Motores: protecciones-piernas](#motores-protecciones-piernas)
   - [Motores: transmision](#motores-transmision)

## Joint Limits
Can be found at [Motores: motores](#motores-motores)

## DH Parameters

### Group: head

#### trunk for head (root to neck)
- Github: [dh-root-head.csv](csv/dh-root-head.csv)
- Gitbook: {% includeCsv src="csv/dh-root-head.csv", useHeader="true" %}{% endincludeCsv %}

#### head
- Github: [dh-head.csv](csv/dh-head.csv)
- Gitbook: {% includeCsv src="csv/dh-head.csv", useHeader="true" %}{% endincludeCsv %}

#### head additional transformations
- Github: [dh-head-transformations.csv](csv/dh-head-transformations.csv)
- Gitbook: {% includeCsv src="csv/dh-head-transformations.csv", useHeader="true" %}{% endincludeCsv %}

### Group: rightArm

#### trunk for rightArm (root to rightArm)
- Github: [dh-root-rightArm.csv](csv/dh-root-rightArm.csv)
- Gitbook: {% includeCsv src="csv/dh-root-rightArm.csv", useHeader="true" %}{% endincludeCsv %}

#### rightArm
- Github: [dh-rightArm.csv](csv/dh-rightArm.csv)
- Gitbook: {% includeCsv src="csv/dh-rightArm.csv", useHeader="true" %}{% endincludeCsv %}

### Group: leftArm

#### trunk for leftArm (root to leftArm)
- Github: [dh-root-leftArm.csv](csv/dh-root-leftArm.csv)
- Gitbook: {% includeCsv src="csv/dh-root-leftArm.csv", useHeader="true" %}{% endincludeCsv %}

#### leftArm
- Github: [dh-leftArm.csv](csv/dh-leftArm.csv)
- Gitbook: {% includeCsv src="csv/dh-leftArm.csv", useHeader="true" %}{% endincludeCsv %}

### Group: rightLeg

#### root to rightLeg
- Github: [dh-root-rightLeg.csv](csv/dh-root-rightLeg.csv)
- Gitbook: {% includeCsv src="csv/dh-root-rightLeg.csv", useHeader="true" %}{% endincludeCsv %}

#### rightLeg
- Github: [dh-rightLeg.csv](csv/dh-rightLeg.csv)
- Gitbook: {% includeCsv src="csv/dh-rightLeg.csv", useHeader="true" %}{% endincludeCsv %}

### Group: leftLeg

#### root to leftLeg
- Github: [dh-root-leftLeg.csv](csv/dh-root-leftLeg.csv)
- Gitbook: {% includeCsv src="csv/dh-root-leftLeg.csv", useHeader="true" %}{% endincludeCsv %}

#### leftLeg
- Github: [dh-leftLeg.csv](csv/dh-leftLeg.csv)
- Gitbook: {% includeCsv src="csv/dh-leftLeg.csv", useHeader="true" %}{% endincludeCsv %}

### Group: Deprecated transformations
The below are not required at time of writing, and may become outdated with time.

#### Deprecated trunk (root to hip)
This is the original `trunk`, but the three variants (for `head`, `rightArm`, `leftArm`; respectively, above) may be more useful.
- Github: [deprecated/dh-trunk.csv](csv/deprecated/dh-trunk.csv)
- Gitbook: {% includeCsv src="csv/deprecated/dh-trunk.csv", useHeader="true" %}{% endincludeCsv %}

#### Deprecated additional transformations
Some not required, redundant or may be derived from from existing `dh-root-*.csv` contents (below).
- Github: [deprecated/dh-transformations.csv](csv/deprecated/dh-transformations.csv)
- Gitbook: {% includeCsv src="csv/deprecated/dh-transformations.csv", useHeader="true" %}{% endincludeCsv %}

## Link Lengths
- Github: [lengths.csv](csv/lengths.csv)
- Gitbook: {% includeCsv src="csv/lengths.csv", useHeader="true" %}{% endincludeCsv %}

# Bill of materials (BOM)
- Github: [bom.csv](csv/bom.csv)
- Gitbook: {% includeCsv src="csv/bom.csv", useHeader="true" %}{% endincludeCsv %}

## Motores
- Original with formulas: [editable/motores.ods](csv/editable/motores.ods)

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
