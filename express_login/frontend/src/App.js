


function Signup () {
  return (
    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
      <h1>Register page</h1>
      <input type="text" className= "form-control" placeholder = "User name" />
      <br/>
      <input type="email" className = "form-control" placeholder = "Email"  />
      <br/>
      <input type="password" className = "form-control" placeholder = "Password" />
      <br/>
      <button className = "btn btn-primary" >Sign up</button>
      
    </div>
  );
}

export default Signup;
