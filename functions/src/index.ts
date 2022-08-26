import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import yelpRouter from "./routes/yelpRouter";
import favoritesRouter from "./routes/favoritesRouter";
import userProfilesRouter from "./routes/userProfilesRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/yelp", yelpRouter);
app.use("/favorites", favoritesRouter);
app.use("/userProfiles", userProfilesRouter);
//app.use("/shoutouts", shoutOutRouter);
export const api = functions.https.onRequest(app);
