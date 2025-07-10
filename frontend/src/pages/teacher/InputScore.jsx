import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getFetch, postFetch } from "../../utils/fetch";
import { useNavigate } from "react-router";

export default function InputScore() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [examType, setExapType] = useState("uts");
  const [semester, setSemester] = useState(1);

  const navigate = useNavigate();

  const [studentScore, setStudentScore] = useState([]);
  // ngatur pas ape dikirim neng server

  useEffect(() => {
    getFetch("/api/class/classList").then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        if (res.status == 401) {
          navigate("/");
        }

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

        if (res.status == 401) {
          navigate("/");
        }

        return;
      }
      setStudents(res.data.data.students);
      setStudentScore(
        res.data.data.students.map((item) => {
          return {
            id: item._id,
            bIndo: "",
            MTK: "",
            bInggris: "",
            IPA: "",
            IPS: "",
          };
        })
      );
    });
  };
  const hndlExamType = (e) => {
    setExapType(e.target.value);
  };
  const hndlSemester = (e) => {
    setSemester(e.target.value);
  };
  const hndlBIndoScore = (e, i) => {
    let value = e.target.value;
    if (value < 0) {
      alert("min 0");
      value = 0;
    } else if (value > 100) {
      alert("max 100");
      value = 100;
    }
    setStudentScore(
      studentScore.map((item, idx) => {
        if (idx == i) {
          item.bIndo = value;
          item.MTK = studentScore[i].MTK;
          item.bInggris = studentScore[i].bInggris;
          item.IPA = studentScore[i].IPA;
          item.IPS = studentScore[i].IPS;
        }
        return item;
      })
    );
  };
  const hndlBIngrrisScore = (e, i) => {
    let value = e.target.value;
    if (value < 0) {
      alert("min 0");
      value = 0;
    } else if (value > 100) {
      alert("max 100");
      value = 100;
    }
    setStudentScore(
      studentScore.map((item, idx) => {
        if (idx == i) {
          item.bIndo = studentScore[i].bIndo;
          item.MTK = studentScore[i].MTK;
          item.bInggris = value;
          item.IPA = studentScore[i].IPA;
          item.IPS = studentScore[i].IPS;
        }
        return item;
      })
    );
  };
  const hndlMTKScore = (e, i) => {
    let value = e.target.value;
    if (value < 0) {
      alert("min 0");
      value = 0;
    } else if (value > 100) {
      alert("max 100");
      value = 100;
    }
    setStudentScore(
      studentScore.map((item, idx) => {
        if (idx == i) {
          item.bIndo = studentScore[i].bIndo;
          item.MTK = value;
          item.bInggris = studentScore[i].bInggris;
          item.IPA = studentScore[i].IPA;
          item.IPS = studentScore[i].IPS;
        }
        return item;
      })
    );
  };
  const hndlIPSScore = (e, i) => {
    let value = e.target.value;
    if (value < 0) {
      alert("min 0");
      value = 0;
    } else if (value > 100) {
      alert("max 100");
      value = 100;
    }
    setStudentScore(
      studentScore.map((item, idx) => {
        if (idx == i) {
          item.bIndo = studentScore[i].bIndo;
          item.MTK = studentScore[i].MTK;
          item.bInggris = studentScore[i].bInggris;
          item.IPA = studentScore[i].IPA;
          item.IPS = value;
        }
        return item;
      })
    );
  };
  const hndlIPAScore = (e, i) => {
    let value = e.target.value;
    if (value < 0) {
      alert("min 0");
      value = 0;
    } else if (value > 100) {
      alert("max 100");
      value = 100;
    }
    setStudentScore(
      studentScore.map((item, idx) => {
        if (idx == i) {
          item.bIndo = studentScore[i].bIndo;
          item.MTK = studentScore[i].MTK;
          item.bInggris = studentScore[i].bInggris;
          item.IPA = value;
          item.IPS = studentScore[i].IPS;
        }
        return item;
      })
    );
  };
  const hndlConfirm = () => {
    for (let item of studentScore) {
      if (
        !item.IPS ||
        !item.IPA ||
        !item.MTK ||
        !item.bIndo ||
        !item.bInggris
      ) {
        alert("Harap isi semua field yang masih kososng atau bernilai 0!");
        return;
      }
    }
    console.log({ type: examType, semester: semester, data: studentScore });
    postFetch("/api/student/score", {
      semester: semester,
      type: examType,
      data: studentScore,
    }).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        if (res.status == 401) {
          navigate("/");
        }
        return;
      }
      console.log(res.data.data);
      alert(res.data.msg);
      resetValue();
    });
  };
  const resetValue = () => {
    setStudents([]);
    setStudentScore([]);
  };

  console.log(studentScore);

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

            <div className="my-2">
              <label htmlFor="semester">semester</label>
              <select
                name="semester"
                id="semester"
                className="form-select"
                onChange={hndlSemester}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
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
                        onChange={(e) => hndlBIndoScore(e, i)}
                        value={studentScore[i].bIndo}
                        min={0}
                        max={100}
                      />
                    </th>
                    <th className="">
                      <label htmlFor={`BIngrris-${i}`}>Nilai</label>
                      <input
                        type="number"
                        id={`BIngrris-${i}`}
                        name={`status-${i}`}
                        className="form-control"
                        onChange={(e) => hndlBIngrrisScore(e, i)}
                        value={studentScore[i].bInggris}
                        min={0}
                        max={100}
                      />
                    </th>
                    <th className="">
                      <label htmlFor={`MTK-${i}`}>Nilai</label>
                      <input
                        type="number"
                        id={`MTK-${i}`}
                        name={`status-${i}`}
                        className="form-control"
                        onChange={(e) => hndlMTKScore(e, i)}
                        value={studentScore[i].MTK}
                        min={0}
                        max={100}
                      />
                    </th>
                    <th className="">
                      <label htmlFor={`IPA-${i}`}>Nilai</label>
                      <input
                        type="number"
                        id={`IPA-${i}`}
                        name={`status-${i}`}
                        className="form-control"
                        onChange={(e) => hndlIPAScore(e, i)}
                        value={studentScore[i].IPA}
                        min={0}
                        max={100}
                      />
                    </th>
                    <th className="">
                      <label htmlFor={`IPS-${i}`}>Nilai</label>
                      <input
                        type="number"
                        id={`IPS-${i}`}
                        name={`status-${i}`}
                        className="form-control"
                        onChange={(e) => hndlIPSScore(e, i)}
                        value={studentScore[i].IPS}
                        min={0}
                        max={100}
                      />
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={hndlConfirm}>
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
