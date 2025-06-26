import { Link } from "react-router";

export default function Navbar() {
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
              <a className="nav-link" href="#">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
