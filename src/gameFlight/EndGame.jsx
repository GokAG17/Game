import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./EndGame.css";

const EndGame = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.finalScore || 0;
  const hasSentScore = useRef(false);

  const handlePlayAgain = () => {
    navigate("/game", { state: { finalScore: 0 } });
  };

  // Global click event
  useEffect(() => {
    const handleGlobalClick = () => {
      handlePlayAgain();
    };

    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <div className="end-container">
      <div className="content-container">
        <h1>Game Over!</h1>
        <p>
          Your Score: <span className="score-bird">{score}</span>
        </p>
        <button className="play-again-btn" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default EndGame;
