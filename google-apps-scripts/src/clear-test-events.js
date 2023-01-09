const clearTestEvents = () => {
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
  const today = dayjs.dayjs().toDate();
  const tomorrow = dayjs.dayjs().add(1, "day").toDate();
  today.setHours(0, 0, 0);
  tomorrow.setHours(23, 59, 59);

  const calendar = CalendarApp.getCalendarById(email);
  const events = calendar.getEvents(today, tomorrow);
  const testEvents = events.filter((e) => e.getTitle().match(/test-case/));

  testEvents.forEach((e) => e.deleteEvent());
};
