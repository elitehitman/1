import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chatbot } from "./Chatbot";
import { Home } from "./Home";
import { Events } from "./Events";
import { Communities } from "./Communities";
import "./Layout.css";
import "./Home.css";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";
import { CustomCalendar } from "./Calendar";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Communities" element={<Communities />} />
          <Route path="/Calendar" element={<CustomCalendar />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Chatbot" element={<Chatbot />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
