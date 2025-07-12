import { useEffect, useState, useRef } from "react";
import DeleteModal from "../../components/DeleteModal";
import EditUserModal from "../../components/EditUserModal";
import Navbar from "../../components/Navbar";
import { getFetch } from "../../utils/fetch";
import { useNavigate } from "react-router";

export default function UserList() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);

  const [isStudent, setIsStudent] = useState(false);
  const [classList, setClassList] = useState([]);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [placeAndDateOfBirth, setPlaceAndDateOfBirth] = useState("");
  const [gender, setGender] = useState(null);
  const [role, setRole] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [id, setId] = useState(0);
  const [gambar, setGambar] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getFetch(`/api/user/getUserList/${page}`).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        if (res.response.status == 403 || res.response.status == 401) {
          alert("Sesi sudah habis, harap login kembali");
          navigate("/");
          sessionStorage.removeItem("token");
        }
        return;
      }
      setUsers(res.data.data);
    });
  }, []);

  const hndlEditClick = (
    image,
    name,
    address,
    placeAndDateOfBirth,
    username,
    password,
    gender,
    role,
    imagePreview,
    id
  ) => {
    setName(name);
    setAddress(address);
    setPlaceAndDateOfBirth(placeAndDateOfBirth);
    setUsername(username);
    setPassword(password);
    setGender(gender);
    setRole(role);
    setImagePreview(imagePreview);
    setGambar(imagePreview);
    setId(id);
  };
  const hndlDeleteClick = (id) => {
    setId(id);
  };
  const hndlFIlterChange = (e) => {
    setFilter(e.target.value);
  };
  const hndlIncrement = () => {
    getFetch(`/api/user/getUserList/${page + 1}`).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        if (res.response.status == 403 || res.response.status == 401) {
          alert("Sesi sudah habis, harap login kembali");
          navigate("/");
          sessionStorage.removeItem("token");
        } else if (res.status == 404) {
          console.log(page, page - 1);
        }
        return;
      } else if (res.status == 200) {
        setUsers(res.data.data);
      }
      setPage(page + 1);
    });
  };
  const hndlDecrement = () => {
    if (page == 1) {
      alert("sudah terkecil");
      return;
    }

    setPage(page - 1);

    getFetch(`/api/user/getUserList/${page - 1}`).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        if (res.response.status == 403 || res.response.status == 401) {
          alert("Sesi sudah habis, harap login kembali");
          navigate("/");
          sessionStorage.removeItem("token");
        }
        return;
      }
      setUsers(res.data.data);
    });
  };

  const filtered = users.filter((item) => {
    if (!filter) {
      return item;
    }
    if (item.role == filter) {
      return item;
    }
  });

  return (
    <>
      <div className="container-fluid p-0">
        <Navbar />
        <h4 className="mx-2">Daftar user tersedia</h4>
        <div
          className="d-flex justify-content-between px-1"
          style={{ width: 150 }}
        >
          <button className="btn btn-primary" onClick={hndlDecrement}>
            prev
          </button>
          <p className="my-auto fs-5">{page}</p>
          <button className="btn btn-primary" onClick={hndlIncrement}>
            next
          </button>
        </div>
        <div className="border rounded p-2" style={{ width: 400 }}>
          <label htmlFor="search">filter berdasarkan role</label>
          <select
            name="filterRole"
            id="filterRole"
            className="form-select"
            onChange={hndlFIlterChange}
          >
            <option value="">tampilkan semua</option>
            <option value="student">student</option>
            <option value="teacher">teacher</option>
          </select>
        </div>
        {filtered.length == 0 ? (
          <h3 className="ms-3">Gak ada data</h3>
        ) : (
          <table className="table p-2">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Nama</th>
                <th scope="col">Alamat</th>
                <th scope="col">Tempat tanggal lahir</th>
                <th scope="col">username</th>
                <th scope="col">password</th>
                <th scope="col">gender</th>
                <th scope="col">role</th>
                <th scope="col" className="text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>
                    <img
                      src={`${import.meta.env.VITE_BASE_URL + user.image}`}
                      style={{ width: 100, height: 125 }}
                    />
                  </th>
                  <th>{user.name}</th>
                  <th>{user.address}</th>
                  <th>{user.placeAndDateOfBirth}</th>
                  <th>{user.username}</th>
                  <th>{user.password}</th>
                  <th>{user.gender ? "Laki-laki" : "Perempuan"}</th>
                  <th>{user.role}</th>
                  <th className="" style={{ height: "100%" }}>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#edit"
                      onClick={() =>
                        hndlEditClick(
                          user.image,
                          user.name,
                          user.address,
                          user.placeAndDateOfBirth,
                          user.username,
                          user.password,
                          user.gender,
                          user.role,
                          user.image,
                          user._id
                        )
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                      onClick={() => hndlDeleteClick(user._id)}
                    >
                      Hapus
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Edit user modal */}
      <EditUserModal
        name={name}
        setName={setName}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        address={address}
        setAddress={setAddress}
        placeAndDateOfBirth={placeAndDateOfBirth}
        setPlaceAndDateOfBirth={setPlaceAndDateOfBirth}
        role={role}
        setRole={setRole}
        gender={gender}
        setGender={setGender}
        imagePreview={imagePreview}
        setImagePreview={setImagePreview}
        file={file}
        setFile={setFile}
        id={id}
        gambar={gambar}
        users={users}
        setUsers={setUsers}
      />
      {/* Delete user */}
      <DeleteModal id={id} data={users} setData={setUsers} url="/api/user/" />
    </>
  );
}
