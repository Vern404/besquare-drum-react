import React from "react";
import "./header.css";

type HeaderProps = {
  has_game_started: boolean;
  setStarted: (value: boolean) => void;
  is_recording: boolean;
  setIsRecording: (value: boolean) => void;
  is_playback: boolean;
  setIsPlayback: (value: boolean) => void;
};

const Header = ({
  has_game_started,
  setStarted,
  is_recording,
  setIsRecording,
  is_playback,
  setIsPlayback,
}: HeaderProps) => {
  return (
    <nav>
      <span className="branding">Drum App</span>
      <div className="menu-buttons">
        <button onClick={() => setStarted(!has_game_started)}>
          {has_game_started ? "Stop Game" : "Start Game"}
        </button>
        <button onClick={() => setIsRecording(!is_recording)}>
          {is_recording ? "Stop" : "Record"}
        </button>
        <button
          disabled={is_playback}
          onClick={() => setIsPlayback(!is_playback)}
        >
          Playback
        </button>
      </div>
    </nav>
  );
};

export default Header;
