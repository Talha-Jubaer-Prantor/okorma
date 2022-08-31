import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='login-container'>
          <h1>Login</h1>
            <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" id="staticEmail"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div><br />
  <button type="button" class="btn btn-primary submit-btn">Submit</button>
  <br /><br />
      <p>Don't have any account <a href="/signup">create one</a></p>
</form>
        </div>
    );
};

export default Login;

    // <p>Not a member? <a href="#">Create Account</a><p>
