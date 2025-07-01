import Navbar from "../../components/Navbar";

export default function StudentPresence() {
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
    <div className="container-fluid p-0 green">
      <Navbar />
      <div className="container p-2">
        <h3 className="text-center">Absensi siswa</h3>
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
                {dummyStudent.map((student, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <th>{student.name}</th>
                    <th className="d-flex justify-content-around">
                      <label htmlFor="status">Hadir</label>
                      <input type="radio" id="status" name={`status-${i}`} />
                      <label htmlFor="status">Izin</label>
                      <input type="radio" id="status" name={`status-${i}`} />
                      <label htmlFor="status">Alpha</label>
                      <input type="radio" id="status" name={`status-${i}`} />
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
