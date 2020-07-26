![ci](https://github.com/lanceschi/todo/workflows/ci/badge.svg)

<!-- TOC -->

- [1. Demo](#1-demo)
- [2. Development notes](#2-development-notes)
  - [2.1. Run in development mode](#21-run-in-development-mode)
  - [2.2. Build the webapp](#22-build-the-webapp)
  - [2.3. Launch the webapp test coverage](#23-launch-the-webapp-test-coverage)
- [3. Notes](#3-notes)

<!-- /TOC -->

# 1. Demo

A live demo can be tested at https://lanceschi.github.io/todo

# 2. Development notes

## 2.1. Run in development mode

- cd to repo folder
- install node v12.18 or use [NVM][1]

```bash
$ nvm install 12.18
$ nvm use
```

- start webserver in development mode:

```bash
$ npm start
```

Open the browser at [localhost:3000](http://localhost:3000)

## 2.2. Build the webapp

- cd to repo folder
- launch the build script

```bash
$ npm run build
```

- Output folder is **dist/**

## 2.3. Launch the webapp test coverage

- cd to repo folder
- launch the build script

```bash
$ npm run test:coverage
```

# 3. Notes

This repo embeds a automatised github action workflow in order to test every git commit, merge and release operations.

[1]: https://github.com/nvm-sh/nvm
