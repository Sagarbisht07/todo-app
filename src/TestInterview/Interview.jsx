import React, { useRef, useState, useEffect } from "react";
import "./style.scss";

const PlayRedDotGame = () => {
  const [buttonPressed, setButtonPressed] = useState("");
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [delay, setDelay] = useState(500);
  const [clicks, setClicks] = useState([]);
  const [startTime, setStartTime] = useState(null);

  const intervalRef = useRef(null);

  // random position generator
  function handlePosition() {
    const RandomPositionX = Math.random() * 250;
    const RandomPositionY = Math.random() * 350;

    return {
      top: RandomPositionX,
      left: RandomPositionY,
    };
  }

  // move red dot
  function moveDot() {
    const value = handlePosition();
    setPosition(value);
  }

  // start / pause / reset
  useEffect(() => {
    if (buttonPressed === "start") {
      moveDot();
      setStartTime(Date.now());

      intervalRef.current = setInterval(() => {
        moveDot();
      }, delay);
    }

    if (buttonPressed === "pause") {
      clearInterval(intervalRef.current);
    }

    if (buttonPressed === "reset") {
      clearInterval(intervalRef.current);
      setPosition({ top: 0, left: 0 });
      setClicks([]);
      setStartTime(null);
    }

    return () => clearInterval(intervalRef.current);
  }, [buttonPressed, delay]);

  // when user clicks red dot
  function handleDotClick() {
    const now = Date.now();
    const reaction = ((now - startTime) / 1000).toFixed(2);

    setClicks((prev) => [...prev, reaction]);

    setStartTime(now);

    moveDot();
  }

  return (
    <div>
      {/* buttons */}
      <div className="btn">
        <button onClick={() => setButtonPressed("start")}>Start</button>
        <button onClick={() => setButtonPressed("pause")}>Pause</button>
        <button onClick={() => setButtonPressed("reset")}>Reset</button>
      </div>

      {/* delay input */}
      <div className="input-delay">
        <input
          className="input-delay-box"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
        />
        <label>Enter Delay here (ms)</label>
      </div>

      {/* play area */}
      <div className="Play_area">
        {buttonPressed === "start" && (
          <span
            className="red_dot"
            onClick={handleDotClick}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
            }}
          ></span>
        )}
      </div>

      {/* table */}
      <div className="score_area">
        <table>
          <thead>
            <tr>
              <th>Mouse Click Number</th>
              <th>Reaction Time</th>
            </tr>
          </thead>

          <tbody>
            {clicks.map((time, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{time}s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayRedDotGame;
