/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const testExternalFunction = (value: string) => {
  console.log(value);
};

export const generateSchedule = onDocumentCreated("houses/{docId}", (event) => {
  const data = event.data?.data();
  if (!data?.schedule) {
    console.log("schedule is missing");

    const members = !data?.members || [];

    console.log(members);
    testExternalFunction("triggering external function");
  }
  if (!data) return;

  console.log(data);
});

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
