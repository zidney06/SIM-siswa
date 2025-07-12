import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getFetch } from "../utils/fetch";
import { MyContext } from "../store/store";
import { useNavigate } from "react-router";

export default function Biodata() {
  const store = useContext(MyContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getFetch(`/api/user/biodata/${store.value.id}`).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);
        if (res.status == 401) {
          navigate("/");
        }
        return;
      }

      setTimeout(() => {
        setUserData(res.data.data);
      }, 750);
    });
  }, []);

  if (userData) {
    return (
      <>
        <Navbar />
        <div className="container-fluid p-3">
          <h4 className="text-center">Biodata</h4>
          <div className="container d-flex">
            <div className="col">
              <img
                src={import.meta.env.VITE_BASE_URL + userData.image}
                className="rounded m-1 border border-3 border-secondary"
                style={{ width: "200px", height: "300px" }}
              />
            </div>

            <div className="col-9 p-3">
              <ul className="list-group">
                <li className="list-group-item">Nama: {userData.name}</li>
                <li className="list-group-item">Alamat: {userData.address}</li>
                <li className="list-group-item">
                  Tempat tanggal lahir: {userData.placeAndDateOfBirth}
                </li>
                <li className="list-group-item">
                  Jenis kelamin: {userData.gender ? "Laki-laki" : "Perempuan"}
                </li>
                <li className="list-group-item">Role: {userData.role}</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="container-fluid p-3 d-flex justify-content-center">
          <h4>Loading...</h4>
        </div>
      </>
    );
  }
}
