import PetSprite from "./PetSprite";

function PetCard({ pet, petState }) {

   let currentAnimation = petState;

    if (pet.energy <= 20) {
        currentAnimation = "sleeping";
    }

  return (
    <div style={{
      textAlign: "center",
      minWidth: "200px",
    }}>

      <div style={{ marginTop: "80px", marginBottom: "32px" }}>
        <PetSprite state={currentAnimation} />
      </div>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", margin: "0 0 4px", textShadow: "0 2px 6px rgba(0,0,0,0.4)" }}>
        {pet.name}
      </h2>

      <p style={{ color: "#fff", fontSize: "0.9rem", marginBottom: "12px", textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}>
        {pet.petType}
      </p>

      <p style={{ color: "#fff", fontStyle: "italic", fontSize: "0.95rem", textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}>
        {pet.energy < 10
          ? "I'm sleepy... 😴"
          : pet.hunger < 20
          ? "I'm hungry... 🍔"
          : pet.happiness < 20
          ? "Play with me! 🎾"
          : "I'm happy! 😄"}
      </p>

    </div>
  );
}

export default PetCard;