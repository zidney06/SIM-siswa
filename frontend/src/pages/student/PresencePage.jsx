import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getFetch } from "../../utils/fetch";
import { MyContext } from "../../store/store";

export default function PresencePage() {
  const store = useContext(MyContext);

  const [present, setPresent] = useState([]);
  const [permission, setPermission] = useState([]);
  const [alpha, setAlpha] = useState([]);
  const [totalPresence, seTotalPresence] = useState(0);

  useEffect(() => {
    getFetch(`/api/student/get-presence/${store.value.id}`).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);
        return;
      }
      console.log(res.data);
      setPresent(res.data.presence.present.date);
      setPermission(res.data.presence.permission.date);
      setAlpha(res.data.presence.alpha.date);
      seTotalPresence(res.data.presence.date);
    });
  }, []);

  console.log(totalPresence);
  return (
    <>
      <Navbar />
      <div
        className="mx-auto mb-3"
        style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
      >
        <h4 className="text-center">Kehadiran</h4>
        <ul className="list-group">
          <li className="list-group-item">hadir: {present.length}x</li>
          <li className="list-group-item">izin: {permission.length}x</li>
          <li className="list-group-item">alpha: {alpha.length}x</li>
          <li className="list-group-item">Total: {totalPresence.length}</li>
        </ul>
      </div>
    </>
  );
}
