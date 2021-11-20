const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/characters", async (req, res) => {
  try {
    let url = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&limit=${req.query.limit}&skip=${(req.query.page - 1) * req.query.limit}`;
    if (req.query.title) {
      url = url + `&name=${req.query.title}`;
    }
    console.log(url);
    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
