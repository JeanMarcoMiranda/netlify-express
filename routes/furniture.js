const Furniture = require("../models/Furniture");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/furnitures", verifyTokenAndAdmin, async (req, res) => {
  const newFurniture = new Furniture(req.body);

  try {
    const savedFurniture = await newFurniture.save();
    res.status(200).json(savedFurniture);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/furnitures/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedFurniture = await Furniture.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFurniture);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/furnitures/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Furniture.findByIdAndDelete(req.params.id);
    res.status(200).json("Furniture has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET FURNITURE
router.get("/furnitures/find/:id", async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.params.id);
    res.status(200).json(furniture);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL FURNITURES
router.get("/furnitures", async (req, res) => {
  const qNew = req.query.new;
  const qType = req.query.type;
  try {
    let furnitures;

    if (qNew) {
      furnitures = await Furniture.find().sort({ createdAt: -1 }).limit(1);
    } else if (qType) {
      furnitures = await Furniture.find({
        type: qType,
      });
    } else {
      furnitures = await Furniture.find();
    }

    res.status(200).json(furnitures);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
