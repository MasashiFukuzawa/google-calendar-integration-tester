import { Page } from "../../mod.ts";

const SAVE_BUTTON = "div.BTotkb.JaKw1 > div:nth-child(4) > div";

const createZoomMeetingUsingChromeExtension = async (
  page: Page,
): Promise<void> => {
  await page.waitForSelector(SAVE_BUTTON);
  await page.click(SAVE_BUTTON);
  await Promise.all([page.waitForNavigation(), page.click(SAVE_BUTTON)]);
};

export default createZoomMeetingUsingChromeExtension;
