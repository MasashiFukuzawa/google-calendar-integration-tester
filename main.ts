import { join, puppeteer } from "./mod.ts";
import execOneOffMeetingTestCases from "./test-cases/one-off-meetings/index.ts";
import env from "./utils/env.ts";
import generateUniqueKey from "./utils/generateUniqueKey.ts";
import loginToGoogleCalendar from "./utils/loginGoogleCalendar.ts";

const GOOGLE_CALENDAR_URL = env["GOOGLE_CALENDAR_URL"] as string;
const GOOGLE_CHROME_EXTENSION_BASE_PATH = env[
  "GOOGLE_CHROME_EXTENSION_BASE_PATH"
] as string;
const ZOOM_SCHEDULER_ID = "kgjfgplpablkjnlkjmjdecgdpfankdle";
const ZOOM_SCHEDULER_VERSION = env["ZOOM_SCHEDULER_VERSION"] as string;

const pathToExtension = join(
  GOOGLE_CHROME_EXTENSION_BASE_PATH,
  ZOOM_SCHEDULER_ID,
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

const page = await browser.newPage();
await page.setViewport({ width: 0, height: 0 });
await page.goto(GOOGLE_CALENDAR_URL);

await loginToGoogleCalendar(page);

const today = new Date().toLocaleDateString();

const uniqueKey = generateUniqueKey();
console.log(`Unique key is ${uniqueKey}.`);

await execOneOffMeetingTestCases(page, uniqueKey, today);
// await execRecurringMeetingTestCases(page, uniqueKey);

await browser.close();
