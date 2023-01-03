import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import env from "../../utils/env.ts";
import waitFor from "../../utils/waitFor.ts";
import createZoomMeetingUsingZoomAddon from "../modules/createZoomMeetingUsingZoomAddon.ts";
import { CaseResult } from "../schemata.ts";
import creationWorkflow from "./creation-workflow.ts";

const testCreateZoomMeetingUsingZoomAddon = async (
  page: Page,
  uniqueKey: string,
  today: string
): Promise<CaseResult> => {
  console.log("test case 1-1");

  const meetingTitle = `${uniqueKey}_test-case-1-1`;

  await creationWorkflow(page, meetingTitle, createZoomMeetingUsingZoomAddon);

  await waitFor(1000);

  return {
    count: 1,
    meetingTitle,
    startAt: `${today} 19:30`,
    endAt: `${today} 20:00`,
    participants: [env["EMAIL"]],
  };
};

export default testCreateZoomMeetingUsingZoomAddon;
