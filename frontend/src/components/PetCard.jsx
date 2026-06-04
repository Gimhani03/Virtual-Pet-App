import StatBar from "./StatBar";
import PetSprite from "./PetSprite";

function PetCard({ pet, petState }) {

    let petMood = "😄";

if (
  pet.hunger < 30 ||
  pet.energy < 30
) {
  petMood = "😟";
}

if (
  pet.hunger < 15 ||
  pet.energy < 15
) {
  petMood = "😢";
}

if (pet.energy < 5) {
  petMood = "😴";
}

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <div className="text-center">

        <div className="text-7xl mb-4">
          <PetSprite state={petState} />
        </div>

        <h2 className="text-2xl font-bold">
          {pet.name}
        </h2>

        <p className="text-gray-500 mb-6">
          {pet.petType}
        </p>

        <p className="text-gray-600 mt-2">
  {
    pet.energy < 10
      ? "I'm sleepy..."
      : pet.hunger < 20
      ? "I'm hungry..."
      : pet.happiness < 20
      ? "Play with me!"
      : "I'm happy!"
  }
</p>

<p>⭐ Level: {pet.level}</p>

<p>XP: {pet.xp}/100</p>

<p>🪙 Coins: {pet.coins}</p>

<p>
  🍎 Food:
  {pet.inventory.food}
</p>

<p>
  🧸 Toys:
  {pet.inventory.toys}
</p>

      </div>

      <StatBar
        emoji="🍔"
        label="Hunger"
        value={pet.hunger}
      />

      <StatBar
        emoji="😊"
        label="Happiness"
        value={pet.happiness}
      />

      <StatBar
        emoji="⚡"
        label="Energy"
        value={pet.energy}
      />

    </div>
  );
}

export default PetCard;