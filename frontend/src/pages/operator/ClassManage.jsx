import { useState } from "react";
import Navbar from "../../components/Navbar";
import CreateClassModal from "../../components/CreateClassModal";
import { postFetch } from "../../utils/fetch";
import { useNavigate } from "react-router";

export default function ClassManage() {
  const [kelas, setKelas] = useState("");
  const [room, setRoom] = useState("");
  const [wali, setWali] = useState("");

  const navigate = useNavigate();

  const hndlWali = (e) => {
    setWali(e.target.value);
  };
  const hndlClick = () => {
    if (!kelas || !room) {
      alert("Field kelas dan atau room masih kosong");
      return;
    }
    if (!wali) {
      alert("Field wali kelas masih kosong");
      return;
    }

    postFetch("/api/class/", { name: `${kelas}-${room}`, wali }).then((res) => {
      console.log(res);
      if (!res.success) {
        alert(res.response.data.msg);

        if (res.response.status == 403) {
          navigate("/");
          sessionStorage.removeItem("token");
        }

        return;
      }
      alert(res.data.msg);
    });
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid p-4 red">
        <h3>Manajemen data kelas</h3>
        {/* Create class modal */}
        <CreateClassModal
          setKelas={setKelas}
          setRoom={setRoom}
          hndlWali={hndlWali}
          hndlClick={hndlClick}
        />
      </div>
    </>
  );
}
