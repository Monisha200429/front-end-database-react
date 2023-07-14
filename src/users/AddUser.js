// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const AddUser = () => {
//   let navigate = useNavigate();

//   const [user, setUser] = useState({
//     name: '',     
//     dept: '',
//     cgpa: ''
//   });


//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.value]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     console.log(user);
//     await axios.post("http://localhost:8080/poststu", user);
//     navigate("/");
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Register User</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="Name" className="form-label">
//                 Name 
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your name"
//                 name="name"
//                 value={user.name}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="dept" className="form-label">
//                 dept
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your dept"
//                 name="dept"
//                 value={user.dept}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="cgpa" className="form-label">
//                 CGPA   
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your cgpa"
//                 name="cgpa"
//                 value={user.cgpa}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <Link to ="/Full"><button type="submit" className="btn btn-outline-primary">
             
//               Submit
//             </button>
//             </Link>
//             <Link className="btn btn-outline-danger mx-2" to="/">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddUser;
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const[name,setName] = useState();
  const[dept,setDept] = useState();
  const[cgpa,setCgpa] = useState();

    const onNameChange =(event) => {
        setName(event.target.value)
    } 
    const onDeptChange =(event) => {
        setDept(event.target.value)
    } 
    const onCgpaChange =(event) => {
        setCgpa(event.target.value)
    } 
  

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    await axios.post("http://localhost:8080/poststu", {name:name,dept:dept,cgpa:cgpa});
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name 
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onNameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dept" className="form-label">
                dept
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your dept"
                name="dept"
                value={dept}
                onChange={onDeptChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cgpa" className="form-label">
                CGPA   
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your cgpa"
                name="cgpa"
                value={cgpa}
                onChange={onCgpaChange}
              />
            </div>
           <button type="submit" className="btn btn-outline-primary">
             
              Submit
            </button>
           
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;


