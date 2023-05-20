import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import GetStarted from "src/pages/GetStarted";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
