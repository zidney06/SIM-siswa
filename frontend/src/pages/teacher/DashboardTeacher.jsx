import Navbar from "../../components/Navbar";
import { Link } from "react-router";

export default function DashboardTeacher() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-3">
        <h2 className="text-center">
          Selamat datang <i>Teacher</i>
        </h2>
        <Link
          to="/teacher/studentPresence"
          className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          Absensi siswa
        </Link>
        <Link
          to="/teacher/inputScore"
          className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          Input nilai
        </Link>
      </div>
    </>
  );
}
