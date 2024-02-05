import React from "react";
import Layout from "./Layout";
import "./Chatbot.css";
import "./Layout.css";
import chatBot from "./chatBot.jpg";

export const Chatbot = () => {
  return (
    <div className="chatbot">
      <div className="botTitle">
        <h1>Chatbot</h1>
        <img className="logo1" src={chatBot} alt="Nothing" />
      </div>
      <div className="inputHolder">
        <input className="input" placeholder="Message Chatbot" />
      </div>
      <button className="Symbol">↑</button>
      <Layout />
    </div>
  );
};
