// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // const Jobseekers = () => {
// //   const [jobdata, setJobData] = useState([]);

// //   //jobseekers data fetching
// //   const fetchjobseekerData = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:8000/getjobapplicant");
// //       setJobData(res.data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchjobseekerData();
// //   }, []);

// //   const handledelete = (usrname) => {
// //     try {
// //       axios.delete(`http://localhost:8000/jobapplicant/${usrname}`);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <>
// //       {/* SIDEBAR */}
// //       <section id="sidebar">
// //         <a href="#" className="brand">
// //           <i className="bx bxs-smile" />
// //           <span className="text">JOBSTIONARY</span>
// //         </a>
// //         <ul className="side-menu top">
// //           <li>
// //             <a href="#">
// //               <i className="bx bxs-dashboard" />
// //               <Link to="/Dashboard">
// //                 <span className="text">Dashboard</span>
// //               </Link>
// //             </a>
// //           </li>
// //           <li className="active">
// //             <a href="#">
// //               <i className="bx bxs-shopping-bag-alt" />
// //               <span className="text">JOB SEEKERS</span>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#">
// //               <i className="bx bxs-doughnut-chart" />
// //               <span className="text">Campanies</span>
// //             </a>
// //           </li>

// //           <li>
// //             <a href="#">
// //               <i className="bx bxs-message-dots" />
// //               <Link to="/DashboardCourses">
// //                 <span className="text">courses</span>
// //               </Link>
// //             </a>
// //           </li>

// //           <li>
// //             <a href="about.html">
// //               <i className="bx bxs-group" />
// //               <span className="text">
// //                 Team <link href="abouthtml" />
// //               </span>
// //             </a>
// //           </li>
// //         </ul>

// //         <ul className="side-menu">
// //           <li>
// //             <a href="contact.html">
// //               <i className="bx bxs-group" />
// //               <span className="text">
// //                 Contact Us <link href="contact.html" />
// //               </span>
// //             </a>
// //           </li>

// //           <li>
// //             <a href="index.html">
// //               <i className="bx bxs-group" />
// //               <span className="text">
// //                 Logout <link href="index.html" />
// //               </span>
// //             </a>
// //           </li>
// //         </ul>
// //       </section>
// //       {/* SIDEBAR */}
// //       {/* CONTENT */}
// //       <section id="content">
// //         {/* NAVBAR */}
// //         <nav>
// //           <i className="bx bx-menu" />
// //           <a href="#" className="nav-link">
// //             Categories
// //           </a>
// //           <form action="#">
// //             <div className="form-input">
// //               <input type="search" placeholder="Search..." />
// //               <button type="submit" className="search-btn">
// //                 <i className="bx bx-search" />
// //               </button>
// //             </div>
// //           </form>
// //           <input type="checkbox" id="switch-mode" hidden="" />
// //           <label htmlFor="switch-mode" className="switch-mode" />
// //           <a href="#" className="notification">
// //             <i className="bx bxs-bell" />
// //             <span className="num">8</span>
// //           </a>
// //           <a href="#" className="profile">
// //             <img src="img/people.png" alt="Profile" />
// //           </a>
// //         </nav>
// //         {/* NAVBAR */}
// //         {/* MAIN */}
// //         <main>
// //           <div className="container-fluid">
// //             <div className="row">
// //               <div className="col">
// //                 <div className="head-title">
// //                   <div className="left">
// //                     <h1>Admin Dashboard /</h1> <h3>Job seekers</h3>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="row">
// //               <div className="col">
// //                 <div className="table-data">
// //                   <div className="order">
// //                     <div className="head">
// //                       <h3>Job Seekers</h3>
// //                       <i className="bx bx-search" />
// //                       <i className="bx bx-filter" />
// //                     </div>
// //                     <table className="table">
// //                       <thead>
// //                         <tr>
// //                           <th>User</th>
// //                           <th>Educational Qualification</th>
// //                           {/* <th>Status</th> */}
// //                           <th>Edit</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         {jobdata.map((e) => (
// //                           <tr key={e.id}>
// //                             <td>
// //                               {/* <img src="img/people.png" alt="Person" /> */}
// //                               <p>{e.name}</p>
// //                             </td>
// //                             <td>{e.education}</td>
// //                             {/* <td>
// //                               <select
// //                                 className="form-control"
// //                                 style={{ borderRadius: "7px", width: "200px" }}
// //                               >
// //                                 <option value="Completed">Completed</option>
// //                                 <option value="Pending">Pending</option>
// //                                 <option value="Process">Process</option>
// //                               </select>
// //                             </td> */}
// //                             <td>
// //                               <h6
// //                                 style={{
// //                                   textDecoration: "underline",
// //                                   color: "red",
// //                                 }}
// //                                 onClick={handledelete(e.name)}
// //                               >
// //                                 Delete
// //                               </h6>
// //                             </td>{" "}
// //                             <td>
// //                               <h6
// //                                 style={{
// //                                   textDecoration: "underline",
// //                                   color: "Blue",
// //                                 }}
// //                               >
// //                                 Update
// //                               </h6>
// //                             </td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </main>
// //         {/* MAIN */}
// //       </section>
// //       {/* CONTENT */}
// //     </>
// //   );
// // };

// // export default Jobseekers;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Jobseekers = () => {
//   const [jobdata, setJobData] = useState([]);

//   //jobseekers data fetching
//   const fetchjobseekerData = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/getjobapplicant");
//       setJobData(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchjobseekerData();
//   }, []);

//   const handledelete = async (name) => {
//     try {
//       console.log(`deleting${name}`);
//       await axios.delete(`http://localhost:8000/deletejobapplicant/${name}`);
//       fetchjobseekerData(); // Fetch updated data after deletion
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:8000/updatejob/${selectedCourse.name}`,
//         formValues
//       );
//       setShowForm(false);
//       fetchCourses();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleUpdateClick = (course) => {
//     setSelectedCourse(course);
//     setFormValues({ name: course.name, course: course.course });
//     setShowForm(true);
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
//           <li className="active">
//             <a href="#">
//               <i className="bx bxs-shopping-bag-alt" />
//               <span className="text">JOB SEEKERS</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="bx bxs-doughnut-chart" />
//               <span className="text">Companies</span>
//             </a>
//           </li>

//           <li>
//             <a href="#">
//               <i className="bx bxs-message-dots" />
//               <Link to="/DashboardCourses">
//                 <span className="text">courses</span>
//               </Link>
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
//                     <h1>Admin Dashboard /</h1> <h3>Job seekers</h3>
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
//                           <th>Educational Qualification</th>
//                           <th>Edit</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {jobdata.map((e) => (
//                           <tr key={e.id}>
//                             <td>
//                               <p>{e.name}</p>
//                             </td>
//                             <td>{e.education}</td>
//                             <td>
//                               <h6
//                                 style={{
//                                   textDecoration: "underline",
//                                   color: "red",
//                                 }}
//                                 onClick={() => handledelete(e.name)} // Correct usage here
//                               >
//                                 Delete
//                               </h6>
//                             </td>
//                             <td>
//                               <h6
//                                 style={{
//                                   textDecoration: "underline",
//                                   color: "blue",
//                                 }}
//                               >
//                                 Update
//                               </h6>
//                             </td>
//                           </tr>
//                         ))}
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

// export default Jobseekers;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Jobseekers = () => {
  const [jobdata, setJobData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedJobSeeker, setSelectedJobSeeker] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    education: "",
    position: "",
  });

  // Job seekers data fetching
  const fetchJobSeekerData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getjobapplicant");
      setJobData(res.data);
    } catch (err) {
      console.log("Error fetching job seekers:", err);
    }
  };

  useEffect(() => {
    fetchJobSeekerData();
  }, []);

  const handleDelete = async (name) => {
    try {
      await axios.delete(`http://localhost:8000/deletejobapplicant/${name}`);
      fetchJobSeekerData(); // Fetch updated data after deletion
    } catch (err) {
      console.log("Error deleting job seeker:", err);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form with values:", formValues);
      await axios.put(
        `http://localhost:8000/updatejob/${selectedJobSeeker.name}`,
        formValues
      );
      setShowForm(false);
      fetchJobSeekerData();
    } catch (err) {
      console.log("Error updating job seeker:", err);
    }
  };

  const handleUpdateClick = (jobSeeker) => {
    setSelectedJobSeeker(jobSeeker);
    setFormValues({
      name: jobSeeker.name,
      education: jobSeeker.education,
      position: jobSeeker.position,
    });
    setShowForm(true);
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
              <Link to='/dashboard'><span className="text">Dashboard</span></Link>
            </a>
          </li>
          <li className="active">
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
          <li>
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
          <input type="checkbox" id="switch-mode" hidden="" />
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
                          Job Seekers
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
                      <h3>Job Seekers</h3>
                      <i className="bx bx-search" />
                      <i className="bx bx-filter" />
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Educational Qualification</th>
                          <th>Position</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobdata.map((e) => (
                          <tr key={e.id}>
                            <td>
                              <p>{e.name}</p>
                            </td>
                            <td>{e.education}</td>
                            <td>{e.position}</td>
                            <td>
                              <h6
                                style={{
                                  textDecoration: "underline",
                                  color: "red",
                                }}
                                onClick={() => handleDelete(e.name)}
                              >
                                Delete
                              </h6>
                            </td>
                            <td>
                              <h6
                                style={{
                                  textDecoration: "underline",
                                  color: "blue",
                                }}
                                onClick={() => handleUpdateClick(e)}
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
              <div className="form-container">
                <h3>Update Job Seeker</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formValues.name}
                      onChange={(e) =>
                        setFormValues({ ...formValues, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="education">Education</label>
                    <input
                      type="text"
                      id="education"
                      value={formValues.education}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          education: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input
                      type="text"
                      id="position"
                      value={formValues.position}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          position: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button type="submit">Submit</button>
                  <button type="button" onClick={() => setShowForm(false)}>
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

export default Jobseekers;
