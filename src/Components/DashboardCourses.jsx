// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Courseupdateform from "./Courseupdateform";

// const DashboardCourses = () => {
//   const [coursedata, setCourseData] = useState([]);
//   const [showform, setShowform] = useState(false);
//   //Course applicants data fetching

//   const fetchcourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/getcourses");
//       setCourseData(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchcourses();
//   }, []);

//   const handledelete = async (name) => {
//     try {
//       console.log(`deleting${name}`);
//       await axios.delete(`http://localhost:8000/deletedashboardcourse/${name}`);
//       fetchcourses();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const clickupdate = async () => {
//     setShowform(true);
//   };

//   return (
//     <>
//       {/* SIDEBAR */}
//       <section id="sidebar">
//         <a href="#" className="brand">
//           <i className="bx bxs-smile" />
//           <span className="text">JOBSTIONARY</span>
//         </a>
//         <ul className="side-menu top">
//           <li>
//             <a href="#">
//               <i className="bx bxs-dashboard" />
//               <Link to="/Dashboard">
//                 <span className="text">Dashboard</span>
//               </Link>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="bx bxs-shopping-bag-alt" />
//               <Link to="/Jobseekers">
//                 <span className="text">JOB SEEKERS</span>
//               </Link>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="bx bxs-doughnut-chart" />
//               <span className="text">Campanies</span>
//             </a>
//           </li>

//           <li className="active">
//             <a href="#">
//               <i className="bx bxs-message-dots" />
//               <span className="text">courses</span>
//             </a>
//           </li>

//           <li>
//             <a href="about.html">
//               <i className="bx bxs-group" />
//               <span className="text">
//                 Team <link href="abouthtml" />
//               </span>
//             </a>
//           </li>
//         </ul>

//         <ul className="side-menu">
//           <li>
//             <a href="contact.html">
//               <i className="bx bxs-group" />
//               <span className="text">
//                 Contact Us <link href="contact.html" />
//               </span>
//             </a>
//           </li>

//           <li>
//             <a href="index.html">
//               <i className="bx bxs-group" />
//               <span className="text">
//                 Logout <link href="index.html" />
//               </span>
//             </a>
//           </li>
//         </ul>
//       </section>
//       {/* SIDEBAR */}
//       {/* CONTENT */}
//       <section id="content">
//         {/* NAVBAR */}
//         <nav>
//           <i className="bx bx-menu" />
//           <a href="#" className="nav-link">
//             Categories
//           </a>
//           <form action="#">
//             <div className="form-input">
//               <input type="search" placeholder="Search..." />
//               <button type="submit" className="search-btn">
//                 <i className="bx bx-search" />
//               </button>
//             </div>
//           </form>
//           <input type="checkbox" id="switch-mode" hidden="" />
//           <label htmlFor="switch-mode" className="switch-mode" />
//           <a href="#" className="notification">
//             <i className="bx bxs-bell" />
//             <span className="num">8</span>
//           </a>
//           <a href="#" className="profile">
//             <img src="img/people.png" alt="Profile" />
//           </a>
//         </nav>
//         {/* NAVBAR */}
//         {/* MAIN */}
//         <main>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col">
//                 <div className="head-title">
//                   <div className="left">
//                     <h1>Admin Dashboard /</h1> <h3>Courses</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <div className="table-data">
//                   <div className="order">
//                     <div className="head">
//                       <h3>Job Seekers</h3>
//                       <i className="bx bx-search" />
//                       <i className="bx bx-filter" />
//                     </div>
//                     <table className="table">
//                       <thead>
//                         <tr>
//                           <th>User</th>
//                           <th>Appplied Course</th>
//                           <th></th>
//                           <th>Edit</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {coursedata.map((e) => {
//                           return (
//                             <>
//                               <tr>
//                                 <td>
//                                   <img src="img/people.png" />
//                                   <p>{e.name}</p>
//                                 </td>
//                                 <td>{e.course}</td>
//                                 <td>
//                                   <h6
//                                     style={{
//                                       textDecoration: "underline",
//                                       color: "red",
//                                     }}
//                                     onClick={() => handledelete(e.name)}
//                                   >
//                                     Delete
//                                   </h6>
//                                 </td>{" "}
//                                 <td>
//                                   <h6
//                                     style={{
//                                       textDecoration: "underline",
//                                       color: "Blue",
//                                     }}
//                                     onClick={clickupdate}
//                                   >
//                                     Update
//                                   </h6>
//                                 </td>{" "}
//                               </tr>
//                             </>
//                         {showform && <Courseupdateform />}
//                           );
//                         })}
//                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//         {/* MAIN */}
//       </section>
//       {/* CONTENT */}
//     </>
//   );
// };

// export default DashboardCourses;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DashboardCourses = () => {
  const [coursedata, setCourseData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formValues, setFormValues] = useState({ name: "", course: "" });

  // Course applicants data fetching
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getcourses");
      setCourseData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (name) => {
    try {
      console.log(`deleting ${name}`);
      await axios.delete(`http://localhost:8000/deletedashboardcourse/${name}`);
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateClick = (course) => {
    setSelectedCourse(course);
    setFormValues({ name: course.name, course: course.course });
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/updatecourse/${selectedCourse.name}`,
        formValues
      );
      setShowForm(false);
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">JOBSTIONARY</span>
        </a>
        <ul className="side-menu top">
          <li >
            <a href="#">
              <i className="bx bxs-dashboard" />
              <Link to="/dashboard">
                <span className="text">Dashboard</span>
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-shopping-bag-alt" />
              <Link to="/Jobseekers">
                <span className="text">JOB SEEKERS</span>
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-doughnut-chart" />
              <Link to='/jobs'><span className="text">Jobs</span></Link>
            </a>
          </li>
          <li className="active">
            <a href="#">
              <i className="bx bxs-message-dots" />
              <Link to="/DashboardCourses">
                <span className="text">courses</span>
              </Link>
            </a>
          </li>
          <li>
            <a href="about.html">
              <i className="bx bxs-group" />
              <Link to='/about'>
                <span className="text">  Team

                </span></Link>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="contact.html">
              <i className="bx bxs-group" />
              <Link to='/contact'>
                <span className="text">
                  Contact Us
                  {/* <link href="contact.html" /> */}
                </span>
              </Link>
            </a>
          </li>
          <li>
            <a href="index.html">
              <i className="bx bxs-group" />
              <Link to='/'> <span className="text">
                Logout
                {/* <link href="index.html" /> */}
              </span></Link>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <a href="#" className="nav-link">
            Categories
          </a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search" />
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" />
          <a href="#" className="notification">
            <i className="bx bxs-bell" />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="img/people.png" alt="Profile" />
          </a>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="head-title">
                  <div className="left">
                    <ul className="breadcrumb">
                      <li>
                        <a href="#">Dashboard</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />
                      </li>
                      <li>
                        <a className="active" href="#">
                          Courses
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="table-data">
                  <div className="order">
                    <div className="head">
                      <h3>Course Applicants</h3>
                      <i className="bx bx-search" />
                      <i className="bx bx-filter" />
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Applied Course</th>
                          <th>Action</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {coursedata.map((course) => (
                          <tr key={course.name}>
                            <td>
                              <img src="img/people.png" alt="User" />
                              <p>{course.name}</p>
                            </td>
                            <td>{course.course}</td>
                            <td>
                              <h6
                                style={{
                                  textDecoration: "underline",
                                  color: "red",
                                  cursor: "pointer",
                                }}
                                onClick={() => handleDelete(course.name)}
                              >
                                Delete
                              </h6>
                            </td>
                            <td>
                              <h6
                                style={{
                                  textDecoration: "underline",
                                  color: "blue",
                                  cursor: "pointer",
                                }}
                                onClick={() => handleUpdateClick(course)}
                              >
                                Update
                              </h6>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {showForm && (
              <div style={{ marginTop: "20px" }}>
                <form onSubmit={handleFormSubmit}>
                  <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="name">Name: </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="course">Course: </label>

                    <select
                      id="course"
                      name="course"
                      value={formValues.course}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">--Choose a course--</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Marketing Strategy">
                        Marketing Strategy
                      </option>
                      <option value="Market Leading">Market Leading</option>
                      <option value="Search Engine Optimizations">
                        Search Engine Optimizations
                      </option>
                      <option value="Web Design">Web Design</option>
                    </select>
                  </div>
                  <button type="submit" style={{ width: "200px" }}>
                    Update Course
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    style={{ marginLeft: "10px", width: "200px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
};

export default DashboardCourses;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const DashboardCourses = () => {
//   const [coursedata, setCourseData] = useState([]);
//   const [showform, setShowform] = useState(false);
//   const [updateName, setUpdateName] = useState("");
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");

//   //Course applicants data fetching
//   const fetchcourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/getcourses");
//       setCourseData(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchcourses();
//   }, []);

//   const handledelete = async (name) => {
//     try {
//       console.log(`deleting${name}`);
//       await axios.delete(`http://localhost:8000/deletedashboardcourse/${name}`);
//       fetchcourses();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const clickupdate = async (name) => {
//     setShowform(true);
//     setUpdateName(name); // Set the name to update
//   };

//   const updatecourse = async (e) => {
//     console.log(`updating${updateName}`)
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8000/update/${updateName}`, {
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
//       {/* Existing code */}
//       {/* MAIN */}
//       <main>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col">
//               <div className="table-data">
//                 <div className="order">
//                   <div className="4505">
//                     <h3>Job Seekers</h3>
//                     <i className="bx bx-search" />
//                     <i className="bx bx-filter" />
//                   </div>
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th>User</th>
//                         <th>Appplied Course</th>
//                         <th></th>
//                         <th>Edit</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {coursedata.map((e) => (
//                         <tr key={e.name}>
//                           <td>
//                             <img src="img/people.png" alt="User" />
//                             <p>{e.name}</p>
//                           </td>
//                           <td>{e.course}</td>
//                           <td>
//                             <h6
//                               style={{
//                                 textDecoration: "underline",
//                                 color: "red",
//                               }}
//                               onClick={() => handledelete(e.name)}
//                             >
//                               Delete
//                             </h6>
//                           </td>
//                           <td>
//                             <h6
//                               style={{
//                                 textDecoration: "underline",
//                                 color: "Blue",
//                               }}
//                               onClick={() => clickupdate(e.name)}
//                             >
//                               Update
//                             </h6>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       {/* MAIN */}
//       {/* Add the form inside the main section */}
//       {showform && (
//         <div className="form-container">
//           <form>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="course">Course</label>
//               <input
//                 type="text"
//                 id="course"
//                 name="course"
//                 onChange={(e) => {
//                   setCourse(e.target.value);
//                 }}
//               />
//             </div>
//             {/* Add your submit button here */}
//             <button type="submit" onClick={updatecourse}>
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default DashboardCourses;
