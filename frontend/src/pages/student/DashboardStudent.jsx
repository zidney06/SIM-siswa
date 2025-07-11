import { Link } from "react-router";
import Navbar from "../../components/Navbar";

export default function DashboardStudent() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-3">
        <h2 className="text-center">
          Selamat datang <i>Student</i>
        </h2>

        <Link
          to="/student/presence"
          className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          Hasil absensi
        </Link>
        <Link
          to="/student/score"
          className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          Daftar nilai
        </Link>
      </div>
    </>
  );
}
