const express = require("express");
const router = express.Router();
const Shoe = require("../models/shoe.model");
const { protect, admin } = require("../middleware/auth.middleware");
const { images } = require("../constants");

// Get all shoes (protected)
router.get("/", protect, async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching shoes" });
  }
});

// Get single shoe (protected)
router.get("/:id", protect, async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }
    res.json(shoe);
  } catch (error) {
    res.status(500).json({ message: "Error fetching shoe" });
  }
});

// Create shoe (admin only)
router.post("/", protect, admin, async (req, res) => {
  try {
    const shoe = await Shoe.create({ ...req.body, picture: images.slice(0, 4) });
    res.status(201).json(shoe);
  } catch (error) {
    res.status(500).json({ message: "Error creating shoe" });
  }
});

// Update shoe (admin only)
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!shoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }
    res.json(shoe);
  } catch (error) {
    res.status(500).json({ message: "Error updating shoe" });
  }
});

// Delete shoe (admin only)
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const shoe = await Shoe.findByIdAndDelete(req.params.id);
    if (!shoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }
    res.json({ message: "Shoe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting shoe" });
  }
});

// Search shoes by filters (protected)
router.post("/search", protect, async (req, res) => {
  try {
    const { gender, color, size, minPrice, maxPrice } = req.body;
    const query = {};

    if (gender) query.gender = gender;
    if (color) query.color = { $regex: color, $options: "i" };
    if (size) query.size = { $regex: size, $options: "i" };
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }

    const shoes = await Shoe.find(query);
    res.json(shoes);
  } catch (error) {
    res.status(500).json({ message: "Error searching shoes" });
  }
});

module.exports = router;
