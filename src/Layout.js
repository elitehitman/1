// Layout.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="button">
      <div className="buttons">
        <button
          className="btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/Chatbot");
          }}
        >
          Chatbot
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/Events");
          }}
        >
          Events
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/Communities");
          }}
        >
          Communities
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/Calendar");
          }}
        >
          Calendar
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/About");
          }}
        >
          About
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/Social");
          }}
        >
          Social
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/Contact");
          }}
        >
          Contact
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/Rewards");
          }}
        >
          Rewards
        </button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
