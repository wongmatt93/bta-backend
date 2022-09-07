import express from "express";
import { ObjectId } from "mongodb";
import { getClient } from "../db";
import PlannedTrip from "../models/PlannedTrip";

const plannedTripRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

plannedTripRouter.get("/:uid", async (req, res) => {
  try {
    const client = await getClient();
    const uid: string = req.params.uid;
    const results = await client
      .db()
      .collection<PlannedTrip>("planned_trips")
      .find({ uid })
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

plannedTripRouter.post("/", async (req, res) => {
  try {
    const client = await getClient();
    const newPlannedTrip: PlannedTrip = req.body;
    await client
      .db()
      .collection<PlannedTrip>("planned_trips")
      .insertOne(newPlannedTrip);
    res.status(200).json(newPlannedTrip);
  } catch (err) {
    errorResponse(err, res);
  }
});

plannedTripRouter.delete("/:id", async (req, res) => {
  try {
    const client = await getClient();
    const id: string = req.params.id;
    await client
      .db()
      .collection<PlannedTrip>("planned_trips")
      .deleteOne({ _id: new ObjectId(id) });
    res.sendStatus(204);
  } catch (err) {
    errorResponse(err, res);
  }
});

plannedTripRouter.put("/:id/photos", async (req, res) => {
  try {
    const client = await getClient();
    const id: string | undefined = req.params.id;
    const photo: string = req.body.photo;
    await client
      .db()
      .collection<PlannedTrip>("planned_trips")
      .updateOne({ _id: new ObjectId(id) }, { $push: { photos: photo } });
    res.status(200);
    res.json(photo);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default plannedTripRouter;
