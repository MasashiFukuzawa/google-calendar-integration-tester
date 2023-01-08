import env from "../../utils/env.ts";
import waitFor from "../../utils/waitFor.ts";
import createZoomMeetingUsingChromeExtension from "../modules/createZoomMeetingUsingChromeExtension.ts";
import { CaseResult, Props } from "../schemata.ts";
import creationOneOffMeetingWorkflow from "./creationWorkflow.ts";

const testCreateZoomMeetingUsingChromeExtension = async (
  props: Props,
): Promise<CaseResult> => {
  const { page, uniqueKey, today } = props;

  console.log("test case 1-2");

  const meetingTitle = `${uniqueKey}_test-case-1-2`;

  await creationOneOffMeetingWorkflow(
    page,
    meetingTitle,
    createZoomMeetingUsingChromeExtension,
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
