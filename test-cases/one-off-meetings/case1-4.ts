import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import env from "../../utils/env.ts";
import waitFor from "../../utils/waitFor.ts";
import createMicrosoftTeamsMeeting from "../modules/createMicrosoftTeamsMeeting.ts";
import { CaseResult } from "../schemata.ts";
import creationOneOffMeetingWorkflow from "./creationWorkflow.ts";

const testCreateMicrosoftTeamsMeeting = async (
  page: Page,
  uniqueKey: string,
  today: string,
): Promise<CaseResult> => {
  console.log("test case 1-4");

  const meetingTitle = `${uniqueKey}_test-case-1-4`;

  await creationOneOffMeetingWorkflow(
    page,
    meetingTitle,
    createMicrosoftTeamsMeeting,
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

export default testCreateMicrosoftTeamsMeeting;
