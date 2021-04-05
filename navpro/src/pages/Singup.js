// import React from 'react';
// import Axios from "axios";
// import { useState } from "react";
// import useForm from './useForm';
// import validate from './validateInfo';
// const Singup = () => {
//     const { handleChange, values, handleSubmit, errors } = useForm(validate);
//     const [user, setUser] = useState({ username: "", email: "", password: "", cpassword: "" });
//     const { username, email, password, cpassword } = user

//     const onInputChange = e => {

//         setUser({ ...user, [e.target.name]: e.target.value })
//         console.log(e.target.val);
//     };
//     const onsubmit = async e => {
//         e.preventDefault();
//         await Axios.post("http://localhost:8001/singup", user);
//         // history.push("/Leadmasterview");
//     };
//     return (

//         <div className="form-contend-right">
//             {/* <form className="form" onSubmit={handleSubmit}> */}
//             <form className="form" onSubmit={e => onsubmit(e)}>
//                 <h1>Get statered with todya</h1>

//                 <div className="username">
//                     <label htmlFor="username" className="form-label">
//                         username
//                     </label>
//                     <input
//                         id="username"
//                         type="text"
//                         name="username"
//                         className="form-input"
//                         placeholder="Enter Your UserName"
//                         value={username}
//                         onChange={e => onInputChange(e)}
//                     />
//                     {errors.username && <p>{errors.username}</p>}
//                 </div>
//                 <div className="email ">
//                     <label htmlFor="email" className="form-label">
//                         email
//                     </label>
//                     <input
//                         id="email"
//                         type="email"
//                         name="email"
//                         className="form-input"
//                         placeholder="Enter Your Email"
//                         value={email}
//                         onChange={e => onInputChange(e)}
//                     />
//                     {errors.email && <p>{errors.email}</p>}
//                 </div>
//                 <div className="password">
//                     <label htmlFor="password" className="form-label">
//                         Password
//                     </label>
//                     <input
//                         id="password"
//                         type="password"
//                         name="password"
//                         className="form-input"
//                         placeholder="Enter Your password"
//                         value={password}
//                         onChange={e => onInputChange(e)}
//                     />
//                     {errors.password && <p>{errors.password}</p>}
//                 </div>

//                 <div className="password ">
//                     <label htmlFor="password" className="form-label">
//                         cPassword
//                     </label>
//                     <input
//                         id="password"
//                         type="password"
//                         name="cpassword"
//                         className="form-input"
//                         placeholder="Enter Your Epassword2mail"

//                         value={cpassword}
//                         onChange={e => onInputChange(e)}
//                     />
//                     {errors.cpassword && <p>{errors.cpassword}</p>}
//                 </div>
//                 <div>
//                     <button>Add User</button>
//                     <button className="form-input-btn" type="submit"> singup</button>
//                     <span className="form-input-login">Already have an Account?  Login <a href="Login">here</a></span>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Singup
