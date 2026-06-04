import { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "./components/PetCard";

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
    }, 5000);

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

    await axios.put(
      `http://localhost:5001/api/pets/${pet._id}/sleep`
    );

    fetchPet();

  } catch (error) {

    console.error(error);

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
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">

      <h1 className="text-4xl font-bold">Virtual Pet App 🐱</h1>

      {pet && <PetCard pet={pet} petState={petState} />}

      <div className="flex gap-3">
        <button
          onClick={feedPet}
          className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 font-medium"
        >
          Feed 🍔
        </button>

        <button
          onClick={playPet}
          className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 font-medium"
        >
          Play 🎾
        </button>

        <button
          onClick={sleepPet}
          className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 font-medium"
        >
          Sleep 😴
        </button>

        <button onClick={buyFood}>
        Buy Food 🍎
        </button>

        <button onClick={buyToy}>
        Buy Toy 🧸
        </button>
      </div>

    </div>
  );


  
}

export default App;