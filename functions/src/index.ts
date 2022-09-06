import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import yelpRouter from "./routes/yelpRouter";
import userProfilesRouter from "./routes/userProfilesRouter";
import votedOnRouter from "./routes/VotedOnRouter";
import scheduleRouter from "./routes/scheduleRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/yelp", yelpRouter);
app.use("/voted_on", votedOnRouter);
app.use("/user_profiles", userProfilesRouter);
app.use("/schedule", scheduleRouter);

export const api = functions.https.onRequest(app);
