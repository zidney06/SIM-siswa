import { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router";

export default function DashboardOperator() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-3">
        <h2 className="text-center">
          Selamat datang <i>Operator</i>
        </h2>
        <Link
          to="/operator/classManage"
          className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          Buat/ tambah data kelas baru
        </Link>
        <Link
          to="/operator/userManage"
          className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          Buat/ tambah data user baru
        </Link>
        <Link
          to="/operator/classList "
          className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          Lihat daftar kelas
        </Link>
        <Link
          to="/operator/userList"
          className="btn btn-outline-dark d-block my-3 text-decoration-none fs-4 mx-auto"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          Lihat daftar user
        </Link>
      </div>
    </>
  );
}
