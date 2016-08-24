#!/bin/sh

npm run build
npm run eslint
npm run test
npm run test-cov
npm run metrics
npm run start

