#/bin/bash

cd /home/jonatha/Jogos/J3Games
nohup python3 -m http.server --bind 0.0.0.0 8909 &

/opt/google/chrome/google-chrome http://localhost:8909
