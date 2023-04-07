import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Common from "./Components/Common/Common";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import ErrorHandler from "./Components/Common/ErrorHandler";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div className="main-container">
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter> */}
        <Common />
      </ErrorBoundary>
    </div>
  );
}

export default App;
