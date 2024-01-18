import React from "react";
import Layout from "./Layout";
import "./Communities.css";
import "./Layout.css";

export const Communities = () => {
  return (
    <div className="community">
      <div className="communityTitle">
        <h1>Communities</h1>
      </div>
      <div className="communities">
        <div className="com1">
          <h3 className="com" >SPORTS</h3>
          <h3 className="com">EDUCATION</h3>
        </div>
        <div className="com2">
          <h3 className="com">PARTIES</h3>
          <h3 className="com">IMPORTANT</h3>
        </div>
        <div className="com3">
          <h3 className="com">FESTIVAL</h3>
          <h3 className="com">FAMILY</h3>
        </div>
      </div>
      <Layout />
    </div>
  );
};
