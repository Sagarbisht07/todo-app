import React, { useRef, useState } from "react";
import "./style.scss";
import { useEffect } from "react";

const PlayRedDotGame = () => {
  const [buttonPressed, setButtonPressed] = useState("");
  const [position, setPosition] = useState({ top: "0px", left: "0px" });
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [delay, setDelay] = useState(500);

  const intervalRef = useRef(null);

  // this function to calculate red box height and width
  function handlePosition() {
    let RandomPositionX = Math.random() * 250;
    let RandomPositionY = Math.random() * 350;
    return { RandomPositionX, RandomPositionY };
  }

  // it will handle start,reset and pause working by using side effect of useEffect
  useEffect(() => {
    if (buttonPressed === "start") {
      intervalRef.current = setInterval(() => {
        let value = handlePosition();
        setPosition({
          top: value.RandomPositionX,
          left: value.RandomPositionY,
        });
      }, delay);
    } else if (buttonPressed === "reset") {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setPosition({
        top: "0px",
        left: "0px",
      });
    } else if (buttonPressed === "pause") {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [buttonPressed]);

  function mouseEvents() {
    const mouseEvent = addEventListener.mouseEvent
    console.log(mouseEvent);
  }
  console.log(mouseEvents);

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
        ></span>
      </div>

      {/*  here we need to show events of mouse  */}
      <div className="score_area">
        <div className="mouse_click">
          <label className="label">Mouse click number</label>
        </div>
        <div className="reaction_time">
          <label className="label">Reaction time</label>
        </div>
      </div>
    </div>
  );
};

export default PlayRedDotGame;
