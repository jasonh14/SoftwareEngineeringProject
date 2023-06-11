import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import GetStarted from "src/pages/GetStarted";
import SignUp from "./pages/SignUp";
import Teacher from "./pages/Teacher";
import History from "src/pages/History";
import Book from "./pages/Book";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherSignup from "./pages/TeacherSignup";
import TeacherTerms from "./pages/TeacherTerms";
import TeacherHome from "./pages/TeacherHome";
import TeacherViewAppointment from "./pages/TeacherViewAppointment";
import TeacherProfile from "./pages/TeacherProfile";
import HomeTeacher from "./pages/HomeTeacher";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/history" element={<History />} />
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/teacher/signup" element={<TeacherSignup />} />
          <Route path="/teacher/terms" element={<TeacherTerms />} />
          <Route path="/teacher/home" element={<TeacherHome />} />
          <Route
            path="/teacher/view-appointment"
            element={<TeacherViewAppointment />}
          />
          <Route path="/teacher/profile" element={<TeacherProfile />} />
          <Route path="/teachers/:uid" element={<Book />} />
          <Route path="/teacher/home" element={<HomeTeacher />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
