import { Page } from "../../mod.ts";
import waitFor from "../../utils/waitFor.ts";

const SAVE_BUTTON = "div.BTotkb.JaKw1 > div:nth-child(4) > div";

const createZoomMeetingUsingChromeExtension = async (
  page: Page,
): Promise<void> => {
  await page.waitForSelector(SAVE_BUTTON);
  await page.click(SAVE_BUTTON);
  await waitFor(1000 * 3);
};

export default createZoomMeetingUsingChromeExtension;
