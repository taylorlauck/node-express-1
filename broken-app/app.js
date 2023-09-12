const express = require("express");
const axios = require("axios");
const app = express();
const ExpressError = require("./expressError");
// Given a list of GitHub users names, this should return information about those developers.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res, next) => {
  try {
    const { developers } = req.body;
    const promises = developers.map(async (d) => {
      const resp = await axios.get(`https://api.github.com/users/${d}`);
      return resp.data;
    });
    const results = await Promise.all(promises);
    return res.json(results.map((r) => ({ name: r.name, bio: r.bio })));
  } catch (e) {
    error = new ExpressError("Error fetching data", 500);
    next(error);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));