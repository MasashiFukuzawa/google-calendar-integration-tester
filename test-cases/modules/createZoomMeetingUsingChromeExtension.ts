import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const SAVE_BUTTON = "div.BTotkb.JaKw1 > div:nth-child(4) > div";

const createZoomMeetingUsingChromeExtension = async (
  page: Page,
): Promise<void> => {
  await page.waitForSelector(SAVE_BUTTON);
  await Promise.all([page.waitForNavigation(), page.click(SAVE_BUTTON)]);

  // TODO: ZoomのOAuth認証
};

export default createZoomMeetingUsingChromeExtension;
