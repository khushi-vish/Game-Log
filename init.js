const mongoose = require("mongoose");
const Game = require("./models/game.js");

main()
  .then(() => {
    console.log("connection successful");
    handleInsertion();
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

let allGames = [
  {
    name: "Escape Room: The Lost City",
    link: "https://example.com/lostcity",
    category: "escape",
    os: "windows",
    size: 2.5 * 1024,
    unit: "GB",
    date: new Date("2024-01-15"),
    status: "played",
    cost: "paid",
    rating: 4.5,
    star: "⭐️⭐️⭐️⭐️⭐️",
    review: "Great puzzles and immersive story!",
  },
  {
    name: "Haunted Manor",
    link: "https://example.com/hauntedmanor",
    category: "horror",
    os: "android",
    size: 800,
    unit: "MB",
    date: new Date("2023-11-10"),
    status: "wishlist",
    cost: "free",
    rating: 4,
    star: "⭐️⭐️⭐️⭐️",
    review: "Creepy atmosphere, but a bit short.",
  },
  {
    name: "Bizarre World",
    link: "https://example.com/bizarreworld",
    category: "weird",
    os: "web-browser",
    size: 350,
    unit: "MB",
    date: new Date("2024-02-20"),
    status: "backlog",
    cost: "free",
    rating: 3.5,
    star: "⭐️⭐️⭐️⭐️",
    review: "Strange but fun mechanics.",
  },
  {
    name: "Cyber Lust",
    link: "https://example.com/cyberlust",
    category: "adult",
    os: "windows",
    size: 5 * 1024,
    unit: "GB",
    date: new Date("2024-03-05"),
    status: "playing",
    cost: "paid",
    rating: 4.8,
    star: "⭐️⭐️⭐️⭐️⭐️",
    review: "Incredible visuals and deep storytelling.",
  },
  {
    name: "Dark Web Escape",
    link: "https://example.com/darkwebescape",
    category: "escape",
    os: "web-browser",
    size: 500,
    unit: "MB",
    date: new Date("2023-12-01"),
    status: "played",
    cost: "free",
    rating: 3,
    star: "⭐️⭐️⭐️",
    review: "Interesting concept, but a bit buggy.",
  },
  {
    name: "Silent Shadows",
    link: "https://example.com/silentshadows",
    category: "horror",
    os: "android",
    size: 1.2 * 1024,
    unit: "GB",
    date: new Date("2024-01-30"),
    status: "wishlist",
    cost: "paid",
    rating: 4.2,
    star: "⭐️⭐️⭐️⭐️⭐️",
    review: "Really tense gameplay, excited to play!",
  },
];

const handleInsertion = async () => {
  await Game.deleteMany({});
  console.log("old data deleted");
  await Game.insertMany(allGames);
  console.log("data inserted");
  mongoose.connection.close();
};
