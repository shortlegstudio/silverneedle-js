#!/bin/bash
set -e

npm run-script db-migrate 
./build-client.sh