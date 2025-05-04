import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const [audio] = useState(new Audio("/background-music.mp3"));

  useEffect(() => {
    const playAudio = () => {
      audio.loop = true;
      audio.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction.");
      });
    };

    playAudio();

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
      audio.pause();
    };
  }, [audio]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleGlobalClick = () => {
      navigate("/word-game");
    };

    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [navigate]);

  return (
    <div className="wordstart-page">
      <div className="wordstart-content">
        <h1 className="wordstart-title">Word Puzzle Game!</h1>

        <button
          className="wordstart-button"
          onClick={() => navigate("/word-game")}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Start;
