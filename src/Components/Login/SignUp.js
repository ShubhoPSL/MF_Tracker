import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form className="form-box">
        <div>
          <p className="formbox-header">SIGNUP PAGE</p>
          <label>Name</label>
          <br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChange}
          ></input>
        </div>

        <div>
          <label>Email</label>
          <br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChange}
          ></input>
        </div>

        <div>
          <label>Set Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChange}
          ></input>
        </div>
        <br></br>

        <div className="gg">
          <button type="submit" className="btn">
            Signup
          </button>
        </div>
        <br></br>
        <div className="loginlink">
          Already have an account? <Link to="/">Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
