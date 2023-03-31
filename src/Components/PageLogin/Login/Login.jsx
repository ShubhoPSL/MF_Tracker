import React from 'react'
import { useState } from 'react'

const Login = (props) => {
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const handleSubmit = (e)=>{
        e.preventDefault();
     }


  return (
    <div className="login-page-container">
    <form className="form-container" onSubmit={handleSubmit}> 
        <label for="email">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email"/>

        <label for="password">Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="************" id="password"/>

        <button type="submit">Log in</button>
    </form>
    <button className="link-btn" onClick={()=>props.onFormSwitch("Register")}>Don't have an accont? Register here.</button>
    </div>
  )
}

export default Login