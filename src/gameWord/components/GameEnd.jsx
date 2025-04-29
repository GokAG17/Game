import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GameEnd.css";

const GameEnd = () => {
  const navigate = useNavigate();

  // Effect to handle global click event
  useEffect(() => {
    const handleGlobalClick = () => {
      navigate("/game"); // Navigate to the game start screen
    };

    // Adding event listener on mount
    document.addEventListener("click", handleGlobalClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [navigate]);

  return (
    <div className="wordgame-end-container">
      <div className="game-end-card">
        <h1 className="wordgame-over-title">Game Over!</h1>
        <p className="wordgame-end-text">
          The game has ended. Would you like to try again?
        </p>

        {/* Button to navigate back to the start */}
        <button
          className="wordrestart-button"
          onClick={() => navigate("/game")}
        >
          Go to Start
        </button>
      </div>
      {/* Particle background for animation effect */}
      <div className="wordparticle-bg"></div>
    </div>
  );
};

export default GameEnd;
