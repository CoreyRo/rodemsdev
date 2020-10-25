#!/bin/sh
cd $TRAVIS_BUILD_DIR/source/rodemsdev.ui
sbt ++$TRAVIS_SCALA_VERSION package
yarn test
yarn deploy