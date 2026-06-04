const express = require("express");

const {
  createPet,
  getPets,
  getPetById,
  feedPet,
  playPet,
  sleepPet,
  buyFood,
  buyToy,
} = require("../controllers/petController");

const router = express.Router();

router.get("/", getPets);
router.post("/", createPet);
router.get("/:id", getPetById);
router.put("/:id/feed", feedPet);
router.put("/:id/play", playPet);
router.put("/:id/sleep", sleepPet);
router.put( "/:id/buy-food",buyFood);
router.put("/:id/buy-toy",buyToy);

module.exports = router;