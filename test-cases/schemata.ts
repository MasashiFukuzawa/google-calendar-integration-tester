import { Page } from "../mod.ts";

export type CaseResult = {
  count: number;
  meetingTitle: string;
  startAt: string;
  endAt: string;
  participants: string[];
};

export type Props = {
  page: Page;
  uniqueKey: string;
  today: string;
};
