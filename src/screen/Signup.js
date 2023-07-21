// import React, { useState }from "react";
// import { Link,useNavigate } from "react-router-dom";
// import '../Login.css';
// export default function Signup() {
// const [credentials, setCredentials] = useState({name:"",email:"",password:"",geoLocation:""})
// let navigate = useNavigate();
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try{
//   const response = await fetch ("http://localhost:5000/api/createuser",{
//     method:'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body:JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geoLocation })
   
//   });
//   const json = await response.json()
//     console.log(json);
//     if (!json.success) {
//       alert("enter valid credentials");
//     }
//     if (json.success) {
//       navigate("/");
//     }
// }catch (err) {
//   console.log(err);
//   alert("enter valid credentials");
// }    
//   };

//   const Change=(event) =>{
//     setCredentials({...credentials,[event.target.name]:event.target.value}) 
//   };

//   return (
//     <>
//       <div
//         id="signup"
//         className=" bg-dark text-white d-inline-flex justify-content-center"
//       >
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3 ">
//             <label htmlfor="name" id="boxes" className="form-label">
//               Full Name
//             </label>
//             <input
//               type="text"
//               className="form-control border-3 text-white "
//               style={{ "border-color": "white", "background-color": "black" }}
//               id="name"
//               name="name"
//               value={credentials.name}
//               onChange={Change}
//             />
//             <div id="emailHelp" className="form-text"></div>
//           </div>
//           <div className="mb-3">
//             <label
//               htmlfor="exampleInputEmail1"
//               id="boxes"
//               className="form-label"
//             >
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control border-3 text-white"
//               style={{ "border-color": "white", "background-color": "black" }}
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               name="email"
//               value={credentials.email}
//               onChange={Change}
//             />
//           </div>
//           <div className="mb-3">
//             <label
//               htmlfor="exampleInputPassword1"
//               id="boxes"
//               className="form-label"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control border-3 text-white"
//               style={{ "border-color": "white", "background-color": "black" }}
//               id="exampleInputPassword1"
//               name="password"
//               value={credentials.password}
//               onChange={Change}
//             />
//           </div>
//           <div className="mb-3">
//             <label
//               htmlfor="exampleInputPassword1"
//               id="boxes"
//               className="form-label"
//             >
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control border-3 text-white"
//               style={{ "border-color": "white", "background-color": "black" }}
//               id="exampleInputPassword1"
//               name="geoLocation"
//               value={credentials.geoLocation}
//               onChange={Change}
//             />
//           </div>
//           <div className="mb-3 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="exampleCheck1"
//             />
//             <label className="form-check-label" htmlfor="exampleCheck1">
//               Keep me signed in
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="text-dark fw-bold m-3 btn btn-primary"
//             style={{ "background-color": "rgb(14 194 75)" }}
//           >
//             Submit
//           </button>
//           <Link
//             to="/login"
//             className="fw-bold m-3 btn btn-primary "
//             style={{ "background-color": "red" }}
//           >
//             Already a User
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }
