import React from "react";
import { useNavigate } from "react-router-dom";
import "./Instructions.css";

const Instructions = () => {
  const navigate = useNavigate();

  return (
    <div className="instructions-container">
      <div className="overlay">
        <h1>How to Play</h1>
        <p>
          🕹️ <strong>Single Click the Mouse</strong> to move the Bird{" "}
          <strong>UP</strong> and <strong>DOWN</strong>.
        </p>
        <p> Catch the Items.</p>
        <p>Match the Items with the correct Questions to score points!</p>

        <div className="button-group">
          <button onClick={() => navigate("/bird-game")}>Play Now</button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
