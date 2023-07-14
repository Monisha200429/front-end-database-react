/*import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;*/
// 
// import './SignUp.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useState } from 'react';

// const Login = () => {

//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPass(e.target.value);
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .get(
//         `http://localhost:8080/login/${email}/${pass}`
//       )
//       .then((response) => {
//         let err = response.data;
//         console.log(response.data);
//         if (err === "Login Successfull") {
//           setError("");
//           navigate("/home");
//         } else {
//           <h2>Incorrect Email or Password
//           </h2>
//         }
        
//       });
//     console.log("Email:", email);
//     console.log("Password:", pass);
//   };

//   return (
//     <div>
//       <h2>{error}</h2>
//       <div className="form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//         <input
//             type="email"
//             value={email}
//             placeholder='Email'
//             onChange={handleEmailChange}
//             required
//           />
//           <input
//             type="password"
//             placeholder='Password'
//             value={pass}
//             onChange={handlePasswordChange}
//             required
//           />
//           <button type="submit" className='btnn' >Log in</button>
//         </form>
//         <p className="message">Not registered? <Link to='/signup'><a>Create an account</a></Link></p>
//       </div>
//     </div>

//   )
// }

// export default Login

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SigninupPage.css";

const SigninupPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
   
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/viewusers");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (uid) => {
    try {
      const response = await axios.delete(`http://localhost:8080/dellogin?uid=${uid}`);
      if (response.data) {
        // User deleted successfully, update the user list
        fetchUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleFormToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;
      if (isSignup) {
        response = await axios.post("http://localhost:8080/user", {
          username: username,
          email: email,
          pass : pass 
        });
      } else {
        response = await axios.post("http://localhost:8080/glogin", {
          email: email,
          pass : pass,
        }); 
      } 
      if (response.data) {
        // Signin or Signup successful, redirect to home page
        window.location.href = "/";
      } else {
        // Signin or Signup failed, display error message  
        setErrorMessage("Signin or Signup failed");
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="signinup-container1">
      <div className="signinup-card">
        <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="button1" type="submit">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="toggle-link">
          {isSignup ? (
            <p>
              Already have an account?{" "}
              <span onClick={handleFormToggle}>Sign In</span>
            </p>
          ) : (
            <p>
              New to Website? <span onClick={handleFormToggle}>Sign Up now</span>
            </p>
          )}
        </div>
      </div>
      <div>
        <div>
        <h2></h2>
        {/* <ul>
          {users.map((user) => (
            <li key={user.uid}>
               Name: {user.username}, Email: {user.email}.password: {user.pass}
              <button onClick={() => handleDelete(user.uid)}> </button>
            </li>
          ))}
        </ul> */}
        </div>
      </div>
    </div>
  );
};

export default SigninupPage;