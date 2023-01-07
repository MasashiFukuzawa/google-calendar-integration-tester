import { Page } from "../../mod.ts";
import waitFor from "../../utils/waitFor.ts";

import clickGoogleCalendarAddonSaveButton from "../modules/clickGoogleCalendarAddonSaveButton.ts";
import openAccordion from "../modules/openAccordion.ts";

const MICROSOFT_BUTTON =
  "div.JPdR6b.e5Emjc.mQc0pc.qjTEB > div > div > span:nth-child(4)";

const createMicrosoftTeamsMeeting = async (page: Page): Promise<void> => {
  await openAccordion(page);

  await page.waitForSelector(MICROSOFT_BUTTON);
  await page.click(MICROSOFT_BUTTON);

  // NOTE: waitForNavigation だと上手く待機できないので直接秒数指定で待機させている
  await waitFor(10000);

  await clickGoogleCalendarAddonSaveButton(page);
};

export default createMicrosoftTeamsMeeting;
