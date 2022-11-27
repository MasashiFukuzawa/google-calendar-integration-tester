import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import env from "./utils/env.ts";
import loginToGoogleCalendar from "./utils/loginGoogleCalendar.ts";

const GOOGLE_CALENDAR_URL = env["GOOGLE_CALENDAR_URL"] as string;

// TODO: use chrome extension
// ref. https://pptr.dev/guides/chrome-extensions/
const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.goto(GOOGLE_CALENDAR_URL);

await loginToGoogleCalendar(page);

// TODO: add test cases

await browser.close();
