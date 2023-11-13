# Tables

## Joint Limits

Can be found at [Motores: motores](#motores-motores)

## DH Parameters

### Group: head

#### trunk for head (root to neck)

[dh-root-head.csv](csv/dh-root-head.csv)

{{ read_csv('docs/csv/dh-root-head.csv') }}

#### head

[dh-head.csv](csv/dh-head.csv)

{{ read_csv('docs/csv/dh-head.csv') }}

#### head additional transformations

[dh-head-transformations.csv](csv/dh-head-transformations.csv)

{{ read_csv('docs/csv/dh-head-transformations.csv') }}

### Group: rightArm

#### trunk for rightArm (root to rightArm)

[dh-root-rightArm.csv](csv/dh-root-rightArm.csv)

{{ read_csv('docs/csv/dh-root-rightArm.csv') }}

#### rightArm

[dh-rightArm.csv](csv/dh-rightArm.csv)

{{ read_csv('docs/csv/dh-rightArm.csv') }}

#### fetch (right)

[dh-fetch.csv](csv/dh-fetch.csv)

{{ read_csv('docs/csv/dh-fetch.csv') }}

### Group: leftArm

#### trunk for leftArm (root to leftArm)

[dh-root-leftArm.csv](csv/dh-root-leftArm.csv)

{{ read_csv('docs/csv/dh-root-leftArm.csv') }}

#### leftArm

[dh-leftArm.csv](csv/dh-leftArm.csv)

{{ read_csv('docs/csv/dh-leftArm.csv') }}

#### fetch (left)

[dh-fetch.csv](csv/dh-fetch.csv)

{{ read_csv('docs/csv/dh-fetch.csv') }}

### Group: rightLeg

#### root to rightLeg

[dh-root-rightLeg.csv](csv/dh-root-rightLeg.csv)

{{ read_csv('docs/csv/dh-root-rightLeg.csv') }}

#### rightLeg

[dh-rightLeg.csv](csv/dh-rightLeg.csv)

{{ read_csv('docs/csv/dh-rightLeg.csv') }}

### Group: leftLeg

#### root to leftLeg

[dh-root-leftLeg.csv](csv/dh-root-leftLeg.csv)

{{ read_csv('docs/csv/dh-root-leftLeg.csv') }}

#### leftLeg

[dh-leftLeg.csv](csv/dh-leftLeg.csv)

{{ read_csv('docs/csv/dh-leftLeg.csv') }}

### Group: Deprecated transformations

The below are not required at time of writing, and may become outdated with time.

#### Deprecated trunk (root to hip)

This is the original `trunk`, but the three variants (for `head`, `rightArm`, `leftArm`; respectively, above) seem to be more useful.

[deprecated/dh-trunk.csv](csv/deprecated/dh-trunk.csv)

{{ read_csv('docs/csv/deprecated/dh-trunk.csv') }}

#### Deprecated additional transformations

Some not required, redundant or may be derived from from existing `dh-root-*.csv` contents (above).

[deprecated/dh-transformations.csv](csv/deprecated/dh-transformations.csv)

{{ read_csv('docs/csv/deprecated/dh-transformations.csv') }}

## Link Lengths

[lengths.csv](csv/lengths.csv)

{{ read_csv('docs/csv/lengths.csv') }}

## Bill of materials (BOM)

[bom.csv](csv/bom.csv)

{{ read_csv('docs/csv/bom.csv') }}

### Motores

- Original with formulas: [editable/motores.ods](csv/editable/motores.ods)

### Motores: motores

[motores-motores.csv](csv/motores-motores.csv)

{{ read_csv('docs/csv/motores-motores.csv') }}

### Motores: protecciones-brazos

[motores-protecciones-brazos.csv](csv/motores-protecciones-brazos.csv)

{{ read_csv('docs/csv/motores-protecciones-brazos.csv') }}

### Motores: protecciones-piernas

[motores-protecciones-piernas.csv](csv/motores-protecciones-piernas.csv)

{{ read_csv('docs/csv/motores-protecciones-piernas.csv') }}

### Motores: transmision

[motores-transmision.csv](csv/motores-transmision.csv)

{{ read_csv('docs/csv/motores-transmision.csv') }}
