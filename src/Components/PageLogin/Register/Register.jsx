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
           <input className="p-3 rounded" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" id="name"/>

           <label for="email">Email</label>
          <input className="p-3 rounded" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email"/>

          <label for="password">Password</label>
          <input className="p-3 rounded" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="************" id="password"/>
         
          <button className="bg-blue-300 text-black p-1 mt-2" type="submit">Register</button>
    
          <button className="text-black font-bold underline mt-4" onClick={()=>props.onFormSwitch("Login")}>Already have an account? Login here.</button>
       </form>
    </div>
  )
}

export default Register