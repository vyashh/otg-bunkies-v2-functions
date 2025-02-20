import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { onDocumentCreated } from "firebase-functions/v2/firestore";

const generateSchedule = (event: any) => {
  const data = event.data?.data();
  const members = data.members;

  console.log(members);
};

export const createSchedule = onDocumentCreated("houses/{docId}", (event) => {
  const data = event.data?.data();
  if (!data?.schedule) {
    console.log("schedule is missing");
    generateSchedule(event);
  }
  if (!data) return;

  console.log(data);
});

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
