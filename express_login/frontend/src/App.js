
import React, { useState } from 'react';


function Register () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function Signup (){

    let data = {username,email,password}
    console.warn(data)
    let result = await fetch("http://localhost:8000/signup",{
      method: 'POST', 
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
   
    })
    result = await result.json()
    console.warn("result",result)

  }

  return (
    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
      <h1>Register page</h1>
      <input type="text" value = {username} onChange = {(e)=>setUsername(e.target.value)} className= "form-control" placeholder = "User name" />
      <br/>
      <input type="email" value = {email} onChange = {(e)=>setEmail(e.target.value)} className = "form-control" placeholder = "Email"  />
      <br/>
      <input type="password" value = {password} onChange = {(e)=>setPassword(e.target.value)} className = "form-control" placeholder = "Password" />
      <br/>
      <button onClick = {Signup} className = "btn btn-primary" >Sign up</button>
      
    </div>
  );
}

export default Register;
