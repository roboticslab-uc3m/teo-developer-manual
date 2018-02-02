# teo-developer-manual
Developer Manual for [TEO](http://roboticslab.uc3m.es/roboticslab/robot/teo-humanoid).

- [GitBook](https://www.gitbook.com/book/roboticslab-uc3m/teo-developer-manual)
- [GitHub](https://github.com/roboticslab-uc3m/teo-developer-manual)

## Contributing

#### Posting Issues

1. Read [CONTRIBUTING.md](https://github.com/roboticslab-uc3m/teo-developer-manual/blob/master/CONTRIBUTING.md)
2. [Post an issue / Feature request / Specific documentation request](https://github.com/roboticslab-uc3m/teo-developer-manual/issues)

#### General workflow
1. This is a pure documentation repository, so we only use the `master` branch.

#### Workflow for assets:
1. Generate sources, attempting to use open formats, for  example: `.ods` for tables (e.g. via `calc`), `.svg` for drawings (e.g. via `inkscape`), etc. Omit the next two steps if your format is not binary.
1. Upload to https://github.com/roboticslab-uc3m/teo-developer-manual -> `assets/src`. Example: [here](https://github.com/roboticslab-uc3m/teo-software-manual/tree/a3e216facf8e486ff81d8cbb8d0526eb080e8ec9/assets/src).
1. Generate viewable contents, for  example: `.md` for tables (e.g. via [ods2md](https://github.com/kennytm/ods2md)), `.png` for drawings (e.g. via `inkscape` export option).
1. Upload to https://github.com/roboticslab-uc3m/teo-developer-manual -> `assets`. Example: [here](https://github.com/roboticslab-uc3m/teo-developer-manual/tree/a3e216facf8e486ff81d8cbb8d0526eb080e8ec9/assets).
1. Link viewable contents within corresponding `.md`. Example: [here](https://github.com/roboticslab-uc3m/teo-software-manual/blob/88ee76ef1946481562da07cff3fbd39b10c7d8d1/appendix/a-teo-diagrams.md).
1. Update external repositories that use this information. Example: [teo-configuration-files](https://github.com/roboticslab-uc3m/teo-configuration-files).
