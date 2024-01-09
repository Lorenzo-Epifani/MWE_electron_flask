#!/bin/bash
cd ./backend-api
source env/bin/activate
port=3000
if [ ! -z $1 ]
then
    port=$1
fi
python -m flask --app main run -p $port
