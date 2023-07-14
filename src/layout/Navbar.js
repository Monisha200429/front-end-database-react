import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      {/* <img src="https://static.vecteezy.com/system/resources/previews/000/497/070/original/male-student-icon-design-vector.jpg" alt="Bootstrap" width="30" height="24"/> */}
    </a>
  </div>
</nav>
          <Link className="navbar-brand" to="/">
          STUDENT CURRICULAM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <Link className="btn btn-outline-light" to="/adduser">
            Add User
          </Link>
            {/* <Link className="btn btn-outline-light" to="/login">
            Login
          </Link>
           */}
          
        </div>
      </nav>
    </div>
  );
}
