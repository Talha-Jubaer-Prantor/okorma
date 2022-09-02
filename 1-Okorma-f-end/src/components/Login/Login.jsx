import React from 'react';
import { useEffect } from 'react';
import useLoginHandler from '../../hooks/useLoginHandler';
import './Login.css'
const Login = () => {

  const [logedUser,setLoggedUser]=useLoginHandler()

  const loginHandler=e=>{
      e.preventDefault()

      const email=e.target.email.value
      const password=e.target.password.value

      const userDet={
        'email':email,
        'password':password
      }

      fetch('http://localhost:8080/signin',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(userDet)
    }).then(res=>res.json())
      .then(data=>{
        setLoggedUser(data)
      })
      
    
  }

console.log(logedUser,'founded')
    return (
        <div className='login-container'>
          <h1>Login</h1>
            <form onSubmit={loginHandler}>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" name='email'  class="form-control" id="staticEmail"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" name='password' class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div><br />
  <button type="submit" class="btn btn-primary submit-btn">Submit</button>
  <br /><br />
      <p>Don't have any account <a href="/signup">create one</a></p>
</form>
        </div>
    );
};

export default Login;

    // <p>Not a member? <a href="#">Create Account</a><p>
