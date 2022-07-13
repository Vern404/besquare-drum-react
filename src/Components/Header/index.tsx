import React from "react";
import "./header.css";

type HeaderProps = {
  has_game_started: boolean;
  setStarted: (value: boolean) => void;
};

const Header = ({ has_game_started, setStarted }: HeaderProps) => {
  return (
    <nav>
      <span className="branding">Drum App</span>
      <div className="menu-buttons">
        <button onClick={() => setStarted(!has_game_started)}>
          {has_game_started ? "Stop Game" : "Start Game"}
        </button>
        <button>Record</button>
        <button>Playback</button>
      </div>
    </nav>
  );
};

export default Header;
