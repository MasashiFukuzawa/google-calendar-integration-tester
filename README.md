# google-calendar-integration-tester

## Setup

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
$ deno vendor mod.ts
$ cp .env.example .env # And please modify .env file
```

Enjoy!

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
