// require the express module
import express from "express";
import axios from "axios";
// create a new Router object
const yelpRouter = express.Router();
// const key: string = functions.config().yelpKey
yelpRouter.get("/", async (req, res) => {
  const { location } = req.query;
  const results = (
    await axios.get("https://api.yelp.com/v3/businesses/search", {
      params: { location },
      headers: {
        Authorization: `Bearer`,
      },
    })
  ).data;
  res.status(200).json(results);
});
export default yelpRouter;
