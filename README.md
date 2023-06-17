# google-calendar-integration-tester

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE.md)

This repository provides scripts to automatically create Zoom, Google Meet, and Microsoft Teams meetings using Google Calendar.
You can use it to test those webhook events, etc.

## Setup for Deno (creation script)

### Prerequisite

Please refer to the following to install deno.

see. https://yoshixmk.github.io/deno-manual-ja/getting_started/installation.html

#### For MacOS

```sh
$ brew install deno
$ deno upgrade --version 1.29.2
$ deno --version
deno 1.29.2 (release, x86_64-apple-darwin)
v8 10.9.194.5
typescript 4.9.4
```

### Initial setup

```sh
$ git clone git@github.com:MasashiFukuzawa/google-calendar-integration-tester.git
$ cd puppeteer

# see: https://deno.land/x/puppeteer@16.2.0
$ PUPPETEER_PRODUCT=chrome deno run -A --unstable https://deno.land/x/puppeteer@16.2.0/install.ts

$ deno vendor src/deps.ts
$ cp .env.example .env # And please modify .env file
```

### Use deno script

- NOTE:
  - Manual operation is required for Zoom and Google authentication.
  - For test cases, please modify `setting.ts` according to your own
    requirements.

```sh
$ cd puppeteer
$ deno task start
```

### Upgrade Deno

```
$ deno upgrade
```

### Upgrade Dependencies

```
$ cd puppeteer
$ rm -rf ./vendor
$ deno vendor src/deps.ts
```

## Setup for Google Apps Scripts (update script)

### Prerequisite

Please install `clasp` and enable the Google Apps Script API.
see. https://github.com/google/clasp#install

### Initial setup

```sh
# if needed
$ git clone git@github.com:MasashiFukuzawa/google-calendar-integration-tester.git

$ cd google-apps-scripts
$ yarn

# when create new gas project
$ clasp login
$ clasp create --title "operate-calendar-events" --type sheets --rootDir ./src
$ clasp push --force
# You also need to set Google Apps Script properties (`SPREAD_SHEET_ID` and `PARTICIPANT_EMAIL`).

# when clone existing gas project
$ clasp login
$ cd src
$ clasp clone $scriptId # You can get from existing gas project.
```
