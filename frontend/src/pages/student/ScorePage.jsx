import Navbar from "../../components/Navbar";
import { MyContext } from "../../store/store";
import { useContext, useEffect, useState } from "react";
import { getFetch } from "../../utils/fetch";

export default function ScorePage() {
  const store = useContext(MyContext);

  const [utsScore, setUtsScore] = useState([]);
  const [uasScore, setUasScore] = useState([]);

  useEffect(() => {
    getFetch(`/api/student/get-score/${store.value.id}`).then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);
        return;
      }
      console.log(res.data);
      setUtsScore(res.data.score.uts);
      setUasScore(res.data.score.uas);
    });
  }, []);

  console.log(uasScore, utsScore);

  return (
    <>
      <Navbar />
      <div
        className="mx-auto mb-3"
        style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
      >
        <h4 className="text-center">Nilai untuk {store.value.name}</h4>
        <h5>UTS</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">semester</th>
              <th scope="col">B Indo</th>
              <th scope="col">B Inggris</th>
              <th scope="col">MTK</th>
              <th scope="col">IPA</th>
              <th scope="col">IPS</th>
            </tr>
          </thead>
          <tbody>
            {utsScore.length == 0 ? (
              <p>Tidak ada data</p>
            ) : (
              utsScore.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{item.bIndo}</td>
                  <td>{item.bInggris}</td>
                  <td>{item.MTK}</td>
                  <td>{item.IPA}</td>
                  <td>{item.IPS}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <h5>UAS</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">semester</th>
              <th scope="col">B Indo</th>
              <th scope="col">B Inggris</th>
              <th scope="col">MTK</th>
              <th scope="col">IPA</th>
              <th scope="col">IPS</th>
            </tr>
          </thead>
          <tbody>
            {uasScore.length == 0 ? (
              <p>Tidak ada data</p>
            ) : (
              uasScore.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{item.bIndo}</td>
                  <td>{item.bInggris}</td>
                  <td>{item.MTK}</td>
                  <td>{item.IPA}</td>
                  <td>{item.IPS}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
