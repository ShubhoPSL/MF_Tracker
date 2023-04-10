import React from "react";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});

  const { showBoundary } = useErrorBoundary();

  const handleSubmit = (e) => {
    if (name !== "" && email !== "" && password !== "") {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: name,
        email: email,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch("http://3.111.39.208:8082/user/register", requestOptions)
        .then((res) => res.json())
        .then(
          (json) => {
            setResponse(json);
            alert(json.message);
            props.onFormSwitch("Login");
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
    <div className="register-page-container">
      <div className="form-container">
        <h1 className="login-heading"> Registeration Page</h1>
        <label htmlFor="name" className="login-label">
          Name
        </label>
        <input
          className="login-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
          id="name"
        />

        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
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
          placeholder="************"
          id="password"
        />

        <button className="login-btn-main" onClick={handleSubmit}>
          Register
        </button>

        <button
          className="login-btn-toggle"
          onClick={() => props.onFormSwitch("Login")}
        >
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};

export default Register;
