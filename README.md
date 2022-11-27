# google-calendar-integration-tester

## Setup

### Prerequisite

Please refer to the following to install deno.

see. https://yoshixmk.github.io/deno-manual-ja/getting_started/installation.html

```sh
brew install deno
```

### Initial setup

```sh
git clone git@github.com:MasashiFukuzawa/google-calendar-integration-tester.git
deno info
cp .env.example .env # And please modify .env file

# Install and cache puppeteer
PUPPETEER_PRODUCT=chrome deno run -A --unstable https://deno.land/x/puppeteer@16.2.0/install.ts

# Cache dotenv
deno info https://deno.land/x/dotenv@v3.2.0/mod.ts
```

Enjoy!

### Use deno script

NOTE: Manual operation is required for Google's two-factor authentication.

```sh
deno run -A --unstable main.ts
```
