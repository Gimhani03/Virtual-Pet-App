const addXP = (pet, amount) => {

  pet.xp += amount;

  while (pet.xp >= 100) {

    pet.xp -= 100;

    pet.level += 1;

  }

  return pet;
};

module.exports = addXP;