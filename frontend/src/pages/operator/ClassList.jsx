import { useState, useEffect } from "react";
import DeleteModal from "../../components/DeleteModal";
import EditClassModal from "../../components/EditClassModal";
import Navbar from "../../components/Navbar";
import { getFetch } from "../../utils/fetch";

export default function ClassList() {
  const [classes, setClasses] = useState([]);
  const [wali, setWali] = useState("");
  const [kelas, setKelas] = useState("");
  const [room, setRoom] = useState("");
  const [classId, setClassId] = useState("");

  useEffect(() => {
    getFetch("/api/class/classList").then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        return;
      }
      setClasses(res.data.data);
    });
  }, []);

  const hndlEditClick = (className, wali, id) => {
    const parts = className.split("-");

    setKelas(parts[0]);
    setRoom(parts[1]);
    setWali(wali);
    setClassId(id);
  };
  const hndlDeleteClick = (id) => {
    setClassId(id);
  };

  return (
    <>
      <div className="container-fluid p-0 red">
        <Navbar />
        <h1>Daftar kelas tersedia</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama kelas</th>
              <th scope="col">Wali kelas</th>
              <th scope="col" className="text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {classes.map((kelas, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>{kelas.name}</th>
                <th>{kelas.wali}</th>
                <th className="d-flex justify-content-around">
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editClass"
                    onClick={() =>
                      hndlEditClick(kelas.name, kelas.wali, kelas._id)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#delete"
                    onClick={() => hndlDeleteClick(kelas._id)}
                  >
                    Hapus
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditClassModal
        kelas={kelas}
        setKelas={setKelas}
        setRoom={setRoom}
        room={room}
        wali={wali}
        setWali={setWali}
        classId={classId}
        classes={classes}
        setClasses={setClasses}
      />
      <DeleteModal
        classId={classId}
        classes={classes}
        setClasses={setClasses}
      />
    </>
  );
}
