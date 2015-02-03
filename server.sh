#!/bin/sh
echo "Starting up Zygo server."
echo "Ensure you have installed zygo and nodemon:"
echo "    [sudo] npm install -g zygo-cli"
echo "    [sudo] npm install -g nodemon"
echo ""
nodemon -e js,jsx,json --exec zygo --serve
