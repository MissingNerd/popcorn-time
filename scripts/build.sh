#!/bin/bash

set -e

rm -rf dist

npx parcel build index.html
