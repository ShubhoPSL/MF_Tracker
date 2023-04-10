import React from "react";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});

  const { showBoundary } = useErrorBoundary();

  const handleSubmit = (e) => {
    if (email !== "" && password !== "") {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://3.111.39.208:8082/user/login", requestOptions)
        .then((res) => res.json())
        .then(
          (json) => {
            //setResponse(json);
            alert(json.message);
          },
          (error) => {
            showBoundary(error);
          }
        );
    } else {
      alert("please fill the details completely");
    }
    e.preventDefault();
  };

  return (
    <div className="login-page-container">
      <div className="form-container">
        <h1 className="login-heading"> Login Page</h1>
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email here"
          id="email"
        />

        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          id="password"
        />

        <button className="login-btn-main" onClick={handleSubmit}>
          Log in
        </button>

        <button
          className="login-btn-toggle"
          onClick={() => props.onFormSwitch("Register")}
        >
          Don't have an accont? Register here.
        </button>
      </div>
    </div>
  );
};

export default Login;
