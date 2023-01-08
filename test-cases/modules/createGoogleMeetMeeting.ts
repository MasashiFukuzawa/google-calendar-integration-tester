import { Page } from "../../mod.ts";
import waitFor from "../../utils/waitFor.ts";
import clickGoogleCalendarAddonSaveButton from "../modules/clickGoogleCalendarAddonSaveButton.ts";

const GOOGLE_MEET_BUTTON = "#xAddRtcSel";

const createGoogleMeetMeeting = async (page: Page): Promise<void> => {
  await page.waitForSelector(GOOGLE_MEET_BUTTON);
  await page.click(GOOGLE_MEET_BUTTON);

  // NOTE: `waitForNavigation` doesn't work well,
  // so it waits for an arbitrary number of seconds.
  await waitFor(1000 * 3);

  await clickGoogleCalendarAddonSaveButton(page);
};

export default createGoogleMeetMeeting;
