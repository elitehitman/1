import "./CustomCalendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Layout from "./Layout";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const locales = {
  "en-IND": require("date-fns/locale/en-IN"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const events = [];

export const CustomCalendar = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setallEvents] = useState(events);
  const [showEventAdder, setShowEventAdder] = useState(false);
  const [addTime, setAddTime] = useState("");

  function handleAddEvent() {
    setallEvents([...allEvents, newEvent]);
  }

  function toggleEventAdder() {
    setShowEventAdder(!showEventAdder);
  }

  return (
    <div>
      <div className="CalTitle">
        <h1>Calendar</h1>
        <h2>Add New Event</h2>
        <div className="toggleEvent">
          <button className="add" onClick={toggleEventAdder}>
            +
          </button>
        </div>
        <div className="timeSet">
          {" "}
          <TimePicker onChange={setAddTime} value={addTime} />
        </div>
        {showEventAdder && (
          <div className="EventAdder">
            <input
              className="EventTitle"
              type="text"
              placeholder="Add Title"
              style={{ marginRight: "10px" }}
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <DatePicker
              className="Start"
              placeholderText="Start Date"
              style={{ marginRight: "10px" }}
              selected={newEvent.start}
              onChange={(start) => {
                setNewEvent({ ...newEvent, start });
              }}
            />
            <DatePicker
              className="End"
              placeholderText="End Date"
              selected={newEvent.end}
              onChange={(end) => {
                setNewEvent({ ...newEvent, end });
              }}
            />
            <button
              className="AddEvent"
              style={{ marginTop: "10px" }}
              onClick={handleAddEvent}
            >
              Add Event
            </button>
          </div>
        )}
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 550, margin: "50px" }}
      />
      <Layout />
    </div>
  );
};
