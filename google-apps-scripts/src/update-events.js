const getDataFromSpreadsheet = () => {
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

  const data = sheet
    .getRange("A2:B2")
    .getValues()
    .filter((e) => !!e[0]);
  return [data[0][0], data[0][1]]; // email, uniqueKey
};

const compare = (a, b) => {
  if (a.getTitle() > b.getTitle()) {
    return -1;
  } else if (a.getTitle() < b.getTitle()) {
    return 1;
  } else {
    return 0;
  }
};

const updateEvents = (caseIds, updateFunc) => {
  const data = getDataFromSpreadsheet();
  const email = data[0];
  const uniqueKey = data[1];
  const calendar = CalendarApp.getCalendarById(email);

  const sortedTestEvents = calendar
    .getEventsForDay(new Date())
    .filter((e) => e.getTitle().match(/test-case/))
    .sort((a, b) => compare(a, b));

  sortedTestEvents.forEach((e) => {
    const title = e.getTitle();
    // NOTE: 変更前のイベントは {unique_key}_test-case-1-xx という
    // フォーマットで統一しており、unique_key は12文字なので
    // 先頭をカットして `1-xx` の部分だけを取り出す
    const targetCaseId = title.substring(23);

    const target = caseIds.find((id) => id === targetCaseId);
    if (!target) return;

    updateFunc(e, uniqueKey, targetCaseId);
  });
};
