import { useState } from "react";
import Navbar from "../../components/Navbar";
import CreateClassModal from "../../components/CreateClassModal";

export default function ClassManage() {
  const [kelas, setKelas] = useState();

  return (
    <>
      <Navbar />
      <div className="container-fluid p-4 red">
        <h3>Manajemen data kelas</h3>
        {/* Create class modal */}
        <CreateClassModal />
      </div>
    </>
  );
}
