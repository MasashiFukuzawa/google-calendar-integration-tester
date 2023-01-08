import { Page } from "../mod.ts";

export type TestCases = {
  name: string;
  createMeetingFunc: (page: Page) => Promise<void>;
}[];

export type CaseResult = {
  count: number;
  meetingTitle: string;
  startAt: string;
  endAt: string;
  participants: string[];
};
