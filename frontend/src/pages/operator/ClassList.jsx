import DeleteModal from "../../components/DeleteModal";
import EditClassModal from "../../components/EditClassModal";
import Navbar from "../../components/Navbar";

export default function ClassList() {
  const dummyClass = [
    {
      name: "1-A",
      wali: "Hamzah",
    },
  ];

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
            {dummyClass.map((kelas, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>{kelas.name}</th>
                <th>{kelas.wali}</th>
                <th className="d-flex justify-content-around">
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editClass"
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
      <EditClassModal />
      <DeleteModal />
    </>
  );
}
