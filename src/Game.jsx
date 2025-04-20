import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
// import {
//   FireOutlined,
//   RocketOutlined,
//   FontSizeOutlined,
//   CarOutlined,
// } from "@ant-design/icons";
import { ScatterBoxLoader } from "react-awesome-loaders";
import Typewriter from "typewriter-effect";
import "./Game.css"; // Updated CSS filename

const games = [
  {
    title: "Ninja Hunt",
    description: "🥷",
    route: "/ninja-start",
  },
  {
    title: "Bird Thrust",
    description: "🦅",
    route: "/bird-start",
  },
  {
    title: "Word Collect",
    description: "🔠",
    route: "/word-start",
  },
  {
    title: "Car Race",
    description: "🏎️",
    route: "/car-start",
  },
  {
    title: "Flight Shoot",
    description: "✈️",
    route: "/plane-start",
  },
];

const Games = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTraversalStarted, setTraversalStarted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (isTraversalStarted) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % games.length);
      }, 5000);
    }

    const handleDoubleClick = () => {
      if (!isTraversalStarted) {
        setTraversalStarted(true);
      } else {
        navigateToGame();
      }
    };

    document.addEventListener("click", handleDoubleClick);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleDoubleClick);
    };
  }, [isTraversalStarted, activeIndex]);

  const navigateToGame = () => {
    if (!isTraversalStarted) return;
    setLoading(true);
    setTimeout(() => {
      navigate(games[activeIndex].route);
      setLoading(false);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="start-loader-container">
        <ScatterBoxLoader primaryColor={"#FF6347"} background={"#000"} />
      </div>
    );
  }

  return (
    <div className="start-container">
      {/* <div className="start-typewriter">
        <Typewriter
          onInit={(writer) => {
            writer
              .typeString("Click anywhere to start game selection!")
              .pauseFor(1000)
              .typeString("<br />Double-click to play the highlighted game")
              .start();
          }}
        />
      </div> */}

      <Row gutter={[16, 16]} justify="center">
        {games.map((game, index) => (
          <Col key={index} span={8}>
            <Card
              className={`start-card ${activeIndex === index ? "start-active" : ""}`}
              onClick={() => navigateToGame()}
              bordered={false}
            >
              <h2>{game.icon} {game.title}</h2>
              <p>{game.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Games;
