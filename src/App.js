import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Firsts from "./first_page/firsts";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Appp from "./Login page/Appp";
//import Login from "./Login page/SignUp";
import SigninupPage from "./Login page/SignUp";
import { Firsts } from "./first_page/first";
//import Firsts from "./first_page/firsts";
function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* <Navbar /> */}
        {/* <Routes>
           <Route exact path="/login" element={<Appp />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes> */}
      
    {/* <Firsts/> */}
      {/* </Router>  */}
          <Routes>
            <Route exact path="/Login" element={<SigninupPage/>}/>
          <Route exact path="/full" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/" element={<Firsts />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
         
          {/* <Route exact path="/" element={<Firsts />} /> */}

          {/* <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} /> */}
          </Routes>
    </div>
  );
}

export default App;
