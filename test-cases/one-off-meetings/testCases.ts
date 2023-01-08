import createGoogleMeetMeeting from "../modules/createGoogleMeetMeeting.ts";
import createMicrosoftTeamsMeeting from "../modules/createMicrosoftTeamsMeeting.ts";
import createZoomMeetingUsingChromeExtension from "../modules/createZoomMeetingUsingChromeExtension.ts";
import createZoomMeetingUsingZoomAddon from "../modules/createZoomMeetingUsingZoomAddon.ts";

const testCases = [
  {
    name: "test-case-1-1",
    createMeetingFunc: createZoomMeetingUsingZoomAddon,
  },
  {
    name: "test-case-1-2",
    createMeetingFunc: createZoomMeetingUsingChromeExtension,
  },
  {
    name: "test-case-1-3",
    createMeetingFunc: createGoogleMeetMeeting,
  },
  {
    name: "test-case-1-4",
    createMeetingFunc: createMicrosoftTeamsMeeting,
  },
];

export default testCases;
