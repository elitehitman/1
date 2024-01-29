import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomCalendar } from "./Calendar";
import "./CustomCalendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import Layout from "./Layout";

export const Events = () => {
  //   const navigate = useNavigate();
  //   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  //   const [allEvents, setallEvents] = useState(events);

  //   function handleAddEvent() {
  //     setallEvents([...allEvents, newEvent]);
  //   }
  return (
    <div className="Events">
      <div className="Events">
        <h1>Events</h1>
        <h2>Add New Event</h2>
        <div>
          <input
            type="text"
            placeholder="Add Title"
            style={{ width: "20%", marginRight: "10px" }}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...setNewEvent, title: e.target.value })
            }
          />
          <DatePicker
            placeholderText="Start Date"
            style={{ marginRight: "10px" }}
            selected={newEvent.start}
            onChange={(start) => {
              setNewEvent({ ...newEvent, start });
            }}
          />
          <DatePicker
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => {
              setNewEvent({ ...newEvent, end });
            }}
          />
          <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};
