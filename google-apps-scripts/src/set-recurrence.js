// import { updateEvents } from "./update-events.js";

const recurrenceCaseIds = ["2-1", "2-2", "2-3", "2-4"];

// FIXME: 他のものと共通化したいが面倒だったのでゴリっと実装している
const setRecurrence = (event, uniqueKey, caseId) => {
  const eventSeries = event.getEventSeries();
  const recurrence = CalendarApp.newRecurrence().addDailyRule().times(2);
  eventSeries.setRecurrence(recurrence, new Date());

  // NOTE: `setRecurrence` では終日ミーティングになるので再度時間を更新し直す必要あり
  const spreadsheetId =
    PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID");

  if (!spreadsheetId) {
    throw new Error(
      "Please set a Google Apps Scripts property named `SPREAD_SHEET_ID`."
    );
  }

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheetByName("main");

  if (!sheet) {
    throw new Error("Not found target sheet.");
  }

  const email = sheet.getRange("A2").getValue();
  const calendar = CalendarApp.getCalendarById(email);
  const today = dayjs.dayjs().toDate();
  const tomorrow = dayjs.dayjs().add(1, "day").toDate();
  today.setHours(0, 0, 0);
  tomorrow.setHours(23, 59, 59);

  const recurringEvents = calendar.getEvents(today, tomorrow).filter((e) => {
    return e.getTitle().match(/test-case-2-/);
  });
  recurringEvents.forEach((e) => {
    // NOTE: 繰り返しミーティングの `startTime` はその日の 00:00:00 が返ってくる
    // そして `endTime` はその翌日の 00:00:00 が返ってくる
    const startTime = dayjs.dayjs(e.getStartTime()).format("YYYY/MM/DD 19:30");
    const endTime = dayjs
      .dayjs(e.getEndTime())
      .subtract(1, "s")
      .format("YYYY/MM/DD 20:00");
    e.setTime(new Date(startTime), new Date(endTime));
  });
};

const executeToSetRecurrence = () => {
  updateEvents(recurrenceCaseIds, setRecurrence);
};
