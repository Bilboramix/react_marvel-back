require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(formidable());

const comicsRoad = require("./roads/comics");
app.use(comicsRoad);

const charactersRoad = require("./roads/characters");
app.use(charactersRoad);

const characterRoad = require("./roads/character");
app.use(characterRoad);

app.all("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Bilboramixe's API 😎" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Error 404, page not found 😥" });
});

app.listen(process.env.PORT, (req, res) => {
  console.log("💪😎🤘 server ON - Made by Bilboramix ©");
});
