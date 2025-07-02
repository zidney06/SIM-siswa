import { useState } from "react";

export default function CreateStudentModal() {
  const [isStudent, setIsStudent] = useState(false);

  const hndlStatusChange = (e) => {
    console.log(e.target.value);

    if (e.target.value == "student") {
      setIsStudent(true);
    } else {
      setIsStudent(false);
    }
  };

  // untuk bagian profil nanti akan dibuat di fe ketika akan melakukan request ke usermanage maka akan mengambil daftar kelas yang sudah dibuat
  return (
    <>
      <div className="" id="create" tabIndex="-1" aria-labelledby="createLabel">
        <div className="border p-2">
          <div className="p-2">
            <h1 className=" fs-5" id="createLabel">
              Buat data baru
            </h1>
          </div>
          <div className="border p-2">
            <div className="my-1">
              <label htmlFor="name" className="form-label">
                Nama
              </label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="my-1">
              <label htmlFor="address" className="form-label">
                Alamat
              </label>
              <input type="text" id="address" className="form-control" />
            </div>
            <div className="my-1">
              <label htmlFor="placeAndDateOfBirth" className="form-label">
                Tempat tanggal lahir
              </label>
              <input
                type="text"
                id="placeAndDateOfBirth"
                className="form-control"
              />
            </div>
            <div>
              <p>Gender?</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="laki-laki"
                />
                <label className="form-check-label" htmlFor="laki-laki">
                  Laki-laki
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="perempuan"
                />
                <label className="form-check-label" htmlFor="perempuan">
                  Perempuan
                </label>
              </div>
            </div>
            <div>
              <p>Sebagai?</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="teacher"
                  value="teacher"
                  onChange={hndlStatusChange}
                />
                <label className="form-check-label" htmlFor="teacher">
                  Guru
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="student"
                  value="student"
                  onChange={hndlStatusChange}
                />
                <label className="form-check-label" htmlFor="student">
                  Murid
                </label>
              </div>
            </div>
            {isStudent && (
              <div>
                <label htmlFor="tes" className="my-2">
                  Kelas berapa?
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="tes"
                >
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
            <div className="my-1">
              <label htmlFor="photo" className="form-label">
                Foto
              </label>
              <input
                type="file"
                id="photo"
                className="form-control"
                accept=".jpg, .jpeg, .png"
              />
            </div>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
