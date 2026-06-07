import { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "./components/PetCard";
import StatBar from "./components/StatBar";
import foodImg from "./assets/food.png";
import buyFoodImg from "./assets/BuyFood.png";
import ballImg from "./assets/ball.png";
import sleepImg from "./assets/sleep.png";
import buyToyImg from "./assets/Toy.png";


function App() {

  const [pet, setPet] = useState(null);
  const [petState, setPetState] = useState("idle");

  useEffect(() => {
    fetchPet();
    const interval =
    setInterval(fetchPet, 30000);

  return () =>
    clearInterval(interval);

  }, []);

  const fetchPet = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5001/api/pets/"
      );

      setPet(response.data[0]);

    } catch (error) {

      console.error(error);

    }
  };

const feedPet = async () => {

  try {

    setPetState("feeding");

    await axios.put(
      `http://localhost:5001/api/pets/${pet._id}/feed`
    );

    fetchPet();

    setTimeout(() => {
      setPetState("idle");
    }, 7000);

  } catch (error) {

    const msg =
      error.response?.data?.message ||
      "Could not feed pet";

    alert(msg);

    setPetState("idle");
  }
};

const playPet = async () => {

  try {

    setPetState("playing");

    await axios.put(
      `http://localhost:5001/api/pets/${pet._id}/play`
    );

    fetchPet();

    setTimeout(() => {
      setPetState("idle");
    }, 4000);

  } catch (error) {

    console.error(error);
    setPetState("idle");

  }
};

const sleepPet = async () => {

  try {

    setPetState("sleeping");

    await axios.put(
      `http://localhost:5001/api/pets/${pet._id}/sleep`
    );

    fetchPet();

    setTimeout(() => {
      setPetState("idle");
    }, 4000);

  } catch (error) {

    console.error(error);
    setPetState("idle");

  }
};

const buyFood = async () => {
  try {
    await axios.put(
      `http://localhost:5001/api/pets/${pet._id}/buy-food`
    );
    fetchPet();
  } catch (error) {
    const msg = error.response?.data?.message || "Could not buy food";
    alert(msg);
  }
};

const buyToy = async () => {
  try {
    await axios.put(
      `http://localhost:5001/api/pets/${pet._id}/buy-toy`
    );
    fetchPet();
  } catch (error) {
    const msg = error.response?.data?.message || "Could not buy toy";
    alert(msg);
  }
};

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2px",
      backgroundImage: "url('/background.png')",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
    }}>

      <h1 style={{
        fontSize: "1.1rem",
        fontWeight: 800,
        color: "#0f0f0f",
        marginTop: "-70px",
        marginRight: "1100px",
        textShadow: "0 2px 8px rgba(0,0,0,0.35), 0 0 2px rgba(0,0,0,0.5)",
        letterSpacing: "0.02em",
      }}>Virtual Pet App </h1>


      {/* Top-right HUD */}
      {pet && (
        <div style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          padding: "16px 20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          border: "1px solid rgba(0,0,0,0.08)",
          minWidth: "180px",
          zIndex: 50,
        }}>
          <div style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "20px" }}>⭐</span>
            <div>
              <div style={{ fontSize: "11px", color: "#888", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>Level</div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: "#1e293b", lineHeight: 1 }}>{pet.level}</div>
            </div>
          </div>

          {/* XP Bar */}
          <div style={{ marginBottom: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#888", marginBottom: "4px" }}>
              <span>XP</span>
              <span>{pet.xp}/100</span>
            </div>
            <div style={{ background: "#e2e8f0", borderRadius: "9999px", height: "6px", overflow: "hidden" }}>
              <div style={{
                width: `${pet.xp}%`,
                background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
                height: "6px",
                borderRadius: "9999px",
                transition: "width 0.5s ease",
              }} />
            </div>
          </div>

          <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#334155" }}>
              <span>🪙</span>
              <span style={{ fontWeight: 600 }}>{pet.coins} Coins</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#334155" }}>
              <span>🍎</span>
              <span style={{ fontWeight: 600 }}>{pet.inventory.food} Food</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#334155" }}>
              <span>🧸</span>
              <span style={{ fontWeight: 600 }}>{pet.inventory.toys} Toys</span>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px", marginTop: "4px" }}>
            <StatBar emoji="🍔" label="Hunger"    value={pet.hunger}    />
            <StatBar emoji="😊" label="Happiness" value={pet.happiness} />
            <StatBar emoji="⚡" label="Energy"    value={pet.energy}    />
          </div>
        </div>
      )}

      {pet && <PetCard pet={pet} petState={petState} />}

      {/* Bottom action dock */}
      {pet && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderRadius: "20px",
          padding: "12px 16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
          border: "1px solid rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          zIndex: 50,
          whiteSpace: "nowrap",
        }}>

          {[
            { label: "Feed",  icon: foodImg, isImg: true,  size: 72, onClick: feedPet,  bg: "#f97316" },
            { label: "Play",  icon: ballImg, isImg: true,  size: 72, onClick: playPet,  bg: "#22c55e" },
            { label: "Sleep", icon: sleepImg,   isImg: true,  size: 72, onClick: sleepPet, bg: "#60a5fa" },
          ].map(({ label, icon, isImg, size, onClick, bg }) => (
            <button key={label} onClick={onClick} style={{
              background: bg,
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              padding: "10px 18px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
              minWidth: "68px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "transform 0.1s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              {isImg
                ? <img src={icon} alt={label} style={{ width: `${size}px`, height: `${size}px`, objectFit: "contain" }} />
                : <span style={{ fontSize: "22px" }}>{icon}</span>
              }
              <span style={{ fontSize: "18px" }}>{label}</span>
            </button>
          ))}

          {/* Divider */}
          <div style={{ width: "1px", height: "48px", background: "#0f0f0f", margin: "0 4px" }} />

          {[
            { label: "Buy Foods", icon: buyFoodImg, isImg: true,  size: 72, onClick: buyFood, bg: "#fb923c" },
            { label: "Buy Toys",  icon: buyToyImg,       isImg: true, size: 72, onClick: buyToy,  bg: "#a78bfa" },
          ].map(({ label, icon, isImg, size, onClick, bg }) => (
            <button key={label} onClick={onClick} style={{
              background: bg,
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              padding: "10px 18px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
              minWidth: "68px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "transform 0.1s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              {isImg
                ? <img src={icon} alt={label} style={{ width: `${size}px`, height: `${size}px`, objectFit: "contain" }} />
                : <span style={{ fontSize: "22px" }}>{icon}</span>
              }
              <span style={{ fontSize: "18px" }}>{label}</span>
            </button>
          ))}

        </div>
      )}

    </div>
  );


  
}

export default App;