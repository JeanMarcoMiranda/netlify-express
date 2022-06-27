const mongoose = require("mongoose");
const Game = require("../Game");
const { faker } = require("@faker-js/faker");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Seeding Db connection"))
  .catch((err) => {
    console.log(err);
  });

const randomNumberFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const gamesGenre = ["Action", "Horror", "Rogue Like", "RPG", "MMO", "MOBA"];

const gamesPublisher = ["Bandai Namco", "Activision", "Nintendo", "Square Enix", "Ubisoft", "Sony", "EA", "Capcom", "Devolver"];

const gamesTag = ["Anime", "JRPG", "Visula Novel", "PvP", "Strategy", "Sci-fi", "Adventure", "Action", "Multiplayer", "Singleplayer", "Detective", "2D", "Indie", "Retro", "Turn-Based", "3D", "Co-op", "Violent"]

const gamesCategories = ["Single-player", "Online PvP", "Online Co-op", "Achievements", "Full controller support", "Trading Cards", "MMO", "Remote Play", "Local Multiplayer", "Cloud", "In-App Purchases", " Leaderboards"]

const generateGames = () => {
  const gamesToAddList = [];

  for (let i = 0; i <= 20; i++) {
    const game = {
      title: faker.commerce.productName(),
      desc: faker.commerce.productDescription(),
      price: faker.commerce.price(50, 200),
      img: [],
      portrait: [],
      releasedate: "",
      publisher: gamesPublisher[randomNumberFromInterval(8)],
      tags: [],
      categories: [],
      about: faker.lorem.paragraphs(10),
      genre: gamesGenre[randomNumberFromInterval(0, 5)],
    };

    for (let i = 0; i < randomNumberFromInterval(4, 8); i++) {
      const selectedTag = gamesTag[randomNumberFromInterval(0, gamesTag.length - 1)]
      while (game.tags.includes(selectedTag)) {
        selectedTag = gamesTag[randomNumberFromInterval(0, gamesTag.length - 1)]
      }
      game.tags.push(selectedTag)
    }

    for (let i = 0; i < randomNumberFromInterval(3, 6); i++) {
      const selectedCategory = gamesCategories[randomNumberFromInterval(0, gamesCategories.length - 1)]
      while (game.categories.includes(selectedCategory)) {
        selectedCategory = gamesCategories[randomNumberFromInterval(0, gamesTag.length - 1)]
      }
      game.categories.push(selectedCategory)
    }

    gamesToAddList.push(game);
  }

  return gamesToAddList;
};

const seedGamesDB = async () => {
  await Game.deleteMany({});
  const gamesToAdd = generateGames();
  await Game.insertMany(gamesToAdd);
};

seedGamesDB().then(() => {
  mongoose.connection.close();
});
