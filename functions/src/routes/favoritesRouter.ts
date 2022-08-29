import express from "express";
import { getClient } from "../db";
import Favorite from "../models/Favorite";

const favoritesRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

favoritesRouter.get("/:uid", async (req, res) => {
  try {
    const client = await getClient();
    const uid: string = req.params.uid;
    const results = await client
      .db()
      .collection<Favorite>("favorites")
      .find({ uid })
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

favoritesRouter.post("/", async (req, res) => {
  try {
    const client = await getClient();
    const newFavorite: Favorite = req.body;
    await client.db().collection<Favorite>("favorites").insertOne(newFavorite);
    res.status(200).json(newFavorite);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default favoritesRouter;
