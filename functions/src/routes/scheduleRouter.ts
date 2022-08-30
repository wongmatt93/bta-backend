import express from "express";
import { getClient } from "../db";
import SingleDaySchedule from "../models/SingleDaySchedule";

const scheduleRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

scheduleRouter.get("/:uid", async (req, res) => {
  try {
    const client = await getClient();
    const uid: string = req.params.uid;
    const results = await client
      .db()
      .collection<SingleDaySchedule>("schedule")
      .find({ uid })
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

scheduleRouter.get("/:uid/:date1/:date2/:cityName", async (req, res) => {
  try {
    const client = await getClient();
    const uid: string = req.params.uid;
    const date1: string = req.params.date1;
    const date2: string = req.params.date2;
    const cityName: string = req.params.cityName;
    const results = await client
      .db()
      .collection<SingleDaySchedule>("schedule")
      .find({ uid, date1, date2, cityName })
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

scheduleRouter.post("/", async (req, res) => {
  try {
    const client = await getClient();
    const newSchedule: SingleDaySchedule = req.body;
    await client
      .db()
      .collection<SingleDaySchedule>("schedule")
      .insertOne(newSchedule);
    res.status(200).json(newSchedule);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default scheduleRouter;
