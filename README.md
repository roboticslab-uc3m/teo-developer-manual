[![roboticslab-uc3m logo](assets/roboticslab-banner-350px.png)](https://github.com/roboticslab-uc3m)

# TEO Developer Manual

Developer Manual for [TEO](http://roboticslab.uc3m.es/roboticslab/robot/teo-humanoid) @ [roboticslab-uc3m](https://github.com/roboticslab-uc3m)

Currently hosted at http://robots.uc3m.es/gitbook-teo-developer-manual

### If you have any doubts or comments
1. Please check if you can find the answer through the corresponding file and/or folder in-source documentation, as well as in the [Issues](https://github.com/roboticslab-uc3m/teo-developer-manual/issues) section (both Open and Closed issues).
2. If your doubt or comment is not a duplicate, please post a detailed [New issue](https://github.com/roboticslab-uc3m/teo-developer-manual/issues/new).

## How-To's
* [How to serve on localhost](#how-to-serve-on-localhost)
* [How to upload changes to GitHub](#how-to-upload-changes-to-github)

### How to serve on localhost
It is useful to serve on `localhost` to modify the website and see changes locally.

1. From the root of the project, run the following command (which is universal for all [Gitbook (legacy)](https://github.com/GitbookIO/gitbook)-based projects):
```bash
gitbook build && gitbook serve
```

2. You can now browse the site at the default location: http://127.0.0.1:4000

### How to upload changes to GitHub
This project is managed as any project on [GitHub](https://www.github.com). You may use [Git](https://git-scm.com) or even the GitHub web interface, both on which you can find many tutorials online. The following points are specific to the [Gitbook (legacy)](https://github.com/asrob-uc3m/actas/issues/148#issuecomment-449748350) mechanism used:

1. Please **do not upload** the `_book/` folder. It is auto-generated locally, and the same should happen on the Gitbook (legacy) servers.

2. It is safe to `git push` to any upstream branch, just remember that what is on `master` is what will be actually rendered as the website.
