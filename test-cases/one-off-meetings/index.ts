import { Page } from "../../mod.ts";

import testCreateZoomMeetingUsingZoomAddon from "./case1-1.ts";
// import testCreateZoomMeetingUsingChromeExtension from "./case1-2.ts";
import testCreateGoogleMeetMeeting from "./case1-3.ts";
import testCreateMicrosoftTeamsMeeting from "./case1-4.ts";

const execOneOffMeetingTestCases = async (
  page: Page,
  uniqueKey: string,
  today: string,
): Promise<void> => {
  console.log("Execute one-off meeting cases...");

  const case1_1 = await testCreateZoomMeetingUsingZoomAddon(
    page,
    uniqueKey,
    today,
  );
  // TODO: ZoomのOAuth認証
  // const case1_2 = await testCreateZoomMeetingUsingChromeExtension(
  //   page,
  //   uniqueKey,
  //   today
  // );
  const case1_3 = await testCreateGoogleMeetMeeting(page, uniqueKey, today);
  const case1_4 = await testCreateMicrosoftTeamsMeeting(page, uniqueKey, today);

  console.log("Finish Execute one-off meeting cases!");

  console.log("Expected results", { case1_1, case1_3, case1_4 });
};

export default execOneOffMeetingTestCases;
