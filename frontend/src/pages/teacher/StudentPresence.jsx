import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getFetch, postFetch } from "../../utils/fetch";

export default function StudentPresence() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  const [studentPresence, setStudentPresence] = useState([]);

  useEffect(() => {
    getFetch("/api/class/classList").then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        return;
      }
      setClasses(res.data.data);
    });
  }, []);

  const hndlSelectedClass = (e) => {
    setSelectedClass(e.target.value);
  };
  const hndlConfirmSelectedClass = () => {
    if (!selectedClass) {
      alert("Pilih kelas dulu");
      return;
    }
    getFetch(`/api/class/${selectedClass}`).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        return;
      }

      const presensi = res.data.data.students.map((item) => {
        return {
          id: item._id,
          presence: "",
        };
      });
      setStudentPresence(presensi);
      setStudents(res.data.data.students);
    });
  };
  const hndlStatusChange = (e, id) => {
    setStudentPresence(
      studentPresence.map((item) => {
        if (item.id === id) {
          item.presence = e.target.value;
        }
        return item;
      })
    );
  };
  const hndlConfirmPresence = () => {
    for (let student of studentPresence) {
      if (!student.presence) {
        alert("Ada yang belum di checklist!");
        return;
      }
    }

    postFetch("/api/student/presence", studentPresence).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);
        return;
      }
      console.log(res.data.data);
      alert(res.data.msg);
    });

    setStudentPresence(
      students.map((item) => {
        return {
          id: item._id,
          presence: "",
        };
      })
    );
  };

  return (
    <div className="container-fluid p-0 green">
      <Navbar />
      <div className="container p-2">
        <h3 className="text-center">Absensi siswa</h3>
        <div className="border p-1">
          <label htmlFor="kelas" className="form-label">
            Pilih kelas
          </label>
          <select
            name="kelas"
            id="kelas"
            className="form-select"
            onChange={hndlSelectedClass}
          >
            <option value=""></option>
            {classes.map((kelas, i) => (
              <option value={kelas._id} key={i}>
                {kelas.name}
              </option>
            ))}
          </select>
          <button
            className="btn btn-primary my-2"
            onClick={hndlConfirmSelectedClass}
          >
            Konfirmasi
          </button>
        </div>
        {students.length > 0 ? (
          <div className="border my-2 p-2">
            <h5>Daftar siswa:</h5>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Nama</th>
                  <th scope="col" className="text-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <th>{student.name}</th>
                    <th className="d-flex justify-content-around">
                      <div>
                        <input
                          type="radio"
                          id="status"
                          name={`status-${i}`}
                          value="hadir"
                          className="form-check-input"
                          checked={studentPresence[i].presence == "hadir"}
                          onChange={(e) => hndlStatusChange(e, student._id)}
                        />
                        <label
                          htmlFor="status"
                          className="form-check-label ms-2"
                        >
                          Hadir
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="status"
                          name={`status-${i}`}
                          value="izin"
                          className="form-check-input"
                          checked={studentPresence[i].presence == "izin"}
                          onChange={(e) => hndlStatusChange(e, student._id)}
                        />
                        <label
                          htmlFor="status"
                          className="form-check-label ms-2"
                        >
                          Izin
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="status"
                          name={`status-${i}`}
                          value="alpha"
                          className="form-check-input"
                          checked={studentPresence[i].presence == "alpha"}
                          onChange={(e) => hndlStatusChange(e, student._id)}
                        />
                        <label
                          htmlFor="status"
                          className="form-check-label ms-2"
                        >
                          Alpha
                        </label>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={hndlConfirmPresence}>
              Konfirmasi
            </button>
          </div>
        ) : (
          <p className="p-3 text-center">Tidak ada data</p>
        )}
      </div>
    </div>
  );
}
