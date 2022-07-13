import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

function App() {
  const [has_game_started, setStarted] = React.useState(false);
  const [is_recording, setIsRecording] = React.useState(false);
  const [is_playback, setIsPlayback] = React.useState(false);

  return (
    <div className="App">
      <Header
        has_game_started={has_game_started}
        setStarted={setStarted}
        is_recording={is_recording}
        setIsRecording={setIsRecording}
        is_playback={is_playback}
        setIsPlayback={setIsPlayback}
      />

      <MainContainer
        has_game_started={has_game_started}
        is_recording={is_recording}
        is_playback={is_playback}
        setIsPlayback={setIsPlayback}
      />
    </div>
  );
}

export default App;
