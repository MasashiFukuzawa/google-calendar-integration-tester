# google-calendar-integration-tester

## Setup for Deno (creation script)

### Prerequisite

Please refer to the following to install deno.

see. https://yoshixmk.github.io/deno-manual-ja/getting_started/installation.html

#### For MacOS

```sh
$ brew install deno

$ deno --version
deno 1.29.2 (release, x86_64-apple-darwin)
v8 10.9.194.5
typescript 4.9.4
```

### Initial setup

```sh
$ git clone git@github.com:MasashiFukuzawa/google-calendar-integration-tester.git
$ cd create
$ deno vendor mod.ts
$ cp .env.example .env # And please modify .env file
```

### Use deno script

- NOTE:
  - Manual operation is required for Zoom and Google authentication.
  - For test cases, please modify `setting.ts` according to your own
    requirements.

```sh
$ deno task start
```

### Upgrade Deno

```
$ deno upgrade
```

### Upgrade Dependencies

```
$ rm -rf ./vendor
$ deno vendor mod.ts
```

## Setup for Google Apps Scripts (update script)

### Prerequisite

Please install `clasp` and enable the Google Apps Script API.
see. https://github.com/google/clasp#install

### Initial setup

```sh
# if needed
$ git clone git@github.com:MasashiFukuzawa/google-calendar-integration-tester.git

$ cd update
$ yarn

$ clasp login
$ clasp create --title "operate-calendar-events" --type sheets --rootDir ./src

# Here, maybe you need to move the .clasp.json.

$ clasp push --force

# You also need to set Google Apps Script properties (`SPREAD_SHEET_ID` and `PARTICIPANT_EMAIL`).
```
