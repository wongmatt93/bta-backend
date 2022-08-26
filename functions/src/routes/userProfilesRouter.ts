import express from "express";
import { getClient } from "../db";
import UserProfile from "../models/UserProfile";

const userProfilesRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

userProfilesRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<UserProfile>("user_profiles")
      .find()
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default userProfilesRouter;
