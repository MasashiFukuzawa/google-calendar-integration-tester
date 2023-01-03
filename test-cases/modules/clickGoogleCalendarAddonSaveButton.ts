import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const SAVE_BUTTON = "div:nth-child(4) > button";

const clickGoogleCalendarAddonSaveButton = async (
  page: Page
): Promise<void> => {
  await page.waitForSelector(SAVE_BUTTON);
  await Promise.all([
    page.waitForNavigation({ waitUntil: ["load", "networkidle2"] }),
    page.click(SAVE_BUTTON),
  ]);
};

export default clickGoogleCalendarAddonSaveButton;
