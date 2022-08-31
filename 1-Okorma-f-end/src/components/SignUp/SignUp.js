import React from 'react';
import './signup.css'

const SignUp = () => {
    return (
        <div className='signup-container'>
            <h1>Create Account</h1><br />
            <form className='form-container'>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" id="staticEmail" placeholder='Name'/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Email"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Phone"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
  <br />
  <button type="button" class="btn btn-primary submit-btn">Submit</button>

</form>
        </div>
    );

};

export default SignUp;