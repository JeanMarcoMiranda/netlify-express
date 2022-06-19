const Game = require("../models/Game");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/games", verifyTokenAndAdmin, async (req, res) => {
  const newGame = new Game(req.body);

  try {
    const savedGame = await newGame.save();
    res.status(200).json(savedGame);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/games/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedGame);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/games/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.status(200).json("Game has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET GAME
router.get("/games/find/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL GAMES
router.get("/games", async (req, res) => {
  const qNew = req.query.new;
  const qTag = req.query.tag;
  try {
    let games;

    if (qNew) {
      games = await Game.find().sort({ createdAt: -1 }).limit(1);
    } else if (qTag) {
      games = await Game.find({
        tags: {
          $in: [qTag],
        },
      });
    } else {
      games = await Game.find();
    }

    res.status(200).json(games);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
