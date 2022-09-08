import express from "express";
import { getClient } from "../db";
import CityDescription from "../models/CityDescription";

const cityDescriptionRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

cityDescriptionRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client
      .db()
      .collection<CityDescription>("city_descriptions")
      .find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

cityDescriptionRouter.get("/:name", async (req, res) => {
  try {
    const name: string = req.params.name;
    const client = await getClient();
    const results = await client
      .db()
      .collection<CityDescription>("city_descriptions")
      .findOne({ cityName: name });
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default cityDescriptionRouter;
