import { Page } from "./mod.ts";
import { testCases } from "./settings.ts";
import waitFor from "./utils/waitFor.ts";

const SCHEDULE_BUTTON = "div.sx5BGe > div > div:nth-child(20)";
const MEETING_TITLE_INPUT =
  "div.rFrNMe.shdZ7e.Uj1FAb.zKHdkd > div > div > div > input";

const createMeetings = async (
  page: Page,
  uniqueKey: string,
  today: string
): Promise<void> => {
  console.log("Create meetings...");

  // NOTE: Parallel processing using `Promise.all` is not available
  // because meetings must be created sequentially.
  for await (const testCase of testCases) {
    console.log(testCase["name"]);

    const meetingTitle = `${uniqueKey}_${testCase["name"]}`;

    await page.waitForSelector(SCHEDULE_BUTTON);
    await Promise.all([page.waitForNavigation(), page.click(SCHEDULE_BUTTON)]);

    await page.waitForSelector(MEETING_TITLE_INPUT, { visible: true });
    await page.type(MEETING_TITLE_INPUT, meetingTitle);

    await testCase["createMeetingFunc"](page);

    await waitFor(1000);
  }

  console.log("Finish creating meetings!");
};

export default createMeetings;
