import env from "../../utils/env.ts";
import waitFor from "../../utils/waitFor.ts";
import createZoomMeetingUsingZoomAddon from "../modules/createZoomMeetingUsingZoomAddon.ts";
import { CaseResult, Props } from "../schemata.ts";
import creationOneOffMeetingWorkflow from "./creationWorkflow.ts";

const testCreateZoomMeetingUsingZoomAddon = async (
  props: Props,
): Promise<CaseResult> => {
  const { page, uniqueKey, today } = props;

  console.log("test case 1-1");

  const meetingTitle = `${uniqueKey}_test-case-1-1`;

  await creationOneOffMeetingWorkflow(
    page,
    meetingTitle,
    createZoomMeetingUsingZoomAddon,
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

export default testCreateZoomMeetingUsingZoomAddon;
