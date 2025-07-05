import { useEffect, useRef, useState } from "react";
import { putfetch } from "../utils/fetch";

export default function EditUserModal({
  name,
  setName,
  address,
  setAddress,
  username,
  setUsername,
  password,
  setPassword,
  placeAndDateOfBirth,
  setPlaceAndDateOfBirth,
  gender,
  setGender,
  role,
  setRole,
  imagePreview,
  setImagePreview,
  file,
  setFile,
  id,
  gambar,
  users,
  setUsers,
}) {
  // lanjut mengatur imagenya
  const [isStudent, setIsStudent] = useState(null);
  const image = useRef(null);

  const hndlName = (e) => {
    setName(e.target.value);
  };
  const hndlUsername = (e) => {
    setUsername(e.target.value);
  };
  const hndlPasssword = (e) => {
    setPassword(e.target.value);
  };
  const hndlAddress = (e) => {
    setAddress(e.target.value);
  };
  const hndlPlaceAndDateOfBirth = (e) => {
    setPlaceAndDateOfBirth(e.target.value);
  };
  const hndlGender = (e) => {
    const value = e.target.value == "true" ? true : false;
    setGender(value);
  };
  const hndlStatusChange = (e) => {
    const value = e.target.value == "student" ? "student" : "teacher";
    setRole(value);
  };
  const hndlFileChange = (e) => {
    setFile(e.target.files[0]);

    if (e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const hndlConfirmEdit = () => {
    // buat validasi, krim ke server dan reset input
    const formData = new FormData();

    formData.append("photo", file);
    formData.append(
      "data",
      JSON.stringify({
        username: username,
        password: password,
        name: name,
        address: address,
        placeAndDateOfBirth: placeAndDateOfBirth,
        gender: gender,
        role: role,
        image: gambar,
      })
    );

    putfetch(`/api/user/${id}`, formData).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        return;
      }

      const newUsers = users.map((item) => {
        if (item._id == res.data.data._id) {
          return res.data.data;
        }
        return item;
      });
      setUsers(newUsers);

      // reset input
      resetValue();
    });
  };

  console.log({
    username: username,
    password: password,
    name: name,
    address: address,
    placeAndDateOfBirth: placeAndDateOfBirth,
    gender: gender,
    role: role,
    image: gambar,
  });

  const resetValue = () => {
    setUsername("");
    setName("");
    setPlaceAndDateOfBirth("");
    setAddress("");
    setGender(null);
    setImagePreview("");
    setRole("");
    setFile(null);
    image.current.files = null;
    image.current.value = null;
  };
  return (
    <>
      <div
        className="modal fade"
        id="edit"
        tabIndex="-1"
        aria-labelledby="editLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editLabel">
                Edit data
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetValue}
              ></button>
            </div>
            <div className="modal-body green">
              <div className="my-1">
                <label htmlFor="name" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={hndlName}
                />
              </div>
              <div className="my-1">
                <label htmlFor="name" className="form-label">
                  username
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={username}
                  onChange={hndlUsername}
                />
              </div>
              <div className="my-1">
                <label htmlFor="name" className="form-label">
                  password
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={password}
                  onChange={hndlPasssword}
                />
              </div>
              <div className="my-1">
                <label htmlFor="address" className="form-label">
                  Alamat
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  value={address}
                  onChange={hndlAddress}
                />
              </div>
              <div className="my-1">
                <label htmlFor="placeAndDateOfBirth" className="form-label">
                  Tempat tanggal lahir
                </label>
                <input
                  type="text"
                  id="placeAndDateOfBirth"
                  className="form-control"
                  value={placeAndDateOfBirth}
                  onChange={hndlPlaceAndDateOfBirth}
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
                    value={true}
                    checked={gender ? true : false}
                    onChange={hndlGender}
                  />
                  <label className="form-check-label" for="laki-laki">
                    Laki-laki
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="perempuan"
                    value={false}
                    checked={gender ? false : true}
                    onChange={hndlGender}
                  />
                  <label className="form-check-label" for="perempuan">
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
                    name="role"
                    id="teacher"
                    value="teacher"
                    checked={role == "teacher" && true}
                    onChange={hndlStatusChange}
                  />
                  <label className="form-check-label" for="teacher">
                    Guru
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="student"
                    value="student"
                    checked={role == "student" && true}
                    onChange={hndlStatusChange}
                  />
                  <label className="form-check-label" for="student">
                    Murid
                  </label>
                </div>
              </div>
              <div className="my-1">
                <img
                  src={
                    !file
                      ? `${import.meta.env.VITE_BASE_URL}${imagePreview}`
                      : imagePreview
                  }
                  className="img red"
                  style={{ width: 100, height: 125 }}
                />
                <label htmlFor="photo" className="form-label">
                  Foto
                </label>
                <input
                  type="file"
                  id="photo"
                  className="form-control"
                  ref={image}
                  accept=".jpg, .jpeg, .png"
                  onChange={hndlFileChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={hndlConfirmEdit}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
