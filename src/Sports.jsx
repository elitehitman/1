import React, { useState } from "react";
import Layout from "./Layout";

export const Sports = () => {
  const [newGroupName, setNewGroupName] = useState("");
  const [showAddGroup, setShowAddGroup] = useState(false);
  const [sports, setSports] = useState([{ groupName: "", members: 0 }]);

  const handleAddGroup = () => {
    if (newGroupName.trim() !== "") {
      const newGroup = { groupName: newGroupName, members: 0 };
      setSports([...sports, newGroup]);
      setNewGroupName("");
      setShowAddGroup(false);
    }
  };

  return (
    <div>
      <div className="communityTitle">
        <h1 className="pageTitle">SPORTS</h1>
      </div>
      <div className="groupContainer">
        <div className="groups">
          <input placeholder="Search for Communities" />
          <button
            className="add1"
            onClick={() => setShowAddGroup(!showAddGroup)}
          >
            +
          </button>
          {sports.map((group, index) => (
            <button className="group" key={index}>
              {group.groupName}
            </button>
          ))}
          {showAddGroup && (
            <div>
              <input
                className="inp"
                placeholder="Enter group name"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
              />
              <button className="addGrp" onClick={handleAddGroup}>
                Add
              </button>
            </div>
          )}
        </div>
      </div>
      <Layout />
    </div>
  );
};
