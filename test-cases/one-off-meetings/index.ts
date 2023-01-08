import { Props } from "../schemata.ts";
import testCreateZoomMeetingUsingZoomAddon from "./case1-1.ts";
import testCreateZoomMeetingUsingChromeExtension from "./case1-2.ts";
import testCreateGoogleMeetMeeting from "./case1-3.ts";
import testCreateMicrosoftTeamsMeeting from "./case1-4.ts";

const execOneOffMeetingTestCases = async (props: Props): Promise<void> => {
  console.log("Execute one-off meeting cases...");

  const case1_1 = await testCreateZoomMeetingUsingZoomAddon(props);
  const case1_2 = await testCreateZoomMeetingUsingChromeExtension(props);
  const case1_3 = await testCreateGoogleMeetMeeting(props);
  const case1_4 = await testCreateMicrosoftTeamsMeeting(props);

  console.log("Finish Execute one-off meeting cases!");

  console.log("Expected results", { case1_1, case1_2, case1_3, case1_4 });
};

export default execOneOffMeetingTestCases;
