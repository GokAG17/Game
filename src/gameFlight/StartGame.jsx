import { useNavigate } from "react-router-dom";
import "./StartGame.css";

const StartGame = () => {
  const navigate = useNavigate();

  return (
    <div className="flightstart">
      <div className="flight-content-container">
        <button
          className="flight-start-btn"
          onClick={() => navigate("/plane-instructions")}
        >
          Start Flight
        </button>
      </div>
    </div>
  );
};

export default StartGame;
