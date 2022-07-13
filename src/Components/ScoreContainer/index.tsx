import React from "react";
import "./score.css";

type ScoreContainerProps = {
  score: number;
};

const ScoreContainer = ({ score }: ScoreContainerProps) => {
  return (
    <div className="score container">
      <div className="score-card card">
        <span className="score-header">Score</span>
        <span id="score">{score}</span>
      </div>
    </div>
  );
};

export default ScoreContainer;
