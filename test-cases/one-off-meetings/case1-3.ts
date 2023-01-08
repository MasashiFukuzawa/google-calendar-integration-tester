import env from "../../utils/env.ts";
import waitFor from "../../utils/waitFor.ts";
import createGoogleMeetMeeting from "../modules/createGoogleMeetMeeting.ts";
import { CaseResult, Props } from "../schemata.ts";
import creationOneOffMeetingWorkflow from "./creationWorkflow.ts";

const testCreateGoogleMeetMeeting = async (
  props: Props,
): Promise<CaseResult> => {
  const { page, uniqueKey, today } = props;

  console.log("test case 1-3");

  const meetingTitle = `${uniqueKey}_test-case-1-3`;

  await creationOneOffMeetingWorkflow(
    page,
    meetingTitle,
    createGoogleMeetMeeting,
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

export default testCreateGoogleMeetMeeting;
