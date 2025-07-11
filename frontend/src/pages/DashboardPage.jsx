import Navbar from "../components/Navbar";
import { Link } from "react-router";
import DashboardOperator from "./operator/DashboardOperator";
import DashboardTeacher from "./teacher/DashboardTeacher";
import DashboardStudent from "./student/DashboardStudent";
import { useContext } from "react";
import { MyContext } from "../store/store";

export default function Dashboard() {
  const store = useContext(MyContext);

  if (store.value.role == "operator") {
    return (
      <>
        <DashboardOperator />
      </>
    );
  } else if (store.value.role == "teacher") {
    return (
      <>
        <DashboardTeacher />
      </>
    );
  } else if (store.value.role == "student") {
    return (
      <>
        <DashboardStudent />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <h3>Role tidak diketahui!</h3>
      <Link to="/">Kembali ke login</Link>
    </>
  );
}
