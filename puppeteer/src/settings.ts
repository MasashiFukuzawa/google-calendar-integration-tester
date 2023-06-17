import createGoogleMeetMeeting from "./components/createGoogleMeetMeeting.ts";
import createMicrosoftTeamsMeeting from "./components/createMicrosoftTeamsMeeting.ts";
import createZoomMeetingUsingChromeExtension from "./components/createZoomMeetingUsingChromeExtension.ts";

// These are samples.
// Please modify the following according to your requirements.

export const testCases = [
  // 1st set
  // for normal creation
  // {
  //   name: "test-case-1-1",
  //   createMeetingFunc: createZoomMeetingUsingZoomAddon,
  // },
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
  // 2nd set
  // for tests to update titles
  // {
  //   name: "test-case-1-5",
  //   createMeetingFunc: createZoomMeetingUsingZoomAddon,
  // },
  // {
  //   name: "test-case-1-6",
  //   createMeetingFunc: createZoomMeetingUsingChromeExtension,
  // },
  // {
  //   name: "test-case-1-7",
  //   createMeetingFunc: createGoogleMeetMeeting,
  // },
  // {
  //   name: "test-case-1-8",
  //   createMeetingFunc: createMicrosoftTeamsMeeting,
  // },
  // 3rd set
  // for tests to update times
  // {
  //   name: "test-case-1-9",
  //   createMeetingFunc: createZoomMeetingUsingZoomAddon,
  // },
  // {
  //   name: "test-case-1-10",
  //   createMeetingFunc: createZoomMeetingUsingChromeExtension,
  // },
  // {
  //   name: "test-case-1-11",
  //   createMeetingFunc: createGoogleMeetMeeting,
  // },
  // {
  //   name: "test-case-1-12",
  //   createMeetingFunc: createMicrosoftTeamsMeeting,
  // },
  // 4rd set
  // for tests to update participants
  // {
  //   name: "test-case-1-13",
  //   createMeetingFunc: createZoomMeetingUsingZoomAddon,
  // },
  // {
  //   name: "test-case-1-14",
  //   createMeetingFunc: createZoomMeetingUsingChromeExtension,
  // },
  // {
  //   name: "test-case-1-15",
  //   createMeetingFunc: createGoogleMeetMeeting,
  // },
  // {
  //   name: "test-case-1-16",
  //   createMeetingFunc: createMicrosoftTeamsMeeting,
  // },
  // 5th set
  // for recurring meeting tests
  // {
  //   name: "test-case-2-1",
  //   createMeetingFunc: createZoomMeetingUsingZoomAddon,
  // },
  // {
  //   name: "test-case-2-2",
  //   createMeetingFunc: createZoomMeetingUsingChromeExtension,
  // },
  // {
  //   name: "test-case-2-3",
  //   createMeetingFunc: createGoogleMeetMeeting,
  // },
  // {
  //   name: "test-case-2-4",
  //   createMeetingFunc: createMicrosoftTeamsMeeting,
  // },
];
