// import React from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Adminlogin = () => {
//   const [usrnm, setUsrnm] = useState("");
//   const [pwrd, setPwrd] = useState("");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/adminlogin/", {
//         usrnm,
//         pwrd,
//       });

//       if (response.data === "exist") {
//         console.log("Data exists");
//         navigate("/");
//       } else {
//         console.log("Data does not exist");
//         setMessage("Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred");
//     }
//   };

//   return (
//     <>
//       <div className="loginbg">
//         <div className="ring">
//           <div className="login">
//             <h2>Admin Login</h2>
//             {/* <link href="login.css" rel="stylesheet" /> */}
//             <div className="inputBx">
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="inputBx">
//               <input type="password" placeholder="Password" />
//             </div>
//             <div className="inputBx">
//               <input
//                 type="submit"
//                 defaultValue="Sign in"
//                 onClick={handleSubmit}
//               />
//             </div>
//             <div className="links">
//               <a href="/">Forget Password</a>
//               <a href="signup.html">Signup</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Adminlogin;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const [usrnm, setUsrnm] = useState("");
  const [pwrd, setPwrd] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/adminlogin/", {
        usrnm,
        pwrd,
      });

      if (response.data === "exist") {
        console.log("Data exists");
        navigate("/Dashboard"); // Redirect to /Dashboard
      } else {
        console.log("Data does not exist");
        setMessage("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred");
    }
  };

  return (
    <div className="loginbg">
      <div className="ring">
        <div className="login">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Username"
                value={usrnm}
                onChange={(e) => setUsrnm(e.target.value)}
              />
            </div>
            <br></br>
            <div className="inputBx">
              <input
                type="password"
                placeholder="Password"
                value={pwrd}
                onChange={(e) => setPwrd(e.target.value)}
              />
            </div>
            <br></br>
            <div className="inputBx">
              <input type="submit" value="Sign in" />
            </div>
          </form>
          <div className="links">
            <a href="/">Forget Password</a>
            <a href="signup.html">Signup</a>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
