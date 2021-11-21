const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/character", async (req, res) => {
  try {
    const url = `https://lereacteur-marvel-api.herokuapp.com/comics/${req.query.characterId}?apiKey=${process.env.MARVEL_API_KEY}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
