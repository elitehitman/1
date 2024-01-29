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
import { useNavigate } from "react-router-dom";

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
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2024, 0, 29),
    end: new Date(2024, 0, 29),
  },
  {
    title: "Vacation",
    start: new Date(2024, 1, 25),
    end: new Date(2024, 1, 26),
  },
  {
    title: "Conference",
    start: new Date(2024, 1, 12),
    end: new Date(2024, 1, 12),
  },
];

export const CustomCalendar = () => {
  const navigate = useNavigate();
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setallEvents] = useState(events);

  function handleAddEvent() {
    setallEvents([...allEvents, newEvent]);
  }

  return (
    <div>
      <div class="CalTitle">
        <h1>Calendar</h1>
        {/* <h2>Add New Event</h2>
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
        </div> */}
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
