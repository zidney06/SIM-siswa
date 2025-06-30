import { useState } from "react";
import Navbar from "../../components/Navbar";
import CreateUserModal from "../../components/CreateUserModal";

export default function StudentManage() {
  const [students, setStudents] = useState();

  return (
    <>
      <Navbar />
      <div className="container-fluid p-4 red">
        <h3>Manajemen data user</h3>

        {/* Modal for Create Student */}
        <CreateUserModal />
      </div>
    </>
  );
}
