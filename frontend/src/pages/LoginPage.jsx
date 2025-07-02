import { useContext, useEffect, useState } from "react";
import { postFetch } from "../utils/fetch";
import { Navigate, useNavigate } from "react-router";
import { MyContext } from "../store/store";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const store = useContext(MyContext);

  const hndlUsername = (e) => {
    setUsername(e.target.value);
  };

  const hndlPassword = (e) => {
    setPassword(e.target.value);
  };

  const hndlLogin = () => {
    postFetch("/api/user/login", { username, password }).then((res) => {
      console.log(res);
      if (!res.success) {
        alert(res.response.data.msg);

        return;
      }
      console.log(res.data.token);

      store.setUserRole(res.data.role);

      sessionStorage.setItem("token", res.data.token);
      navigate("/dashboard");
      console.log(res);
    });
  };

  return (
    <>
      <div className="container-fluid p-0" style={{ height: "100vh" }}>
        <div className="container-fluid p-0 bg-secondary text-light border border-secondary">
          <h3 className="text-center">Sistem informasi manajemen</h3>
        </div>
        <div
          className="container border p-0 my-auto"
          style={{ height: "100%" }}
        >
          <h2 className="text-center">Login</h2>
          <div
            className="container border border-2 mx-auto p-2 mb-5"
            style={{ maxWidth: "380px" }}
          >
            <h3 className="text-center">username</h3>
            <span
              style={{ fontSize: "0.7rem", fontStyle: "italic", color: "red" }}
            >
              {usernameErrText}
            </span>
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={hndlUsername}
            />
            <h3 className="text-center">password</h3>
            <span
              style={{ fontSize: "0.7rem", fontStyle: "italic", color: "red" }}
            >
              {passwordErrText}
            </span>
            <input
              type="password"
              className="form-control form-control-sm"
              onChange={hndlPassword}
            />
            <button className="btn btn-primary mt-2" onClick={hndlLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
