const Pet = require("../models/Pet");
const applyStatDecay =
  require("./petUtils");
const addXP =
  require("./levelUtils");

// Create Pet
const createPet = async (req, res) => {
  try {
    const { name, petType } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Pet name is required"
      });
    }

    const pet = await Pet.create({
      name,
      petType
    });

    res.status(201).json(pet);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};


const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();

    for (const pet of pets) {

        applyStatDecay(pet);

        await pet.save();

    }

    res.json(pets);

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};

const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found"
      });
    }

    applyStatDecay(pet);

    await pet.save();

    res.json(pet);

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};

const feedPet = async (req, res) => {

  try {

    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found"
      });
    }

   if (pet.inventory.food <= 0) {
  return res.status(400).json({
    message: "No food available"
  });
}

    pet.inventory.food -= 1;

    pet.hunger = Math.min(100,
    pet.hunger + 15
    );

    pet.coins += 5;

    addXP(pet, 10);

    pet.coins += 10;

    addXP(pet, 15);

    pet.coins += 3;

    addXP(pet, 5);

    await pet.save();

    res.json(pet);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const playPet = async (req, res) => {

  try {

    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found"
      });
    }

    pet.happiness = Math.min(100, pet.happiness + 15);

    pet.energy = Math.max(0, pet.energy - 10);

    await pet.save();

    res.json(pet);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const sleepPet = async (req, res) => {

  try {

    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found"
      });
    }

    pet.energy = 100;

    await pet.save();

    res.json(pet);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const buyFood = async (req, res) => {

  try {

    const pet =
      await Pet.findById(
        req.params.id
      );

    if (!pet) {
      return res
        .status(404)
        .json({
          message:
            "Pet not found"
        });
    }

    const price = 20;

    if (pet.coins < price) {
      return res
        .status(400)
        .json({
          message:
            "Not enough coins"
        });
    }

    pet.coins -= price;

    pet.inventory.food += 1;

    await pet.save();

    res.json(pet);

  } catch (error) {

    res.status(500).json({
      message:
        "Server Error"
    });

  }
};

const buyToy = async (req, res) => {

  try {

    const pet =
      await Pet.findById(
        req.params.id
      );

    const price = 30;

    if (pet.coins < price) {
      return res
        .status(400)
        .json({
          message:
            "Not enough coins"
        });
    }

    pet.coins -= price;

    pet.inventory.toys += 1;

    await pet.save();

    res.json(pet);

  } catch (error) {

    res.status(500).json({
      message:
        "Server Error"
    });

  }
};

module.exports = {
  createPet,
  getPets,
  getPetById,
  feedPet,
  playPet,
  sleepPet,
  buyFood,
  buyToy
};
