import { useEffect, useRef, useState } from "react";
import { getFetch, postFetch } from "../utils/fetch";

export default function CreateStudentModal() {
  const [isStudent, setIsStudent] = useState(false);
  const [classList, setClassList] = useState([]);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [placeAndDateOfBirth, setPlaceAndDateOfBirth] = useState("");
  const [gender, setGender] = useState(null);
  const [role, setRole] = useState("");
  const [file, setFile] = useState(null);
  const [className, setClassName] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const image = useRef(null);

  useEffect(() => {
    getFetch("/api/class/classList").then((res) => {
      console.log(res);
      if (!res.success) {
        alert(res.response.data.msg);

        return;
      }
      setClassList(res.data.data);
    });
  }, []);

  const hndlName = (e) => {
    setName(e.target.value);
  };
  const hndlUsername = (e) => {
    setUsername(e.target.value);
  };
  const hndlAddress = (e) => {
    setAddress(e.target.value);
  };
  const hndlPlaceAndDateOfBirth = (e) => {
    setPlaceAndDateOfBirth(e.target.value);
  };
  const hndlGender = (e) => {
    setGender(e.target.value);
  };
  const hndlStatusChange = (e) => {
    setRole(e.target.value);
    if (e.target.value == "student") {
      setIsStudent(true);
    } else {
      setIsStudent(false);
    }
  };
  const hndlClassName = (e) => {
    setClassName(e.target.value);
  };
  const hndlFileChange = (e) => {
    setFile(e.target.files[0]);

    if (e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const hndlSave = () => {
    // buat validasi, krim ke server dan reset input
    const formData = new FormData();

    formData.append("photo", file);
    formData.append(
      "data",
      JSON.stringify({
        username: username,
        name: name,
        address: address,
        placeAndDateOfBirth: placeAndDateOfBirth,
        gender: gender,
        role: role,
        className: className,
      })
    );

    postFetch("/api/user/", formData).then((res) => {
      console.log(res);
      if (!res.success) {
        alert(res.response.data.msg);

        return;
      }
      // reset input
      resetValue();
    });
  };
  const resetValue = () => {
    setUsername("");
    setName("");
    setPlaceAndDateOfBirth("");
    setAddress("");
    setGender(null);
    setImagePreview("");
    setClassName("");
    setRole("");
    setFile(null);
    image.current.files = null;
    image.current.value = null;
  };

  console.log(
    name,
    address,
    placeAndDateOfBirth,
    gender,
    role,
    className,
    file,
    imagePreview
  );

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
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                className="form-control"
                onChange={hndlUsername}
              />
            </div>
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
              <label htmlFor="address" className="form-label">
                Alamat
              </label>
              <input
                type="text"
                id="address"
                value={address}
                className="form-control"
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
                value={placeAndDateOfBirth}
                className="form-control"
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
                  onChange={hndlGender}
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
                  value={false}
                  onChange={hndlGender}
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
                  name="role"
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
                  name="role"
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
                <span>
                  <b>Data kelas tidak dapat dirubah!</b>
                </span>
                <br />
                <label htmlFor="tes" className="my-2">
                  Kelas berapa?
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="tes"
                  value={className}
                  onChange={hndlClassName}
                >
                  <option value=""></option>
                  {classList.map((kelas, i) => (
                    <option value={kelas.name} key={i}>
                      {kelas.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="my-1">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ width: 150, height: 200 }}
                />
              )}
              <label htmlFor="photo" className="form-label">
                Foto
              </label>
              <input
                type="file"
                id="photo"
                ref={image}
                className="form-control"
                accept=".jpg, .jpeg, .png"
                onChange={hndlFileChange}
              />
            </div>
          </div>
          <div className="p-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={hndlSave}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
