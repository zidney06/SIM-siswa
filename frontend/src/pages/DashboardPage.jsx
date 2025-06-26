import Navbar from "../components/Navbar";
import { Link } from "react-router";

export default function Dashboard() {
  const role = "teacher";

  if (role == "operator") {
    return (
      <>
        <Navbar />
        <div className="container-fluid p-0">
          <h2 className="text-center">
            Selamat datang <i>nama user</i>
          </h2>
          <Link
            to="/"
            className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
            style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
          >
            Buat/ tambah data siswa baru
          </Link>
          <Link
            to="/"
            className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
            style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
          >
            Buat/ tambah data guru baru
          </Link>
          <Link
            to="/"
            className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
            style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
          >
            Buat/ tambah data kelas baru
          </Link>
        </div>
      </>
    );
  } else if (role == "teacher") {
    return (
      <>
        <Navbar />
        <div className="container-fluid p-0">
          <h2 className="text-center">
            Selamat datang <i>nama user</i>
          </h2>
          <Link
            className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
            style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
          >
            Absensi siswa
          </Link>
          <Link
            className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
            style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
          >
            Input nilai
          </Link>
        </div>
      </>
    );
  } else if (role == "student") {
    return (
      <>
        <Navbar />
        <div className="container-fluid p-0">
          <h2 className="text-center">
            Selamat datang <i>nama user</i>
          </h2>
          <div
            className="mx-auto mb-3"
            style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
          >
            <h4 className="text-center">kehadiran</h4>
            <ul className="list-group">
              <li className="list-group-item">a</li>
              <li className="list-group-item">s</li>
              <li className="list-group-item">c</li>
            </ul>
          </div>
          <div
            className="mx-auto mb-3"
            style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
          >
            <h4 className="text-center">nilai</h4>
            <ul className="list-group">
              <li className="list-group-item">d</li>
            </ul>
          </div>
        </div>
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
