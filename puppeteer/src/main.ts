import createMeetings from "./createMeetings.ts";
import { join, puppeteer } from "./deps.ts";
import { loginWithoutCookies, setCookies } from "./utils/cookies.ts";
import env from "./utils/env.ts";
import fileExists from "./utils/fileExists.ts";
import generateUniqueKey from "./utils/generateUniqueKey.ts";
import loginGoogleCalendar from "./utils/loginGoogleCalendar.ts";
import loginZoom from "./utils/loginZoom.ts";

const CHROME_EXTENSION_BASE_PATH = env["CHROME_EXTENSION_BASE_PATH"] as string;
const GOOGLE_LOGIN_URL = "https://accounts.google.com/v3/signin/identifier";
const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/r/day";
const ZOOM_LOGIN_URL = "https://zoom.us/signin?from=extension#/login";
const ZOOM_SCHEDULER_CHROME_EXTENSION_ID = "kgjfgplpablkjnlkjmjdecgdpfankdle";
const ZOOM_SCHEDULER_VERSION = env["ZOOM_SCHEDULER_VERSION"] as string;

const pathToExtension = join(
  CHROME_EXTENSION_BASE_PATH,
  ZOOM_SCHEDULER_CHROME_EXTENSION_ID,
  ZOOM_SCHEDULER_VERSION,
);

const browser = await puppeteer.launch({
  headless: false,
  args: [
    "--start-maximized",
    `--disable-extensions-except=${pathToExtension}`,
    `--load-extension=${pathToExtension}`,
  ],
});

const cwd = Deno.cwd();

// Zoom login
const tmpPage = await browser.newPage();
await tmpPage.setViewport({ width: 0, height: 0 });
await tmpPage.goto(ZOOM_LOGIN_URL);

if (await fileExists(`${cwd}/zoomCookies.txt`)) {
  try {
    await setCookies(tmpPage, "zoomCookies.txt");
  } catch (e) {
    console.log(e);
    await loginWithoutCookies(loginZoom, tmpPage, `${cwd}/zoomCookies.txt`);
  }
} else {
  await loginWithoutCookies(loginZoom, tmpPage, `${cwd}/zoomCookies.txt`);
}

await tmpPage.close();

// Google login and redirect to google calendar
const page = await browser.newPage();
await page.setViewport({ width: 0, height: 0 });
await page.goto(GOOGLE_LOGIN_URL);

if (await fileExists(`${cwd}/googleCookies.txt`)) {
  try {
    await setCookies(page, "googleCookies.txt");
    await page.goto(GOOGLE_CALENDAR_URL);
  } catch (e) {
    console.log(e);
    await loginWithoutCookies(
      loginGoogleCalendar,
      page,
      `${cwd}/googleCookies.txt`,
    );
  }
} else {
  await loginWithoutCookies(
    loginGoogleCalendar,
    page,
    `${cwd}/googleCookies.txt`,
  );
}

// Create meetings
const uniqueKey = generateUniqueKey();
console.log(`Unique key is ${uniqueKey}`);
await createMeetings(page, uniqueKey);

await browser.close();
