import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import env from "../../utils/env.ts";
import createMicrosoftTeamsMeeting from "../modules/createMicrosoftTeamsMeeting.ts";
import { CaseResult } from "../schemata.ts";
import creationWorkflow from "./creation-workflow.ts";

const testCreateMicrosoftTeamsMeeting = async (
  page: Page,
  uniqueKey: string,
  today: string
): Promise<CaseResult> => {
  console.log("test case 1-4");

  const meetingTitle = `${uniqueKey}_test-case-1-4`;

  await creationWorkflow(page, meetingTitle, createMicrosoftTeamsMeeting);

  return {
    count: 1,
    meetingTitle,
    startAt: `${today} 19:30`,
    endAt: `${today} 20:00`,
    participants: [env["EMAIL"]],
  };
};

export default testCreateMicrosoftTeamsMeeting;
