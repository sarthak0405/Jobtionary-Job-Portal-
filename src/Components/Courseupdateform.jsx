// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const Courseupdateform = () => {
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");

//   useEffect(() => {
//     updatecourse();
//   }, []);

//   const updatecourse = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8000/updatecourse/${name}`, {
//         name,
//         course,
//       });
//       console.log("Data updated successfully");
//     } catch (err) {
//       console.error("Error updating data:", err);
//     }
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           className="container1"
//           style={{ position: "relative", top: "100px" }}
//         >
//           <h1 className="hone">Update the Applicant</h1>
//           <div className="course-images"></div>
//           <form id="enrollmentForm" onSubmit={updatecourse}>
//             <div className="form-group">
//               <label htmlFor="fullName">Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 required=""
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="course">Select Course</label>
//               <select
//                 id="course"
//                 name="course"
//                 required=""
//                 value={course}
//                 onChange={(e) => setCourse(e.target.value)}
//               >
//                 <option value="">--Choose a course--</option>
//                 <option value="Graphic Design">Graphic Design</option>
//                 <option value="Marketing Strategy">Marketing Strategy</option>
//                 <option value="Market Leading">Market Leading</option>
//                 <option value="Search Engine Optimizations">
//                   Search Engine Optimizations
//                 </option>
//                 <option value="Web Design">Web Design</option>
//               </select>
//             </div>

//             <button className="subbtn" type="submit">
//               Enroll Now
//             </button>
//           </form>
//           <div id="responseMessage" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Courseupdateform;
