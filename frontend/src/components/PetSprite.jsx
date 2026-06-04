import { useState, useEffect } from "react";

import idleSprite from "../assets/sprites/idle-cat.png";
import feedingSprite from "../assets/sprites/feeding-cat.png";
import playingSprite from "../assets/sprites/playing-cat.png";
import sleepingSprite from "../assets/sprites/sleeping-cat.png";

function PetSprite({ state }) {

  const [frame, setFrame] = useState(0);

  const spriteSheet =
    state === "feeding"
      ? feedingSprite
      : state === "playing"
      ? playingSprite
      : state === "sleeping"
      ? sleepingSprite
      : idleSprite;

  const FRAME_WIDTH = 333;
  const FRAME_HEIGHT = 436;
  const TOTAL_FRAMES = 6;

  useEffect(() => {

    const interval = setInterval(() => {

      setFrame(prev =>
        (prev + 1) % TOTAL_FRAMES
      );

    }, 200);

    return () => clearInterval(interval);

  }, [state]);

  const SCALE = 0.8;

  return (
    <div style={{
      width: Math.round(FRAME_WIDTH * SCALE),
      height: Math.round(FRAME_HEIGHT * SCALE),
      overflow: "hidden",
      margin: "0 auto",
    }}>
      <div
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          backgroundImage: `url(${spriteSheet})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${frame * FRAME_WIDTH}px 0px`,
          backgroundSize: "auto",
          imageRendering: "pixelated",
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}

export default PetSprite;