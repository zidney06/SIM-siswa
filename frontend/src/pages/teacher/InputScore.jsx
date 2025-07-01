import Navbar from "../../components/Navbar";

export default function InputScore() {
  const dummyClass = [
    {
      name: "1-A",
      wali: "Hamzah",
      students: ["01", "02"],
    },
    {
      name: "2-A",
      wali: "Hasan",
      students: ["03", "04"],
    },
  ];

  // data daftar siswa dari kelas yang dipilih awaknya adalah kosong, jika teacher sudah memilih kelas
  // maka akan melakukan request untuk mengambil data siswa dari id kelas yang dipilih
  // ini berarti, pada saat awal memuat halaman perlu melakukan req ke daftar kelas yang tersedia
  const dummyStudent = [
    {
      name: "dimas",
    },
    {
      name: "dimas",
    },
    {
      name: "dimas",
    },
    {
      name: "dimas",
    },
  ];
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="container p-2">
        <h3 className="text-center">Input nilai</h3>
        <div className="border p-1">
          <label htmlFor="kelas" className="form-label">
            Pilih kelas
          </label>

          <select name="kelas" id="kelas" className="form-select">
            {dummyClass.map((kelas, i) => (
              <option value={kelas.name} key={i}>
                {kelas.name}
              </option>
            ))}
          </select>

          <button className="btn btn-primary my-2">Konfirmasi</button>
        </div>
        {dummyStudent.length > 0 && (
          <div className="border my-2 p-2">
            <h5>
              Daftar siswa dengan kelas <i>{"kelas yang dipilih"}</i>
            </h5>

            <div className="my-2">
              <label htmlFor="tipe">Tipe nilai</label>
              <select name="tipe" id="tipe" className="form-select">
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
                {dummyStudent.map((student, i) => (
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
          </div>
        )}
        <button className="btn btn-primary">Konfirmasi</button>
      </div>
    </div>
  );
}
