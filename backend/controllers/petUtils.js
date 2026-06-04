const applyStatDecay = (pet) => {

  const now = new Date();

  const minutesPassed =
    Math.floor(
      (now - pet.lastUpdated) /
      (1000 * 60)
    );

  if (minutesPassed <= 0) {
    return pet;
  }

  pet.hunger = Math.max(
    0,
    pet.hunger - minutesPassed
  );

  pet.energy = Math.max(
    0,
    pet.energy - minutesPassed
  );

  pet.happiness = Math.max(
    0,
    pet.happiness - Math.floor(minutesPassed / 2)
  );

  pet.lastUpdated = now;

  return pet;
};

module.exports = applyStatDecay;