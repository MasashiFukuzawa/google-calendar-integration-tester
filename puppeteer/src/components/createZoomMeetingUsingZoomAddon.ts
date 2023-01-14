import clickGoogleCalendarAddonSaveButton from "../components/clickGoogleCalendarAddonSaveButton.ts";
import openAccordion from "../components/openAccordion.ts";
import { Page } from "../deps.ts";
import waitFor from "../utils/waitFor.ts";

const ZOOM_BUTTON =
  "div.JPdR6b.e5Emjc.mQc0pc.qjTEB > div > div > span:nth-child(5)";

const createZoomMeetingUsingZoomAddon = async (page: Page): Promise<void> => {
  await openAccordion(page);

  await page.waitForSelector(ZOOM_BUTTON);
  await page.click(ZOOM_BUTTON);

  // NOTE: `waitForNavigation` doesn't work well,
  // so it waits for an arbitrary number of seconds.
  await waitFor(1000 * 5);

  await clickGoogleCalendarAddonSaveButton(page);
};

export default createZoomMeetingUsingZoomAddon;
