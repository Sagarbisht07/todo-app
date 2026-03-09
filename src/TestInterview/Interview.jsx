import React, { useRef, useState, useEffect } from "react";
import "./style.scss";

const PlayRedDotGame = () => {
  const [buttonPressed, setButtonPressed] = useState("");
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [numberOfClicks, setNumberOfClicks] = useState([]);
  const [delay, setDelay] = useState(500);
  const [startTime, setStartTime] = useState(null);

  const intervalRef = useRef(null);

  // this function to calculate red box height and width
  function handlePosition() {
    let RandomPositionX = Math.random() * 250;
    let RandomPositionY = Math.random() * 350;
    return { top: RandomPositionX, left: RandomPositionY };
  }
  function moveDot() {
    let value = handlePosition();
    setPosition(value);
  }

  // it will handle start,reset and pause working by using side effect of useEffect
  useEffect(() => {
    if (buttonPressed === "start") {
      console.log("~", "start");
      moveDot();
      setStartTime(Date.now());
      intervalRef.current = setInterval(() => {
        moveDot();
      }, delay);
    } else if (buttonPressed === "reset") {
      clearInterval(intervalRef.current);
      setStartTime(null);
      setPosition({ top: 0, left: 0 });
      setNumberOfClicks([]);
    } else if (buttonPressed === "pause") {
      clearInterval(intervalRef.current);
    }
  }, [buttonPressed, delay]);

  function mouseEvents() {
    const now = Date.now();
    const reaction = ((now - startTime) / 1000).toFixed(2);
    setNumberOfClicks((prev) => [...prev, reaction]);
    setStartTime(now);
    moveDot();
  }

  return (
    <div>
      {/* all buttons actions */}
      <div className="btn">
        <button
          onClick={() => setButtonPressed("start")}
          disabled={buttonPressed === "start"}
        >
          Start
        </button>
        <button onClick={() => setButtonPressed("pause")}>Pause</button>
        <button onClick={() => setButtonPressed("reset")}>Resat</button>
      </div>

      {/* input box to update the red dot speed */}
      <div className="input-delay">
        <input
          className="input-delay-box"
          value={delay}
          onChange={(e) => {
            setDelay(e.target.value);
            setButtonPressed("reset");
          }}
        ></input>
        <label>Entre Delay here (ms)</label>
      </div>

      {/* where dot is present inside the box */}
      <div className="Play_area">
        <span
          className="red_dot"
          style={{
            top: position?.top,
            left: position?.left,
          }}
          onClick={() => {
            if (buttonPressed !== "pause") {
              mouseEvents();
            }
          }}
        ></span>
      </div>

      {/*  here we need to show events of mouse  */}
      <div className="score_area">
        <div className="mouse_click">
          <label className="label">Mouse click number</label>
          {numberOfClicks?.map((i, index) => (
            <div key={index + 1}>{index + 1}</div>
          ))}
        </div>
        <div className="reaction_time">
          <label className="label">Reaction time</label>
          {numberOfClicks?.map((item, index) => (
            <div key={index + 1}>{item}s</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayRedDotGame;
