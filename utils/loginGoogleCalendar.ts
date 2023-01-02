import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import env from "./env.ts";

const GOOGLE_EMAIL_INPUT = 'input[type="email"]';
const GOOGLE_EMAIL_NEXT_BUTTON = "#identifierNext";
const GOOGLE_PASSWORD_INPUT = 'input[type="password"]';
const GOOGLE_PASSWORD_NEXT_BUTTON = "#passwordNext";
const GOOGLE_SMART_PHONE_IMAGE = "#view_container";

const loginToGoogleCalendar = async (page: Page): Promise<void> => {
  console.log("Start to login Google Calendar.");

  await page.waitForSelector(GOOGLE_EMAIL_INPUT);
  await page.type(GOOGLE_EMAIL_INPUT, env["EMAIL"]);

  await page.waitForSelector(GOOGLE_EMAIL_NEXT_BUTTON);
  await Promise.all([
    page.waitForNavigation(),
    page.click(GOOGLE_EMAIL_NEXT_BUTTON),
  ]);

  await page.waitForSelector(GOOGLE_PASSWORD_INPUT, { visible: true });
  await page.type(GOOGLE_PASSWORD_INPUT, env["PASSWORD"]);

  await page.waitForSelector(GOOGLE_PASSWORD_NEXT_BUTTON, { visible: true });
  await Promise.all([
    page.waitForNavigation(),
    page.click(GOOGLE_PASSWORD_NEXT_BUTTON),
  ]);

  console.log("Please complete two-factor authentication manually.");
  await page.waitForSelector(GOOGLE_SMART_PHONE_IMAGE);

  await page.waitForNavigation();

  console.log("Successful login to Google Calendar.");
};

export default loginToGoogleCalendar;
