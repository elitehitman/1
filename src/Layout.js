// Layout.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const [showIcons, setShowIcons] = useState(false);
  function toggleIcons() {
    setShowIcons(!showIcons);
  }

  return (
    <div className="container">
      <div>
        <button
          className="hamburger"
          onClick={toggleIcons}
          style={{ left: showIcons ? "215px" : "0px" }}
        >
          ☰
        </button>
      </div>
      {showIcons && (
        <div
          className="buttons"
          style={{
            transition: "background-color 2s ease",
          }}
        >
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
      )}

      {children}
    </div>
  );
};

export default Layout;
