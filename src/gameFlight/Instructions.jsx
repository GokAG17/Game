import { useNavigate } from "react-router-dom";
import "./Instructions.css";

const Instructions = () => {
  const navigate = useNavigate();

  return (
    <div className="flightinstructions-container">
      <div className="flightinstructions-content">
        <h2 className="flightinstructions-title">How to Play</h2>
        <p className="flightinstructions-text">
          One-Click To Move the Plane UP and DOWN
        </p>
        <button
          className="flightinstructions-btn"
          onClick={() => navigate("/plane-game")}
        >
          Start Flight
        </button>
      </div>
    </div>
  );
};

export default Instructions;
