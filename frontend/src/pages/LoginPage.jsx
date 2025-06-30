import { Link } from "react-router";

export default function LoginPage() {
  return (
    <>
      <div className="container-fluid p-0" style={{ height: "100vh" }}>
        <div className="container-fluid p-0 bg-secondary text-light border border-secondary">
          <h3 className="text-center">Sistem informasi manajemen</h3>
        </div>
        <div className="container border p-0" style={{ height: "100%" }}>
          <h2 className="text-center">Login</h2>
          <div
            className="container border border-2 mx-auto p-2 mb-5"
            style={{ maxWidth: "380px" }}
          >
            <h3 className="text-center">username</h3>
            <span
              style={{ fontSize: "0.7rem", fontStyle: "italic", color: "red" }}
            >
              text kesalahan
            </span>
            <input type="text" className="form-control form-control-sm" />
            <h3 className="text-center">password</h3>
            <span
              style={{ fontSize: "0.7rem", fontStyle: "italic", color: "red" }}
            >
              text kesalahan
            </span>
            <input type="password" className="form-control form-control-sm" />
          </div>
        </div>
      </div>
    </>
  );
}
