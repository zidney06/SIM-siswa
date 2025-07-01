import Navbar from "../components/Navbar";
import { Link } from "react-router";
import DashboardOperator from "./operator/DashboardOperator";
import DashboardTeacher from "./teacher/DashboardTeacher";
import DashboardStudent from "./student/DashboardStudent";

export default function Dashboard() {
  const role = "student";

  if (role == "operator") {
    return (
      <>
        <DashboardOperator />
      </>
    );
  } else if (role == "teacher") {
    return (
      <>
        <DashboardTeacher />
      </>
    );
  } else if (role == "student") {
    return (
      <>
        <DashboardStudent />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <h3>role tidak diketahui!</h3>
      <Link to="/">Kembali ke login</Link>
    </>
  );
}
