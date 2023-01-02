import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import testCreateZoomMeetingUsingZoomAddon from "./case1-1.ts";

const execOneOffMeetingTestCases = async (
  page: Page,
  uniqueKey: string,
  today: string,
): Promise<void> => {
  console.log("Execute one-off meeting cases...");

  // case 1-1
  const case1_1 = await testCreateZoomMeetingUsingZoomAddon(
    page,
    uniqueKey,
    today,
  );

  // case 1-2
  // case 1-3
  // case 1-4
  // case 1-5
  // case 1-6
  // case 1-7
  // case 1-8
  // case 1-9
  // case 1-10
  // case 1-11
  // case 1-12
  // case 1-13
  // case 1-14
  // case 1-15
  // case 1-16
  // case 1-17
  // case 1-18
  // case 1-19
  // case 1-20
  // case 1-21
  // case 1-22
  // case 1-23
  // case 1-24
  // case 1-25
  // case 1-26
  // case 1-27
  // case 1-28
  // case 1-29
  // case 1-30
  // case 1-31
  // case 1-32
  // case 1-33
  // case 1-34
  // case 1-35
  // case 1-36
  // case 1-37
  // case 1-38

  console.log("Finish Execute one-off meeting cases!");

  console.log("Expected results", { case1_1 });
};

export default execOneOffMeetingTestCases;
