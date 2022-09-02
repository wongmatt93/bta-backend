import express from "express";
import { getClient } from "../db";
import Preferences from "../models/Preferences";

const preferencesRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

preferencesRouter.get("/:uid", async (req, res) => {
  try {
    const client = await getClient();
    const uid = req.params.uid;
    const results = await client
      .db()
      .collection<Preferences>("user_preferences")
      .findOne({ uid });
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

preferencesRouter.post("/", async (req, res) => {
  try {
    const newPreference: Preferences = req.body;
    const client = await getClient();
    await client
      .db()
      .collection<Preferences>("user_preferences")
      .insertOne(newPreference);
    res.status(200).json(newPreference);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default preferencesRouter;
