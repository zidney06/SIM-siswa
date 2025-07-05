import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CreateUserModal from "../../components/CreateUserModal";
import { getFetch } from "../../utils/fetch";

export default function StudentManage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-4">
        <h3>Manajemen data user</h3>

        {/* Modal for Create Student */}
        <CreateUserModal />
      </div>
    </>
  );
}
