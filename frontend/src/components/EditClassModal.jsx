import { useEffect, useState } from "react";
import { putfetch } from "../utils/fetch";

export default function EditClassModal({
  wali,
  setWali,
  kelas,
  setKelas,
  room,
  setRoom,
  classId,
  classes,
  setClasses,
}) {
  const hndlKelasChange = (e) => {
    setKelas(e.target.value);
  };
  const hndlRoomChange = (e) => {
    setRoom(e.target.value);
  };
  const hndlWali = (e) => {
    setWali(e.target.value);
  };
  const hndlClick = () => {
    console.log("ready");
    putfetch(`/api/class/${classId}`, {
      name: `${kelas}-${room}`,
      wali: wali,
    }).then((res) => {
      if (!res.success) {
        alert(res.respones.data.msg);

        return;
      }
      console.log(res.data.data.name);
      const newClasses = classes.map((item) => {
        if (item.name == res.data.data.name) {
          return res.data.data;
        }
        return item;
      });
      setClasses(newClasses);
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id="editClass"
        tabIndex="-1"
        aria-labelledby="editClassLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editClassLabel">
                Edit kelas
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body green">
              <div className="my-1">
                <label htmlFor="kelas" className="form-label">
                  Nama kelas
                </label>
                <select
                  className="form-select"
                  onChange={hndlKelasChange}
                  value={kelas}
                >
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
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </select>
              </div>
              <div className="my-1">
                <label htmlFor="wali" className="form-label">
                  Wali
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={hndlClick}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
