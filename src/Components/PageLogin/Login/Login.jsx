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
        <input className="p-3 rounded" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email"/>

        <label for="password">Password</label>
        <input className="p-3 rounded" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="************" id="password"/>

        <button className="bg-blue-300 text-black p-1 mt-2 " type="submit">Log in</button>
    
       <button className="text-black font-bold underline mt-4" onClick={()=>props.onFormSwitch("Register")}>Don't have an accont? Register here.</button>
    </form>
    </div>
  )
}

export default Login