import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { onDocumentCreated } from "firebase-functions/v2/firestore";

const generateSchedule = (event: any) => {
  // const data = event.data?.data();
  // const members = data.members; // GET members from data (default to empty list)
  console.log("id " + event.id);
  console.log(event.id + " " + event.members)
  // FETCH tasks from subcollection "houses/{docId}/tasks"
  // CONVERT tasks to a list of objects
  // IF no tasks exist:
  //     PRINT "No tasks found."
  //     RETURN
  // GET current week number
  // INITIALIZE empty schedule object
  // FOR each member in members:
  //     ASSIGN tasks in a rotating manner based on index
  //     INCLUDE subtasks if available
  // UPDATE "houses/{docId}" document with generated schedule
  // PRINT "Schedule generated successfully."
  // console.log(members);
};

export const createSchedule = onDocumentCreated("houses/{docId}", (event) => {
  const data = event.data?.data();
  if (!data?.schedule) {
    console.log("schedule is missing");
    generateSchedule(event.data);
  }
  if (!data) return;

  // console.log(event.data?.id);
});

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
