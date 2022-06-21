const mongoose = require('mongoose');
const Game = require ('../Game')
const { faker } = require('@faker-js/faker')

require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Seeding Db connection'))
  .catch((err) => {
    console.log(err)
  })

const randomNumberFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const gamesGenre = ['Action', 'Horror', 'Rogue Like', 'RPG', 'MMO', 'MOBA']

const generateGames = () => {
  const gamesToAddList = []

  for(let i = 0; i <= 20; i++) {
    const game = {
      title: faker.commerce.productName(),
      desc: faker.commerce.productDescription(),
      price: faker.commerce.price(79, 200),
      img: [],
      genre: gamesGenre[randomNumberFromInterval(0, 5)],
    }

    for (let j = 0; j < randomNumberFromInterval(1, 4); j++) {
      const newImg = faker.image.abstract()
      game.img.push(newImg)
    }

    gamesToAddList.push(game)
  }

  return gamesToAddList
}

const seedGamesDB = async () => {
  await Game.deleteMany({});
  const gamesToAdd = generateGames()
  await Game.insertMany(gamesToAdd)
}

seedGamesDB().then(() => {
  mongoose.connection.close();
})