// import { updateEvents } from "./update-events.js";

const participantUpdateCaseIds = ["1-13", "1-14", "1-15", "1-16"];

const updateParticipants = (event, uniqueKey, caseId) => {
  const participantEmail =
    PropertiesService.getScriptProperties().getProperty("PARTICIPANT_EMAIL");
  console.log(event.getTitle());

  if (!participantEmail) {
    throw new Error(
      "Please set a Google Apps Scripts property named `PARTICIPANT_EMAIL`."
    );
  }

  event.addGuest(participantEmail);
  event.setTitle(`${uniqueKey}_test-case-${caseId}-participant-updated`);
};

const executeToUpdateParticipants = () => {
  updateEvents(participantUpdateCaseIds, updateParticipants);
};
