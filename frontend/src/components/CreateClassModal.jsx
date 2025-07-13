export default function CreateClassModal({
  setKelas,
  setRoom,
  hndlWali,
  hndlClick,
  wali,
  room,
  kelas,
  resetValue,
}) {
  const hndlKelasChange = (e) => {
    setKelas(e.target.value);
  };
  const hndlRoomChange = (e) => {
    setRoom(e.target.value);
  };

  // untuk bagian profil nanti akan dibuat di fe ketika akan melakukan request ke be
  return (
    <>
      <div
        className="p-2 border border-2 rounded"
        id="createClass"
        tabIndex="-1"
        aria-labelledby="createClassLabel"
      >
        <div className="">
          <div className="">
            <h1 className=" fs-5" id="createClassLabel">
              Buat data kelas baru
            </h1>
          </div>
          <div className="">
            <div className="my-1">
              <label htmlFor="kelas" className="form-label">
                Nama kelas
              </label>
              <select
                className="form-select"
                onChange={hndlKelasChange}
                value={kelas}
              >
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <label htmlFor="kelas" className="form-label">
                Ruang
              </label>
              <select
                className="form-select"
                onChange={hndlRoomChange}
                value={room}
              >
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
                <option value="G">G</option>
              </select>
            </div>
            <div className="my-1">
              <label htmlFor="wali" className="form-label fs-6">
                Nama wali kelas <i>Sebaiknya mengggunakan nama lengkap</i>
              </label>
              <input
                type="text"
                id="wali"
                className="form-control"
                value={wali}
                onChange={hndlWali}
              />
            </div>
          </div>
          <div
            className="d-flex justify-content-between my-2"
            style={{ width: "100%" }}
          >
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetValue}
            >
              Hapus
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={hndlClick}
            >
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
