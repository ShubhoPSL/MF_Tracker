import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Login from "./Components/PageLogin/Login/Login";
import Register from "./Components/PageLogin/Register/Register";
import Common from "./Components/Common/Common";
import ErrorHandler from "./Components/Common/ErrorHandler";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="main-container">
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <header>
          {currentForm === "Login" ? (
            <Login onFormSwitch={toggleForm} />
          ) : (
            <Register onFormSwitch={toggleForm} />
          )}
        </header>
        {/* <Common /> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
