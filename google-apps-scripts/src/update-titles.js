// import { updateEvents } from "./update-events.js";

const titleUpdateCaseIds = ["1-5", "1-6", "1-7", "1-8"];

const updateTitles = (event, uniqueKey, caseId) => {
  event.setTitle(`${uniqueKey}_test-case-${caseId}-title-updated`);
};

const executeToUpdateTitles = () => {
  updateEvents(titleUpdateCaseIds, updateTitles);
};
