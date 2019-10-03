import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("Loading...");
  const [smsg, setSMsg] = useState("Loading serverless message...");

  useEffect(() => {
    getServerMsg();
    getServerlessMsg();
  });

  const getServerMsg = () =>
    axios
      .get("https://fercodes-herokutest.herokuapp.com/test")
      .then(res => setMsg(res.data))
      .catch(err => {
        console.log(err);
        return "Error: Couldn't get message from server.";
      });

  const getServerlessMsg = () =>
    axios
      .get("https://fercodes.netlify.com/.netlify/functions/serverless/hello")
      .then(res => setSMsg(res.data))
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
        <p>From serverless function:</p>
        <p>{smsg}</p>
      </header>
    </div>
  );
}

export default App;
