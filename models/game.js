const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["escape", "horror", "weird", "adult"],
  },
  os: {
    type: String,
    required: true,
    enum: ["windows", "android", "web-browser"],
  },
  size: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["playing", "played", "wishlist", "backlog"],
  },
  cost: {
    type: String,
    required: true,
    enum: ["paid", "free"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  star: {
    type: String,
  },
  review: {
    type: String,
  },
});

gameSchema.pre("save", function (next) {
  const starEmojis = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
  if (this.rating) {
    this.star = starEmojis[this.rating - 1];
  } else {
    this.star = "";
  }
  next();
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
