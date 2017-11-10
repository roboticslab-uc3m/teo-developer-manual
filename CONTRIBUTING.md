## Asking questions
Have a feature request or found a bug?

Before opening a fresh issue, do a search on [the wiki](http://robots.uc3m.es/index.php/TEO) and on [GitHub](https://github.com/roboticslab-uc3m/openrave-yarp-plugins/issues?utf8=%E2%9C%93&q=is%3Aissue) and make sure it hasn't already been addressed. Here are some notes on how to detail feature requests or bug reports:* Explain, as detailed as possible, how to reproduce the issue or the specific behaviour for the feature.
* Include what you expected to happen and what actually happened.
* Please include information on what operating system and version you are working with. Also add any other relevant details.
* Feel free to attach any other information illustrating the issue if copying and pasting text is not an option.

## General workflow
* In this pure documentation repo, we only use the `master` branch.

## Workflow for assets:
1. Generate sources: `.ods` for tables (e.g. via `calc`), `.svg` for drawings (e.g. via `inkscape`).
1. Upload to https://github.com/roboticslab-uc3m/teo-software-manual -> `assets/src`. Example: [here](https://github.com/roboticslab-uc3m/teo-software-manual/tree/a3e216facf8e486ff81d8cbb8d0526eb080e8ec9/assets/src).
1. Generate viewable contents: `.md` for tables (e.g. via [ods2md](https://github.com/kennytm/ods2md)), `.png` for drawings (e.g. via `inkscape` export option).
1. Upload to https://github.com/roboticslab-uc3m/teo-software-manual -> `assets`. Example: [here](https://github.com/roboticslab-uc3m/teo-software-manual/tree/a3e216facf8e486ff81d8cbb8d0526eb080e8ec9/assets).
1. Link viewable contents within corresponding `.md`. Example: [here](https://github.com/roboticslab-uc3m/teo-software-manual/blob/dc047c5528c74f659eb45e3153c1fb74ef09423e/appendix-a---teo-diagrams.md).
