import './login2.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Log()
{
    return (
<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="" />
      <label>Password</label>
    </div>
    <a>       </a>
    
    <a>                           </a>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    <a>                             new user?</a>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    
      SignUp
    </a>
  </form>
</div>
)
}
export default Log