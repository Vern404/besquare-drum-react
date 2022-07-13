import React from "react";
import ScoreContainer from "../ScoreContainer";
import "./main-container.css";
import SequenceContainer from "../SequenceContainer";
import TargetContainer from "../TargetContainer";
import { KeyConfig } from "../../Helpers/sounds";

const generateTargetKeys = () => {
  const keys: string[] = [];
  while (keys.length < 50) {
    keys.push("a", "s", "d", "f", "g");
  }
  return keys;
};

const target_keys = generateTargetKeys();

type MainContainerProps = {
  has_game_started: boolean;
};

const MainContainer = ({ has_game_started }: MainContainerProps) => {
  // const [target_keys, setTargetKeys] = React.useState(keys.slice(0, 4));
  const [active_index, setActiveIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);

  // const updateTargetKeys = () => {
  //   const empty_elements = active_index < 3 ? 3 - active_index : 0;
  //   setTargetKeys(keys.slice(active_index, active_index + 7 - empty_elements));
  // };
  React.useEffect(() => {
    if (active_index + 1 > target_keys.length) {
      setTimeout(() => {
        alert("Game is complete!");
      });
    }
  }, [active_index]);
  const onKeyMatch = (keyConfig: KeyConfig) => {
    const target_key = target_keys[active_index];

    if (has_game_started) {
      if (target_key === keyConfig.key) {
        setScore(score + 1);
        setActiveIndex(active_index + 1);
      } else {
        setScore(score - 1);
      }
    }
  };
  return (
    <div className="main-container">
      <ScoreContainer score={score} />
      <SequenceContainer
        active_index={active_index}
        target_keys={target_keys}
      />
      <TargetContainer onKeyMatch={onKeyMatch} />
    </div>
  );
};

export default MainContainer;
