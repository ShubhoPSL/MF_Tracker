import React, {useState} from "react";
import "./App.css";
import Login from "./Components/PageLogin/Login/Login";
import Register from "./Components/PageLogin/Register/Register";
import "./App.css";
import Common from "./Components/Common/Common";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");
   
     const toggleForm = (formName)=>{
      setCurrentForm(formName);
     }

  return (
    <div className="main-container">
      {/* <header>
       { 
        currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
     </header> */}
      { <Common /> }

    </div>
  );
}

export default App;
