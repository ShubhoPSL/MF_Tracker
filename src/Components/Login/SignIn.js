import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");

  const emailEnter = (e) => {
    setEmail(e.target.value);
  };
  const passwordEnter = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen max-h-full">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>

    // <div>
    //   <form className="form-box">
    //     <div>
    //       <p className="formbox-header">LOGIN PAGE</p>
    //       <label className="label123">Email</label>
    //       <input
    //         type="email"
    //         id="loginemail"
    //         value={loginEmail}
    //         onChange={emailEnter}
    //       ></input>
    //     </div>
    //     <div>
    //       <label className="label123">Password</label>
    //       <input
    //         type="password"
    //         id="loginpassword"
    //         value={loginPassword}
    //         onChange={passwordEnter}
    //       ></input>
    //     </div>
    //     <br></br>

    //     <div className="gg">
    //       <button type="submit" className="btn">
    //         Login
    //       </button>
    //     </div>
    //     <br></br>
    //     <div className="loginlink">
    //       Or signup <Link to="/signup">here</Link>
    //     </div>
    //   </form>
    // </div>
  );
}

export default SignIn;
