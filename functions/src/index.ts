import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";

const generateSchedule = (event: any) => {
  const data = event.data?.data();
  // const members = data.members; // GET members from data (default to empty list)
  // console.log("id " + data.uid);
  console.log(event.data.id + " " + data.members);
  // FETCH tasks from subcollection "houses/{docId}/tasks"
  // CONVERT tasks to a list of objects

  // IF no tasks exist:
  //     PRINT "No tasks found."
  //     RETURN

  // if no tasks exists return
  if (!data.tasks) return;

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
    generateSchedule(event);
  }
  if (!data) return;

  // console.log(event.data?.id);
});

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const seedHouse = onRequest(async (request, response) => {
  initializeApp();

  const db = getFirestore();
  try {
    const houseData = {
      name: "Student House 1",
      members: ["Alice", "Bob", "Charlie", "Dave"],
      tasks: ["bathroom", "kitchen"],
      createdAt: new Date(),
    };

    const docRef = await db.collection("houses").add(houseData);
    logger.info(`House document created with ID: ${docRef.id}`);
    response.json({ message: "House document created!", id: docRef.id });
  } catch (error) {
    logger.error("Error creating house document:", error);
    response.status(500).json({ error: "Failed to create document" });
  }
});
