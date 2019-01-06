#!/bin/sh

# Thanks: http://stackoverflow.com/questions/14710257/running-a-cron-job-at-230-am-every-day
# On how to automate process at 2:30 every day (type "date" to get your server time)
# crontab -e
# 30 2 * * * /your/command

echo "Update teo-developer-manual..."
cd $HOME/teo-developer-manual
git pull
echo "Gitbook teo-developer-manual..."
rm -r _book/
/usr/local/bin/gitbook build
/usr/local/bin/gitbook pdf . _book/teo-developer-manual.pdf
/usr/local/bin/gitbook mobi . _book/teo-developer-manual.mobi
/usr/local/bin/gitbook epub . _book/teo-developer-manual.epub
cd ..
