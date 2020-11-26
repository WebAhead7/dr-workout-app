import React from "react";
import "../pages/styles/circylecounter.css";

function CircyleCounter(props) {
  return (
    <div className="timer-container">
      {props.title}
      <div className="timer-display">
        <h1>{props.count}</h1>
      </div>
      <div className="timer-loading"></div>
    </div>
  );
}

export default CircyleCounter;
