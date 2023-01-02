import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import env from "../../utils/env.ts";
import createZoomMeetingUsingZoomAddon from "../modules/createZoomMeetingUsingZoomAddon.ts";
import creationWorkflow from "./creation-workflow.ts";

type Case1_1 = {
  count: number;
  meetingTitle: string;
  startAt: string;
  endAt: string;
  participants: string[];
};

const testCreateZoomMeetingUsingZoomAddon = async (
  page: Page,
  uniqueKey: string,
  today: string
): Promise<Case1_1> => {
  console.log("Execute test case 1-1...");

  const meetingTitle = `${uniqueKey}_test-case-1-1`;

  await creationWorkflow(page, meetingTitle, createZoomMeetingUsingZoomAddon);

  console.log("Finish test case 1-1!");

  return {
    count: 1,
    meetingTitle,
    startAt: `${today} 19:30`,
    endAt: `${today} 20:00`,
    participants: [env["EMAIL"]],
  };
};

export default testCreateZoomMeetingUsingZoomAddon;
