import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import yelpRouter from "./routes/yelpRouter";
import userProfilesRouter from "./routes/userProfilesRouter";
import preferencesRouter from "./routes/preferencesRouter";
import votedOnRouter from "./routes/VotedOnRouter";
import scheduleRouter from "./routes/scheduleRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/yelp", yelpRouter);
app.use("/votedOn", votedOnRouter);
app.use("/userProfiles", userProfilesRouter);
app.use("/user_preferences", preferencesRouter);
app.use("/schedule", scheduleRouter);

export const api = functions.https.onRequest(app);
