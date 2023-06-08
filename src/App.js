import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import GetStarted from "src/pages/GetStarted";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
