import { useState, useEffect } from "react";

import idleSprite from "../assets/sprites/idle-cat.png";
import feedingSprite from "../assets/sprites/feeding-cat.png";
import playingSprite from "../assets/sprites/playing-cat.png";

function PetSprite({ state }) {

  const [frame, setFrame] = useState(0);

  const spriteSheet =
    state === "feeding"
      ? feedingSprite
      : state === "playing"
      ? playingSprite
      : idleSprite;

  const FRAME_WIDTH = 475;
  const FRAME_HEIGHT = 622;
  const TOTAL_FRAMES = 6;

  useEffect(() => {

    const interval = setInterval(() => {

      setFrame(prev =>
        (prev + 1) % TOTAL_FRAMES
      );

    }, 200);

    return () => clearInterval(interval);

  }, [state]);

  return (
    <div
      style={{
        width: "190px",
        height: "250px",
        overflow: "hidden",
        margin: "0 auto"
      }}
    >
      <div
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          backgroundImage: `url(${spriteSheet})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${frame * FRAME_WIDTH}px 0px`,
          imageRendering: "pixelated",
          transform: "scale(0.4)",
          transformOrigin: "top left"
        }}
      />
    </div>
  );
}

export default PetSprite;