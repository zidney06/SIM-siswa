import { Link, useNavigate } from "react-router";
import { postFetch } from "../utils/fetch.js";

export default function Navbar() {
  const navigate = useNavigate();

  const hndlLogout = () => {
    postFetch("/api/user/logout").then((res) => {
      if (!res.success) {
        alert(res.response.data.msg);

        if (res.status == 401) {
          navigate("/");
        }

        return;
      }
      sessionStorage.removeItem("token");
      navigate("/");
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <Link to="/dashboard" className="navbar-brand">
            Sistem informasi manajemen siswa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/biodata">
                Biodata
              </Link>
              <button
                className="btn btn-link text-start text-decoration-none text-dark p-0"
                onClick={hndlLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
