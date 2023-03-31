import React from 'react'
import { useState } from 'react'

const Register = (props) => {
    const[name, setName] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
      const handleSubmit = (e)=>{
        e.preventDefault();
     }

  return (
     <div className="register-page-container">
    <form className="form-container"onSubmit={handleSubmit}> 
         <label for="name">Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" id="name"/>

        <label for="email">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email"/>

        <label for="password">Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="************" id="password"/>

        <button type="submit">Register</button>
    </form>
       <button className="link-btn" onClick={()=>props.onFormSwitch("Login")}>Already have an account? Login here.</button>
    </div>
  )
}

export default Register