import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import env from "../../utils/env.ts";
import waitFor from "../../utils/waitFor.ts";
import createZoomMeetingUsingChromeExtension from "../modules/createZoomMeetingUsingChromeExtension.ts";
import { CaseResult } from "../schemata.ts";
import creationOneOffMeetingWorkflow from "./creationWorkflow.ts";

const testCreateZoomMeetingUsingChromeExtension = async (
  page: Page,
  uniqueKey: string,
  today: string
): Promise<CaseResult> => {
  console.log("test case 1-2");

  const meetingTitle = `${uniqueKey}_test-case-1-2`;

  await creationOneOffMeetingWorkflow(
    page,
    meetingTitle,
    createZoomMeetingUsingChromeExtension
  );

  await waitFor(1000);

  return {
    count: 1,
    meetingTitle,
    startAt: `${today} 19:30`,
    endAt: `${today} 20:00`,
    participants: [env["EMAIL"]],
  };
};

export default testCreateZoomMeetingUsingChromeExtension;
