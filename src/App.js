import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState} from "react";
import "./App.css";
import Table from "./Components/Table/Table";
import Login from "./Components/PageLogin/Login/Login";
import Register from "./Components/PageLogin/Register/Register";
import Common from "./Components/Common/Common";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");
   
     const toggleForm = (formName)=>{
      setCurrentForm(formName);
     }

  return (
    <div className="main-container">
      {/* {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      } */}
      {<BrowserRouter>
        <Routes>
          <Route path="/" element={<Common />} />
          <Route path="/data" element={<Table />} />
        </Routes>
      </BrowserRouter> }

     
      {/* <Table/> */}
      {/* <Common /> */}
    </div>
  );
}

export default App;
