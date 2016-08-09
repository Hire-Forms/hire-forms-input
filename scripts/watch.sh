#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
  --detect-globals false \
  --extension=.jsx \
  --external classnames \
  --external react \
  --external react-dom \
  --outfile 'derequire > build/index.js' \
  --standalone HireFormsInput \
  --transform babelify \
  --verbose
