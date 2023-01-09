// import { updateEvents } from "./update-events.js";

const timeUpdateCaseIds = ["1-9", "1-10", "1-11", "1-12"];

const updateTimes = (event, uniqueKey, caseId) => {
  const startTime = new Date();
  const endTime = new Date();
  startTime.setHours(20, 0);
  endTime.setHours(20, 30);
  event.setTime(startTime, endTime);
  event.setTitle(`${uniqueKey}_test-case-${caseId}-time-updated`);
};

const executeToUpdateTimes = () => {
  updateEvents(timeUpdateCaseIds, updateTimes);
};
