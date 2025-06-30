import { useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import EditUserModal from "../../components/EditUserModal";
import Navbar from "../../components/Navbar";

export default function UserList() {
  const [page, setPage] = useState(1);

  const dummyUsers = [
    {
      username: "Bakso",
      password: "bakso123",
      role: "student",
      name: "Dikas",
      address: "Klepek",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      placeAndDateOfBirth: "Kelepek 1999",
      gender: true,
    },
  ];

  return (
    <>
      <div className="container-fluid p-0">
        <Navbar />
        <h1>Daftar user tersedia</h1>
        <div
          className="d-flex justify-content-between px-1"
          style={{ width: 150 }}
        >
          <button className="btn btn-primary">prev</button>
          <p className="my-auto fs-5">{page}</p>
          <button className="btn btn-primary">next</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Nama</th>
              <th scope="col">Alamat</th>
              <th scope="col">username</th>
              <th scope="col">password</th>
              <th scope="col">gender</th>
              <th scope="col">role</th>
              <th scope="col" className="text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>
                  <img src={user.image} style={{ width: 100, height: 125 }} />
                </th>
                <th>{user.name}</th>
                <th>{user.address}</th>
                <th>{user.username}</th>
                <th>{user.password}</th>
                <th>{user.gender ? "Laki-laki" : "Perempuan"}</th>
                <th>{user.role}</th>
                <th className="" style={{ height: "100%" }}>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#edit"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#delete"
                  >
                    Hapus
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Edit user modal */}
      <EditUserModal />
      {/* Delete user */}
      <DeleteModal />
    </>
  );
}
