import express from "express";
import { getClient } from "../db";
import Preferences from "../models/Preferences";
import UserProfile from "../models/UserProfile";
import VotedOn from "../models/VotedOn";

const userProfilesRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

userProfilesRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<UserProfile>("user_profiles").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

userProfilesRouter.get("/:uid", async (req, res) => {
  try {
    const uid: string = req.params.uid;
    const client = await getClient();
    const result = client
      .db()
      .collection<UserProfile>("user_profiles")
      .findOne({ uid });
    result
      ? res.status(200).json(result)
      : res.status(404).json("Id not found");
  } catch (err) {
    errorResponse(err, res);
  }
});

userProfilesRouter.put("/:uid/preferences", async (req, res) => {
  try {
    const uid: string = req.params.uid;
    const preferences: Preferences = req.body;
    const client = await getClient();
    await client
      .db()
      .collection<UserProfile>("user_profiles")
      .updateOne({ uid }, { $set: { preferences } });
    res.status(200).json(preferences);
  } catch (err) {
    errorResponse(err, res);
  }
});

userProfilesRouter.post("/", async (req, res) => {
  try {
    const newProfile: UserProfile = req.body;
    const client = await getClient();
    await client
      .db()
      .collection<UserProfile>("user_profiles")
      .insertOne(newProfile);
    res.status(200).json(newProfile);
  } catch (err) {
    errorResponse(err, res);
  }
});

userProfilesRouter.put("/:uid/voted-on", async (req, res) => {
  try {
    const client = await getClient();
    const uid: string | undefined = req.params.uid;
    const newCity: VotedOn = req.body;
    await client
      .db()
      .collection<UserProfile>("user_profiles")
      .updateOne({ uid }, { $push: { votedOn: newCity } });
    res.status(200);
    res.json(newCity);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default userProfilesRouter;
