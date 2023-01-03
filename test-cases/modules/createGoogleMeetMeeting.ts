import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import waitFor from "../../utils/waitFor.ts";
import clickGoogleCalendarAddonSaveButton from "../modules/clickGoogleCalendarAddonSaveButton.ts";

const GOOGLE_MEET_BUTTON = "#xAddRtcSel";

const createGoogleMeetMeeting = async (page: Page): Promise<void> => {
  await page.waitForSelector(GOOGLE_MEET_BUTTON);
  await page.click(GOOGLE_MEET_BUTTON);

  // NOTE: waitForNavigation だと上手く待機できないので直接秒数指定で待機させている
  await waitFor(1000);

  await clickGoogleCalendarAddonSaveButton(page);
};

export default createGoogleMeetMeeting;
