![ci](https://github.com/lanceschi/todo/workflows/ci/badge.svg)

<!-- TOC -->

- [1. Development notes](#1-development-notes)
  - [1.1. Run in development mode](#11-run-in-development-mode)
  - [1.2. Build the webapp](#12-build-the-webapp)
  - [1.3. Launch the webapp test coverage](#13-launch-the-webapp-test-coverage)
- [2. Notes](#2-notes)

<!-- /TOC -->

# 1. Development notes

## 1.1. Run in development mode

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

## 1.2. Build the webapp

- cd to repo folder
- launch the build script

```bash
$ npm run build
```

- Output folder is **dist/**

## 1.3. Launch the webapp test coverage

- cd to repo folder
- launch the build script

```bash
$ npm run test:coverage
```

# 2. Notes

This repo embeds a automatised github action workflow in order to test every git commit, merge and release operations.

[1]: https://github.com/nvm-sh/nvm
