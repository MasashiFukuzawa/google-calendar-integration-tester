import { Page } from "../../mod.ts";

const SCHEDULE_BUTTON = "div.sx5BGe > div > div:nth-child(20)";
const MEETING_TITLE_INPUT =
  "div.rFrNMe.shdZ7e.Uj1FAb.zKHdkd > div > div > div > input";

const creationOneOffMeetingWorkflow = async (
  page: Page,
  meetingTitle: string,
  createMeetingFunc: (page: Page) => Promise<void>
): Promise<void> => {
  await page.waitForSelector(SCHEDULE_BUTTON);
  await Promise.all([page.waitForNavigation(), page.click(SCHEDULE_BUTTON)]);

  await page.waitForSelector(MEETING_TITLE_INPUT, { visible: true });
  await page.type(MEETING_TITLE_INPUT, meetingTitle);

  await createMeetingFunc(page);
};

export default creationOneOffMeetingWorkflow;
