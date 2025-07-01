import "./App.css";
import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
import Biodata from "./pages/BiodataPage";
import UserManage from "./pages/operator/UserManage";
import ClassManage from "./pages/operator/ClassManage";
import ClassList from "./pages/operator/ClassList";
import UserList from "./pages/operator/UserList";
import StudentPresence from "./pages/teacher/StudentPresence";
import InputScore from "./pages/teacher/InputScore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/biodata" element={<Biodata />} />
        <Route path="/operator/userManage" element={<UserManage />} />
        <Route path="/operator/classManage" element={<ClassManage />} />
        <Route path="/operator/classList" element={<ClassList />} />
        <Route path="/operator/userList" element={<UserList />} />
        <Route path="/teacher/studentPresence" element={<StudentPresence />} />
        <Route path="/teacher/inputScore" element={<InputScore />} />
      </Routes>
    </>
  );
}

export default App;
