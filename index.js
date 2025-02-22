const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");

// requiring the schema

const Game = require("./models/game.js");

// setting path

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// MONGOOSE CONNECTION
main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

// ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/itch-io", async (req, res) => {
  let games = await Game.find();
  res.render("itch-io", { games });
});

app.post("/itch-io", async (req, res) => {
  let {
    name,
    link,
    category,
    os,
    size,
    unit,
    date,
    status,
    cost,
    rating,
    review,
  } = req.body;

  let newGame = new Game({
    name: name,
    link: link,
    category: category,
    os: os,
    size: unit === "GB" ? size * 1024 : size,
    date: date,
    status: status,
    cost: cost,
    rating: rating,
    review: review,
  });

  await newGame.save();
  res.redirect("/itch-io");
});

// SERVER START
app.listen(3000, () => {
  console.log("server is working");
});
