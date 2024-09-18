import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// const Login = () => {
//   const [usrnm, setusrnm] = useState("");
//   const [message, setMessage] = useState("");
//   const [pwrd, setPwrd] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`http://localhost:8000/login/`, {
//         usrnm: usrnm,
//         pwrd: pwrd,
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
//     <div className="loginbg">
//       <div className="ring">
//         <div className="login">
//           <h2>Login</h2>
//           <link href="login.css" rel="stylesheet" />
//           <div className="inputBx">
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={(e) => setusrnm(e.target.value)}
//             />
//           </div>
//           <div className="inputBx">
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPwrd(e.target.value)}
//             />
//           </div>
//           <div className="inputBx">
//             <input
//               type="submit"
//               defaultValue="Sign in"
//               onClick={() => handleSubmit({ usrnm })}
//             />
//           </div>
//           <div className="links">
//             <a href="/">Forget Password</a>
//             <a href="signup.html">Signup</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./login.css"; // Ensure the CSS file is properly imported

const Login = () => {
  const [usrnm, setUsrnm] = useState("");
  const [pwrd, setPwrd] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login/", {
        usrnm,
        pwrd,
      });

      if (response.data === "exist") {
        console.log("Data exists");
        navigate("/home");
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
          <h2>Login</h2>
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
          {message && <div className="message">{message}</div>}
          <div className="links">
            <Link to="/forgot-password">Forget Password</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
