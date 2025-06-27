import Navbar from "../components/Navbar";

export default function Biodata() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-3">
        <h4 className="text-center">Biodata</h4>
        <div className="container d-flex">
          <div className="col">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.1701309041.1750940588&semt=ais_hybrid&w=740"
              className="rounded m-1"
              style={{ width: "200px", height: "300px" }}
            />
          </div>

          <div className="col-9 p-3">
            <ul className="list-group">
              <li className="list-group-item">Nama: </li>
              <li className="list-group-item">Alamat: </li>
              <li className="list-group-item">Tempat tanggal lahir: </li>
              <li className="list-group-item">Jenis kelamin: </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
