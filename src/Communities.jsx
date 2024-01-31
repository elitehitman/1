import React from "react";
import Layout from "./Layout";
import "./Communities.css";
import "./Layout.css";
import { useNavigate } from "react-router-dom";

export const Communities = () => {
  const navigate = useNavigate();

  return (
    <div className="community">
      <div className="communityTitle">
        <h1>Communities</h1>
      </div>
      <div className="communities">
        <div className="com1">
          <button
            className="com"
            onClick={() => {
              navigate("/Sports");
            }}
          >
            SPORTS
          </button>
          <button className="com">EDUCATION</button>
        </div>
        <div className="com2">
          <button className="com">PARTIES</button>
          <button className="com">IMPORTANT</button>
        </div>
        <div className="com3">
          <button className="com">FESTIVAL</button>
          <button className="com">FAMILY</button>
        </div>
      </div>
      <Layout />
    </div>
  );
};
