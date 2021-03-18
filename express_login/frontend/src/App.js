
import React, { useState } from 'react';


function Register () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function Signup (){
    const items = {username,email,password}
    console.log(items)

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
