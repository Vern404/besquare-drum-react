import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

function App() {
  const [has_game_started, setStarted] = React.useState(false);
  console.log("has_game_started", has_game_started);

  return (
    <div className="App">
      <Header has_game_started={has_game_started} setStarted={setStarted} />
      <MainContainer has_game_started={has_game_started} />
    </div>
  );
}

export default App;
