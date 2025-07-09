import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getFetch } from "../../utils/fetch";

export default function InputScore() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [examType, setExapType] = useState("uts");

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
    console.log("oi");
    getFetch(`/api/class/${selectedClass}`).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        return;
      }
      setStudents(res.data.data.students);
    });
  };
  const hndlExamType = (e) => {
    setExapType(e.target.value);
  };

  console.log(classes, students, selectedClass, examType);

  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="container p-2">
        <h3 className="text-center">Input nilai</h3>
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

            <div className="my-2">
              <label htmlFor="tipe">Tipe nilai</label>
              <select
                name="tipe"
                id="tipe"
                className="form-select"
                onChange={hndlExamType}
              >
                <option value="uts">UTS</option>
                <option value="uas">UAS</option>
              </select>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Nama</th>
                  <th scope="col">B Indo</th>
                  <th scope="col">B Ingrris</th>
                  <th scope="col">MTK</th>
                  <th scope="col">IPA</th>
                  <th scope="col">IPS</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <th>{student.name}</th>
                    <th className="">
                      <label htmlFor={`BIndo-${i}`}>Nilai</label>
                      <input
                        type="number"
                        id={`BIndo-${i}`}
                        name={`status-${i}`}
                        className="form-control"
                      />
                    </th>
                    <th className="">
                      <label htmlFor={`BIngrris-${i}`}>Nilai</label>
                      <input
                        type="number"
                        id={`BIngrris-${i}`}
                        name={`status-${i}`}
                        className="form-control"
                      />
                    </th>
                    <th className="">
                      <label htmlFor={`MTK-${i}`}>Nilai</label>
                      <input
                        type="number"
                        id={`MTK-${i}`}
                        name={`status-${i}`}
                        className="form-control"
                      />
                    </th>
                    <th className="">
                      <label htmlFor={`IPA-${i}`}>Nilai</label>
                      <input
                        type="number"
                        id={`IPA-${i}`}
                        name={`status-${i}`}
                        className="form-control"
                      />
                    </th>
                    <th className="">
                      <label htmlFor={`IPS-${i}`}>Nilai</label>
                      <input
                        type="number"
                        id={`IPS-${i}`}
                        name={`status-${i}`}
                        className="form-control"
                      />
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-primary">Konfirmasi</button>
          </div>
        ) : (
          <p className="p-3 text-center">Tidak ada data</p>
        )}
      </div>
    </div>
  );
}
