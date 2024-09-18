// import React, { useState } from "react";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     username: "",
//     email: "",
//     password: "",
//     phone: "",
//     dob: "",
//     gender: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission logic here
//   };

//   return (
//     <div style={styles.body}>
//       <div style={styles.container}>
//         <div style={styles.formContainer}>
//           <h2>Signup</h2>
//           <form id="signupForm" onSubmit={handleSubmit}>
//             <label htmlFor="fullname">Full Name:</label>
//             <input
//               type="text"
//               id="fullname"
//               name="fullname"
//               value={formData.fullname}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />

//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />

//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />

//             <label htmlFor="phone">Phone Number:</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />

//             <label htmlFor="dob">Date of Birth:</label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />

//             <label htmlFor="gender">Gender:</label>
//             <select
//               id="gender"
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>

//             <button type="submit" style={styles.button}>
//               Signup
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   body: {
//     fontFamily: "Arial, sans-serif",
//     backgroundImage:
//       'url("https://www.forbes.com/advisor/wp-content/uploads/2022/08/Image_-Free_Job_Sites.jpeg.jpg")',
//     backgroundSize: "cover",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     margin: 0,
//   },
//   container: {
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     padding: "30px",
//     borderRadius: "10px",
//     display: "flex",
//     flexDirection: "column",
//     width: "400px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
//   formContainer: {
//     marginBottom: "20px",
//     marginTop: "100px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#28a745",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default SignupForm;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [usrnm, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwrd, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  // const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/Signup", {
        fullname,
        usrnm,
        email,
        pwrd,
        phone,
        dob

      });

      if (response.status === 200) {
        alert("User Registered!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("An error occurred while adding the job.");
    }
  };

  return (
    <div className="loginbg">
      <div className="ring">
        <div className="login">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <br></br>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Username"
                value={usrnm}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br></br>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br></br>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Password"
                value={pwrd}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Mobile"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <br></br>
            <div className="inputBx">
              <input
                type="date"
                placeholder="DD-MM-YY"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <br></br>


            <div className="inputBx">
              <input type="submit" value="Sign Up" />
            </div>
          </form>

          <div className="links">
            {/* <Link to="/forgot-password">Forget Password</Link> */}
            <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignupForm;
