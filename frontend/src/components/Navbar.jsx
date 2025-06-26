import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid red p-1 d-flex align-items-center">
        <a
          className="btn btn-secondary rounded-0 me-2"
          data-bs-toggle="offcanvas"
          href="#menu"
          role="button"
          aria-controls="menu"
        >
          M
        </a>
        <h2 className="red my-auto fs-5">Sistem informasi manajemen</h2>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="menu"
        aria-labelledby="menuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="menuLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <li className="list-group-item border-0">
              <Link className="text-decoration-none text-dark">Biodata</Link>
            </li>
            <li className="list-group-item border-0">
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
