#!/bin/bash

set -e

cd client
npm install --only=dev
npm install
npm run semantic
npm run build


