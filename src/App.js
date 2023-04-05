import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Common from "./Components/Common/Common";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Common />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Common /> */}
    </div>
  );
}

export default App;
