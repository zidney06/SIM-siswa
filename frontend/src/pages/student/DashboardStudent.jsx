import Navbar from "../../components/Navbar";

export default function DashboardStudent() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-3">
        <h2 className="text-center">
          Selamat datang <i>Student</i>
        </h2>
        <div
          className="mx-auto mb-3"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          <h4 className="text-center">Kehadiran</h4>
          <ul className="list-group">
            <li className="list-group-item">hadir: 3x</li>
            <li className="list-group-item">izin: 2x</li>
            <li className="list-group-item">alpha: 1x</li>
          </ul>
        </div>
        <div
          className="mx-auto mb-3"
          style={{ minWidth: "350px", maxWidth: "500px", width: "80%" }}
        >
          <h4 className="text-center">Nilai</h4>
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>sjacgk</td>
                <td>34</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>123</td>
                <td>13</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
                <td>12</td>
                <td>34</td>
              </tr>
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>sjacgk</td>
                <td>34</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>123</td>
                <td>13</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
                <td>12</td>
                <td>34</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
