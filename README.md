[![roboticslab-uc3m logo](fig/roboticslab-banner-350px.png)](https://github.com/roboticslab-uc3m)

# TEO Developer Manual

[TEO](http://roboticslab.uc3m.es/roboticslab/robot/teo-humanoid) Developer Manual @ [roboticslab-uc3m](https://github.com/roboticslab-uc3m)

Currently hosted at <https://roboticslab-uc3m.github.io/teo-developer-manual/>

## If you have any doubts or comments

Please read the Developer Manual's [Asking Questions](http://robots.uc3m.es/gitbook-developer-manual/asking-questions.html) section, and once you've succeded with its [self-evaluation](http://robots.uc3m.es/gitbook-developer-manual/asking-questions.html#self-evaluation-time) follow the recommendations by commenting publicly [HERE](https://github.com/roboticslab-uc3m/teo-developer-manual/issues/new) if required

## How-To's

- [TEO Developer Manual](#teo-developer-manual)
  - [If you have any doubts or comments](#if-you-have-any-doubts-or-comments)
  - [How-To's](#how-tos)
    - [How to serve on localhost](#how-to-serve-on-localhost)
    - [How to upload changes to GitHub](#how-to-upload-changes-to-github)

### How to serve on localhost

It is useful to serve on `localhost` to modify the website and see changes locally.

1. From the root of the project, run the following command (which is universal for all [Gitbook (legacy)](https://github.com/GitbookIO/gitbook)-based projects):

   ```bash
   gitbook serve # command builds and serves; for installing required plugins, before first  run please: gitbook install
   ```

1. You can now browse the site at the default location: <http://127.0.0.1:4000>

### How to upload changes to GitHub

This project is managed as any project on [GitHub](https://www.github.com). You may use [Git](https://git-scm.com) or even the GitHub web interface, both on which you can find many tutorials online. The following points are specific to the [Gitbook (legacy)](https://github.com/asrob-uc3m/actas/issues/148#issuecomment-449748350) mechanism used:

1. Please **do not upload** the `_book/` folder. It is auto-generated locally, and the same should happen on the Gitbook (legacy) servers.

1. It is safe to `git push` to any upstream branch, just remember that what is on `master` is what will be actually rendered as the website.
