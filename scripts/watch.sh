#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
  --detect-globals false \
  --extension=.jsx \
  --external classnames \
  --external react \
  --outfile build/index.js \
  --standalone HireFormsTextarea \
  --transform [ babelify --plugins object-assign ] \
  --verbose