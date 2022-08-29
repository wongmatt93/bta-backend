import express from "express";
import { getClient } from "../db";
import VotedOn from "../models/VotedOn";

const votedOnRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

votedOnRouter.get("/:uid", async (req, res) => {
  try {
    const client = await getClient();
    const uid: string = req.params.uid;
    const results = await client
      .db()
      .collection<VotedOn>("votedOn")
      .find({ uid })
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

votedOnRouter.post("/", async (req, res) => {
  try {
    const client = await getClient();
    const newVotedOn: VotedOn = req.body;
    await client.db().collection<VotedOn>("votedOn").insertOne(newVotedOn);
    res.status(200).json(newVotedOn);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default votedOnRouter;
