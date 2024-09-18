import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Adminpage = () => {
  const [jobdata, setJobData] = useState([]);
  const [coursedata, setCourseData] = useState([]);
  const [companydata, setCompanyData] = useState([]);
  const [job, getjob] = useState([]);

  //jobseekers data fetching

  const fetchjobseekerData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getjobapplicant");
      setJobData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getjob");
      getjob(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchjobseekerData();
  }, []);

  //Course applicants data fetching

  const fetchcourses = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getcourses");
      setCourseData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchcourses();
  }, []);

  //Comapny data fetching

  const fetchcompany = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getcompany");
      setCompanyData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchcompany();
  }, []);

  return (
    <>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">JOBSTIONARY</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className="bx bxs-dashboard" />
              <span className="text">Dashboard</span>
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
            <img src="img/people.png" />
          </a>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Admin Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                </li>
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
              <ul className="box-info">
                <li>
                  <i className="bx bxs-calendar-check" />
                  <span className="text">
                    <h3>1020</h3>
                    <p>JOB Seeker </p>
                  </span>
                </li>
                <li>
                  <i className="bx bxs-group" />
                  <span className="text">
                    <h3>2834</h3>
                    <p>Jobs</p>
                  </span>
                </li>
                <li>
                  <i className="" />
                  <span className="text">
                    <h3>5</h3>
                    <p>Courses</p>
                  </span>
                </li>
              </ul>
              <div className="table-data">
                <div className="order">
                  <div className="head">
                    <h3>Job Seekers</h3>
                    <i className="bx bx-search" />
                    <i className="bx bx-filter" />
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Educational Qualification</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <p>{e.name}</p>
                              </td>
                              <td>{e.education}</td>
                              <td>
                                <select style={{ borderRadius: "7px" }}>
                                  <option value="Completed">Completed</option>
                                  <option value="Pending">Pending</option>
                                  <option value="Process">Process</option>
                                </select>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="table-data">
                  <div className="order">
                    <div className="head">
                      <h3>Jobs</h3>
                      <i className="bx bx-search" />
                      <i className="bx bx-filter" />
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>Job Title</th>
                          <th>Type</th>
                          <th>Region</th>
                          <th>Email</th>
                        </tr>
                        {
                          job.map((e) => {
                            return (
                              <>
                                <tr>
                                  <td>{e.title}</td>
                                  <td>{e.type}</td>
                                  <td>{e.region}</td>
                                  <td>{e.email}</td>
                                </tr>
                              </>
                            )
                          })
                        }
                      </thead>
                      <tbody>
                        {companydata.map((e) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <p>{e.name}</p>
                                </td>
                                <td>{e.requirement}</td>
                                <td>
                                  <select style={{ borderRadius: "7px" }}>
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Process">Process</option>
                                  </select>
                                </td>
                              </tr>
                            </>
                          );
                        })}

                        {/* <tr>
                          <td>
                            <img src="img/people.png" />
                            <p>John Doe</p>
                          </td>
                          <td>01-10-2021</td>
                          <td>
                            <span className="status pending">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="img/people.png" />
                            <p>John Doe</p>
                          </td>
                          <td>01-10-2021</td>
                          <td>
                            <span className="status process">Process</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="img/people.png" />
                            <p>John Doe</p>
                          </td>
                          <td>01-10-2021</td>
                          <td>
                            <span className="status pending">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="img/people.png" />
                            <p>John Doe</p>
                          </td>
                          <td>01-10-2021</td>
                          <td>
                            <span className="status completed">Completed</span>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                  <br />
                </div>
                <div className="table-data">
                  <div className="order">
                    <div className="head">
                      <h3>Courses</h3>
                      <i className="bx bx-search" />
                      <i className="bx bx-filter" />
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>Applicant Name</th>
                          <th>Course Name</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {coursedata.map((e) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <p>{e.name}</p>
                                </td>
                                <td>{e.course}</td>
                                <td>
                                  <select style={{ borderRadius: "7px" }}>
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Process">Process</option>
                                  </select>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                        {/* <tr>
                          <td>
                            <img src="img/people.png" />
                            <p>John Doe</p>
                          </td>
                          <td>01-10-2021</td>
                          <td>
                            <span className="status pending">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="img/people.png" />
                            <p>John Doe</p>
                          </td>
                          <td>01-10-2021</td>
                          <td>
                            <span className="status process">Process</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="img/people.png" />
                            <p>John Doe</p>
                          </td>
                          <td>01-10-2021</td>
                          <td>
                            <span className="status pending">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="img/people.png" />
                            <p>John Doe</p>
                          </td>
                          <td>01-10-2021</td>
                          <td>
                            <span className="status completed">Completed</span>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
};

export default Adminpage;
