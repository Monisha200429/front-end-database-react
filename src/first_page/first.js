import React from 'react'
import './firsts.css'
import { Link } from 'react-router-dom'
import Login from '../Login page/SignUp'
export const Firsts = () => {
  return (
    <>
  {/* STORY BEGINS */}
  {/* NAVBAR */}
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <a className="navbar-brand yellow-color" href="#">
      INFO HUB
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* LINKS */}
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to='/login'>
        <button type="button" class="btn btn-secondary">Login</button>
        </Link>
        </li>
        <li className="nav-item">
            <Link to='/adduser'>
            <button type="button" class="btn btn-secondary">Add User </button>
</Link>
        </li>
        {/* <li className="nav-item">
            <Link to='/Login'>
          <a className="nav-link" href="#">
            Login
          </a></Link>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Enroll Now
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">
              Front-End Developer
            </a>
            <a className="dropdown-item" href="#">
              Back-End Developer
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Full Stack Developer
            </a>
          </div>
        </li> */}
      </ul>
      {/* SEARCH BAR */}
      {/* <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form> */}
    </div>
  </nav>
  {/* SECTION: PHOTO WITH TEXT AND BUTTON */}
  <section id="main-photo" className="text-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 py-3 lead photo-info bg-dark">
          <h1 className=" font-lucida grande yellow-color">
          WELCOME
          </h1>
          <h3 className="font-weight-bold green-color py-2 text-light text-center caption">
            A community of lifelong learners, responsible global citizens, and
            champions of our own success.
          </h3>
          <a href="#" className="btn yellow-background btn-lg">
          <Link to='/full'><a className="nav-link" href="#">
           DATABASE
           </a></Link>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* SECTION: KEY POINTS WITH FONT-AWSOME */}
  <section id="key-points">
    <div className="container-fluid text-center">
      <div className="row">
        {/* col 3/12 */}
        <div className="col-md-3 yellow-background p-4">
          <i className="fas fa-laptop-code large-text" />
          <h2 className="p-1">Fun Learning</h2>
          <p>Students can concentrat more on what they do</p>
        </div>
        {/* col 3/12 */}
        <div className="col-md-3 bg-dark text-light p-4">
          <i className="fas fa-headset large-text" />
          <h2 className="p-1"> Support </h2>
          <p>Live support from faculties and others</p>
        </div>
        {/* col 3/12 */}
        <div className="col-md-3 yellow-background p-4">
          <i className="fas fa-hand-holding-usd large-text" />
          <h2 className="p-1"> Resilent </h2>
          <p>Students can improve their control of emotions</p>
        </div>
        {/* col 3/12 */}
        <div className="col-md-3 bg-dark text-light p-4">
          <i className="fas fa-ruler-combined large-text" />
          <h2 className="p-1"> Improved technology </h2>
          <p>
            Build real world projects and continuously add to your portfolio 
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* SECTION: HOW WE TEACH */}
  <section id="how-we-teach-header">
    <div className="dark-overlay px-5 pt-3">
      <div className="row">
        <div className="col">
          <div className="container p-5">
            <h1>ALUMINI</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* SECTION: HOW WE TEACH */}
  <section id="we-teach">
    <div className="container-fluid">
      {/* ROW 1 OF HOW WE TEACH INFO */}
      <div className="row mx-5">
        {/* LEFT ITEM */}
        <div className="col-sm-12 col-md-6 d-flex justify-content-left my-3">
          {/* first */}
          <div className="icon-circle text-center large-text text-white">
            <i className="fas fa-shield-alt" />
          </div>
          {/* second */}
          <div className="mt-3 px-3">
            <p>It was a wonderful and grateful experience I got from Sri Krishna College of Technology.</p>
          </div>
        </div>
        {/* RIGHT ITEM */}
        <div className="col-sm-12 col-md-6 d-flex justify-content-right my-3">
          {/* first */}
          <div className="icon-circle text-center large-text text-white">
            <i className="far fa-clock" />
          </div>
          {/* second */}
          <div className="mt-3 px-3">
            <p>
            It’s a wonderful experience in the college and it has a very wide knowledge & developing curriculum!
            </p>
          </div>
        </div>
      </div>
      {/* ROW 2 OF HOW WE TEACH INFO */}
      <div className="row mx-5">
        {/* LEFT ITEM */}
        <div className="col-sm-12 col-md-6 d-flex justify-content-left my-3">
          {/* first */}
          <div className="icon-circle text-center large-text text-white">
            <i className="far fa-smile" />
          </div>
          {/* second */}
          <div className="mt-3 px-3">
            <p>
              10:1 professor-student ratio. Meaning your instructor will get to
              know you, and teach on a personal level.
            </p>
          </div>
        </div>
        {/* RIGHT ITEM */}
        <div className="col-sm-12 col-md-6 d-flex justify-content-right my-3">
          {/* first */}
          <div className="icon-circle text-center large-text text-white">
            <i className="fas fa-user-friends" />
          </div>
          {/* second */}
          <div className="mt-3 px-3">
            <p>
            Minimum class strength made students to be well connected with staff members.
            </p>
          </div>
        </div>
      </div>
      {/* ROW 3 OF HOW WE TEACH INFO */}
      <div className="row mx-5">
        {/* LEFT ITEM */}
        <div className="col-sm-12 col-md-6 d-flex justify-content-left my-3">
          {/* first */}
          <div className="icon-circle text-center large-text text-white">
            <i className="fas fa-chart-line" />
          </div>
          {/* second */}
          <div className="mt-3 px-3">
            <p>
              Know where to study with performace charts to show what your
              strenghs are and weakness.
            </p>
          </div>
        </div>
        {/* RIGHT ITEM */}
        <div className="col-sm-12 col-md-6 d-flex justify-content-right my-3">
          {/* first */}
          <div className="icon-circle text-center large-text text-white">
            <i className="fas fa-project-diagram" />
          </div>
          {/* second */}
          <div className="mt-3 px-3">
            <p>
            80% of students were placed in service based and product based companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* SECTION: OUR COURSES */}
  <section id="courses">
    {/* HEADER */}
    <div className="container-fluid">
      <div className="row">
        <div className="col p-3 background-black">
          <h2 className="text-center text-light large-text p-5 mb-0">
            Extra Courses
          </h2>
        </div>
      </div>
    </div>
    {/* CARDS */}
    <div className="container-fluid">
      <div className="row bg-dark p-5">
        {/* col 4/12 */}
        <div className="col-lg-4 col-sm-6 d-flex justify-content-center mb-3">
          <div className="card background-black">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1558698972-c50e325e6799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="Card image cap"
            />
            <h5 className="card-title background-green text-white p-3 text-center">
              Front-End Course
            </h5>
            <div className="card-body">
              <p className="card-text text-white">
                Learn how to build beautiful webpage designs. Apply color
                schemes and master spacing and positions.
              </p>
              <a href="#" className="btn yellow-background btn-block btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* col 4/12 */}
        <div className="col-lg-4 col-sm-6 d-flex justify-content-center mb-3">
          <div className="card background-black">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
              alt="Card image cap"
            />
            <h5 className="card-title background-green text-white p-3 text-center">
              Back-End Course
            </h5>
            <div className="card-body">
              <p className="card-text text-light">
                Learn how to work with databases, securely storing information
                and producing outputs.{" "}
              </p>
              <a href="#" className="btn yellow-background btn-block btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* col 4/12 */}
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center mb-3">
          <div className="card background-black">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1514996696876-5c856ca2a0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="Card image cap"
            />
            <h5 className="card-title background-green text-white p-3 text-center">
              Full-Stack Course
            </h5>
            <div className="card-body ">
              <p className="card-text text-light">
                If your up for the challenge, the full-stack course will show
                you how to create, deploy and maintain full dynamic websites.
              </p>
              <a href="#" className="btn yellow-background btn-block btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="page-footer font-small">
    <div className="background-green text-white">
      <div className="container">
        {/* Grid row*/}
        <div className="row py-4 d-flex align-items-center">
          {/* Grid column */}
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 className="mb-0">Get connected with us on social networks!</h6>
          </div>
          {/* Grid column */}
          <div className="col-md-6 col-lg-7 text-center text-md-right">
            {/* Facebook */}
            <a className="fb-ic">
              <i className="fab fa-facebook-f white-text mr-4"> </i>
            </a>
            {/* Twitter */}
            <a className="tw-ic">
              <i className="fab fa-twitter white-text mr-4"> </i>
            </a>
            {/* Google +*/}
            <a className="gplus-ic">
              <i className="fab fa-google-plus-g white-text mr-4"> </i>
            </a>
            {/*Linkedin */}
            <a className="li-ic">
              <i className="fab fa-linkedin-in white-text mr-4"> </i>
            </a>
            {/*Instagram*/}
            <a className="ins-ic">
              <i className="fab fa-instagram white-text"> </i>
            </a>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row*/}
      </div>
    </div>
    {/* Footer Links */}
    <div className="container text-center mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-12 col-lg-4 mx-auto mb-4 ">
          {/* Content */}
          <h6 className="text-uppercase font-weight-bold text-dark">
           Sri Krishna college of technology 
          </h6>
          <hr className="mb-4 mt-0 d-inline-block mx-auto" />
          <p>
            SKCT is one one of the renounced institutions that provides excellence in academics and curricuum.
          </p>
        </div>
        {/* Grid column */}
        <div className="col-md-6 col-lg-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase font-weight-bold">College Links</h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
          <p>
            <a href="#!">skct.edu.in</a>
          </p>
          <p>
            <a href="#!">skct.com</a>
          </p>
          {/* <p>
            <a href="#!">Course Content</a>
          </p> */}
        </div>
        {/* Grid column */}
        <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase font-weight-bold">Courses</h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
          <p>
            <a href="#!">Front-End Development</a>
          </p>
          <p>
            <a href="#!">Back-End Development</a>
          </p>
          <p>
            <a href="#!">Full-Stack Development</a>
          </p>
        </div>
        {/* Grid column */}
        <div className="col-md-12 col-lg-3 mx-auto mb-4 text-center">
          {/* Links */}
          <h6 className="text-uppercase font-weight-bold">Contact Us</h6>
          <hr className="mb-4 mt-0 d-inline-block mx-auto" />
          {/* <p>
            <i className="fas fa-home mr-3" /> 1234 Maple Drive Los Angeles
            12323
          </p> */}
          <p>
            <i className="fas fa-envelope mr-3" /> 727821tucs130@skct.edu.in
          </p>
          <p>
            <i className="fas fa-phone mr-3" /> +9638952369
          </p>
        </div>
      </div>
    </div>
    {/* Copyright to MEEEEEEE */}
    {/* <div className="footer-copyright text-center py-3">
      © 2019 Copyright:
      <a href="https://codepen.io/erickkg/full/zQbZEV" target="_blank">
        Erick Gonzalez
      </a>
    </div> */}
  </footer>
</>

  )
}
