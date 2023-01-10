import createMeetings from "./createMeetings.ts";
import { join, puppeteer } from "./mod.ts";
import env from "./utils/env.ts";
import generateUniqueKey from "./utils/generateUniqueKey.ts";
import loginGoogleCalendar from "./utils/loginGoogleCalendar.ts";
import loginZoom from "./utils/loginZoom.ts";

const CHROME_EXTENSION_BASE_PATH = env["CHROME_EXTENSION_BASE_PATH"] as string;
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

// Zoom login
const tmpPage = await browser.newPage();
await tmpPage.setViewport({ width: 0, height: 0 });
await tmpPage.goto(ZOOM_LOGIN_URL);
await loginZoom(tmpPage);
await tmpPage.close();

// Google login and redirect to google calendar
const page = await browser.newPage();
await page.setViewport({ width: 0, height: 0 });
await page.goto(GOOGLE_CALENDAR_URL);
await loginGoogleCalendar(page);

// Create meetings
const uniqueKey = generateUniqueKey();
console.log(`Unique key is ${uniqueKey}`);
await createMeetings(page, uniqueKey);

await browser.close();
