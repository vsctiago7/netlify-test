import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const msg = axios
    .get("https://fercodes-herokutest.herokuapp.com/test")
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      return "Error: Couldn't get message from server.";
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a netlify test website.</p>
        <p>Message from server:</p>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
