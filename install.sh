
# Enable to run program at startup with systemd as a user (here user is `ci`)
sudo loginctl enable-linger ci
mkdir -p ~/.config/systemd/user

# Move scripts to accurate place
cp scripts/startup_script_CI_screen_app.service ~/.config/systemd/user/startup_script_CI_screen_app.service
cp scripts/startup_script_CI_screen_pythonAPI.service ~/.config/systemd/user/startup_script_CI_screen_pythonAPI.service
cp scripts/startup_script_CI_screen_frontend.service ~/.config/systemd/user/startup_script_CI_screen_frontend.service
# or if you want to run it as root (sudo systemctl instead of systemctl --user):
# sudo cp scripts/startup_script_CI_screen_app.service /etc/systemd/system/startup_script_CI_screen_app.service
# sudo cp scripts/startup_script_CI_screen_pythonAPI.service /etc/systemd/system/startup_script_CI_screen_pythonAPI.service
# sudo cp scripts/start.sh /usr/local/bin/startup_script_CI_screen_app.sh

# Enable to run the script at boot
systemctl --user daemon-reload
systemctl --user enable startup_script_CI_screen_app.service
systemctl --user start startup_script_CI_screen_app.service
systemctl --user enable startup_script_CI_screen_pythonAPI.service
systemctl --user start startup_script_CI_screen_pythonAPI.service
systemctl --user enable startup_script_CI_screen_frontend.service
systemctl --user start startup_script_CI_screen_frontend.service
# or if you want to run it as root (sudo systemctl instead of systemctl --user):
# sudo systemctl daemon-reload
# sudo systemctl enable startup_script_CI_screen_app.service
# sudo systemctl start startup_script_CI_screen_app.service
# sudo systemctl enable startup_script_CI_screen_pythonAPI.service
# sudo systemctl start startup_script_CI_screen_pythonAPI.service
# sudo systemctl enable startup_script_CI_screen_frontend.service
# sudo systemctl start startup_script_CI_screen_frontend.service

#### Opening port
sudo ufw allow http
sudo ufw allow https
sudo ufw allow ssh

# Create required folders

# Install Flask api :
    #create virtual venv python
    #install depencies

# Install React app :
    #npm install 

# see readme for more

# add line in crontab : echo "@reboot sleep 10 && DISPLAY=:0 firefox --kiosk 127.0.0.1:5000/home_screen" >> crontab

