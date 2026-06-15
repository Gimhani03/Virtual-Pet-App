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

      <div style={{ marginTop: "220px", marginBottom: "32px" }}>
        <PetSprite state={currentAnimation} />
      </div>


    </div>
  );
}

export default PetCard;