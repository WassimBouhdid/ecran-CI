#!/bin/bash
# startup_script.sh

# Log boot timestamp
date >> /home/ci/Documents/screen/logs_monitor/startup_logs.txt


#### Opening port --> move to install.sh
# sudo ufw allow http
# sudo ufw allow https
# sudo ufw allow ssh


#### Indicate that monitor is Display=0 
#export DISPLAY=:0
# Open firefox full screen with a simple page displaying the current image and refreshing every 10 sec
#firefox --kiosk 127.0.0.1:5000/home_screen &
#edit : --> this has been move to crontab

# Active venv 
#cd Documents/envoyer...
#source ...

# Start python Flask API
# python3 api/main.py

# start React app
# npm start