import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chatbot } from "./Chatbot";
import { Home } from "./Home";
import { Events } from "./Events";
import Calendar from "react-calendar";
import { Communities } from "./Communities";
import "./Layout.css";
import "./Home.css";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Communities" element={<Communities />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Chatbot" element={<Chatbot />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
