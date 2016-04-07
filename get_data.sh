#!/bin/bash

rm /var/data/tides.json

wget -O /var/data/tides.json 'https://www.worldtides.info/api?extremes&lat=34.3538323&lon=-77.6428886&key=6f535570-09f1-4aac-88bd-48d5dbb3e124'

echo "var tides = "|cat - /var/data/tides.json > /tmp/out && mv /tmp/out /home/will/projects/tides-app/src/tides.js

wget -O /var/data/weather.json 'https://api.forecast.io/forecast/4b087fe12683c3b471c85c74499920d5/34.3538323,-77.6428886'

echo "var weather = "|cat - /var/data/weather.json > /tmp/out && mv /tmp/out /home/will/projects/tides-app/src/weather.js
