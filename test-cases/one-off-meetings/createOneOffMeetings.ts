import { Page } from "../../mod.ts";
import env from "../../utils/env.ts";
import waitFor from "../../utils/waitFor.ts";
import testCases from "./testCases.ts";

const SCHEDULE_BUTTON = "div.sx5BGe > div > div:nth-child(20)";
const MEETING_TITLE_INPUT =
  "div.rFrNMe.shdZ7e.Uj1FAb.zKHdkd > div > div > div > input";

const createOneOffMeetings = async (
  page: Page,
  uniqueKey: string,
  today: string,
): Promise<void> => {
  console.log("Create one-off meetings...");

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

    const expectedResult = {
      count: 1,
      meetingTitle,
      startAt: `${today} 19:30`,
      endAt: `${today} 20:00`,
      participants: [env["GOOGLE_EMAIL"]],
    };

    console.log(expectedResult);
  }

  console.log("Finish creating one-off meetings!");
};

export default createOneOffMeetings;
