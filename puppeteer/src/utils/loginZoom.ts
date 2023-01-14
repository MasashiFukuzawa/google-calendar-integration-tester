import { Page } from "../deps.ts";
import env from "./env.ts";
import waitFor from "./waitFor.ts";

const ZOOM_SSO_BUTTON =
  "div.layout-main > div > div:nth-child(3) > div > div > a:nth-child(1)";
const ZOOM_SSO_INPUT = "#domain";
const ZOOM_SSO_LOGIN_BUTTON =
  "button.btn-block.mgt-md.zm-button--primary.zm-button--large.zm-button";

const MICROSOFT_EMAIL_INPUT = "#i0116";
const MICROSOFT_EMAIL_NEXT_BUTTON = "#idSIButton9";
const MICROSOFT_PASSWORD_INPUT = "#i0118";
const MICROSOFT_SIGN_IN_BUTTON = "#idSIButton9";
const MICROSOFT_SMS_SEND_BUTTON = "#idDiv_SAOTCS_Proofs > div > div";
const MICROSOFT_SIGN_IN_SETTING_BUTTON = "#idSIButton9";

const loginZoom = async (page: Page): Promise<void> => {
  console.log("Start to login Zoom.");

  await page.waitForSelector(ZOOM_SSO_BUTTON);
  await Promise.all([page.waitForNavigation(), page.click(ZOOM_SSO_BUTTON)]);

  await page.waitForSelector(ZOOM_SSO_INPUT);
  await page.type(ZOOM_SSO_INPUT, env["ZOOM_SSO_DOMAIN"]);

  await page.waitForSelector(ZOOM_SSO_LOGIN_BUTTON);
  await Promise.all([
    page.waitForNavigation(),
    page.click(ZOOM_SSO_LOGIN_BUTTON),
  ]);

  await page.waitForSelector(MICROSOFT_EMAIL_INPUT, { visible: true });
  await page.type(MICROSOFT_EMAIL_INPUT, env["MICROSOFT_EMAIL"]);

  await page.waitForSelector(MICROSOFT_EMAIL_NEXT_BUTTON);
  await page.click(MICROSOFT_EMAIL_NEXT_BUTTON);

  // NOTE: waitForNavigation だと上手く待機できないので直接秒数指定で待機させている
  await waitFor(1000);

  await page.waitForSelector(MICROSOFT_PASSWORD_INPUT, { visible: true });
  await page.type(MICROSOFT_PASSWORD_INPUT, env["MICROSOFT_PASSWORD"]);

  await page.waitForSelector(MICROSOFT_SIGN_IN_BUTTON);
  await Promise.all([
    page.waitForNavigation(),
    page.click(MICROSOFT_SIGN_IN_BUTTON),
  ]);

  console.log("Please complete sms authentication manually.");

  await page.waitForSelector(MICROSOFT_SMS_SEND_BUTTON);
  await Promise.all([
    page.waitForNavigation(),
    page.click(MICROSOFT_SMS_SEND_BUTTON),
  ]);

  await page.waitForNavigation({ timeout: 1000 * 60 * 3 }); // within 3min

  await page.waitForSelector(MICROSOFT_SIGN_IN_SETTING_BUTTON);
  await Promise.all([
    page.waitForNavigation(),
    page.click(MICROSOFT_SIGN_IN_SETTING_BUTTON),
  ]);

  console.log("Successful login to ZOOM.");
};

export default loginZoom;
