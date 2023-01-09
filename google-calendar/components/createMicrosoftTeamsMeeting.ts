import { Page } from "../../mod.ts";
import waitFor from "../../utils/waitFor.ts";
import clickGoogleCalendarAddonSaveButton from "../components/clickGoogleCalendarAddonSaveButton.ts";
import openAccordion from "../components/openAccordion.ts";

const MICROSOFT_BUTTON =
  "div.JPdR6b.e5Emjc.mQc0pc.qjTEB > div > div > span:nth-child(4)";

const createMicrosoftTeamsMeeting = async (page: Page): Promise<void> => {
  await openAccordion(page);

  await page.waitForSelector(MICROSOFT_BUTTON);
  await page.click(MICROSOFT_BUTTON);

  // NOTE: `waitForNavigation` doesn't work well,
  // so it waits for an arbitrary number of seconds.
  // Teams meeting takes time to create, so set it longer than others.
  await waitFor(1000 * 15);

  await clickGoogleCalendarAddonSaveButton(page);
};

export default createMicrosoftTeamsMeeting;
