import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import yelpRouter from "./routes/yelpRouter";
import userProfilesRouter from "./routes/userProfilesRouter";
import plannedTripRouter from "./routes/plannedTripRouter";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/yelp", yelpRouter);
app.use("/user_profiles", userProfilesRouter);
app.use("/planned_trips", plannedTripRouter);

export const api = functions.https.onRequest(app);
