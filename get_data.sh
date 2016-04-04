#!/bin/bash

rm /var/data/tides.json

wget -O /var/data/tides.json 'https://www.worldtides.info/api?extremes&lat=35.595438&lon=-77.585250&key=6f535570-09f1-4aac-88bd-48d5dbb3e124'

echo "var tides = "|cat - /var/data/tides.json > /tmp/out && mv /tmp/out /home/pi/projects/beach-app/dist/tides.js
