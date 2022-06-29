const mongoose = require("mongoose");
const Game = require("../Game");
const { faker } = require("@faker-js/faker");
const data = require("../../utils/gameData")

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

  for (let i = 0; i < data.length; i++) {
    const game = {
      title: data[i].title,
      desc: faker.commerce.productDescription(),
      price: faker.commerce.price(50, 200),
      img: data[i].img,
      portrait: data[i].portrait,
      releasedate: faker.date.between('2018-01-01T00:00:00.000Z', '2022-06-28T00:00:00.000Z'),
      publisher: gamesPublisher[randomNumberFromInterval(0, 8)],
      tags: [],
      categories: [],
      about: faker.lorem.paragraphs(5, '<br />'),
      genre: gamesGenre[randomNumberFromInterval(0, 5)],
    };

    for (let i = 0; i < randomNumberFromInterval(4, 8); i++) {
      let selectedTag = gamesTag[randomNumberFromInterval(0, gamesTag.length - 1)]
      while (game.tags.includes(selectedTag)) {
        selectedTag = gamesTag[randomNumberFromInterval(0, gamesTag.length - 1)]
      }
      game.tags.push(selectedTag)
    }

    for (let i = 0; i < randomNumberFromInterval(3, 6); i++) {
      let selectedCategory = gamesCategories[randomNumberFromInterval(0, gamesCategories.length - 1)]
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
