import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminJobs = () => {
    const [coursedata, setCourseData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [formValues, setFormValues] = useState({ title: "", type: "", email: "", region: "", companyname: "" });

    // Course applicants data fetching
    const fetchCourses = async () => {
        try {
            const res = await axios.get("http://localhost:8000/getjob");
            setCourseData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleDelete = async (title) => {
        try {
            console.log(`deleting ${title}`);
            await axios.delete(`http://localhost:8000/deletejob/${title}`);
            fetchCourses();
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateClick = (course) => {
        setSelectedCourse(course);
        setFormValues(course);
        setShowForm(true);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/updatejob/${selectedCourse.title}`, formValues);
            setShowForm(false);
            setSelectedCourse(null);
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
                    <li className="active">
                        <a href="#">
                            <i className="bx bxs-doughnut-chart" />
                            <Link to='/jobs'><span className="text">Jobs</span></Link>
                        </a>
                    </li>
                    <li >
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
                                                    Jobs
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
                                            <h3>Jobs Available</h3>
                                            <i className="bx bx-search" />
                                            <i className="bx bx-filter" />
                                        </div>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Job Title</th>
                                                    <th>Type</th>
                                                    <th>Email</th>
                                                    <th>Region</th>
                                                    <th>Company</th>
                                                    <th>Delete</th>
                                                    <th>Update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {coursedata.map((course) => (
                                                    <tr key={course.title}>
                                                        <td>
                                                            {/* <img src="img/people.png" alt="User" /> */}
                                                            <p>{course.title}</p>
                                                        </td>
                                                        <td>{course.type}</td>
                                                        <td>{course.email}</td>
                                                        <td>{course.region}</td>
                                                        <td>{course.companyname}</td>
                                                        <td>
                                                            <h6
                                                                style={{
                                                                    textDecoration: "underline",
                                                                    color: "red",
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={() => handleDelete(course.title)}
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
                                        <label htmlFor="title">Job Title: </label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            value={formValues.title}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <label htmlFor="type">Type: </label>
                                        <input
                                            type="text"
                                            id="type"
                                            name="type"
                                            value={formValues.type}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <label htmlFor="email">Email: </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <label htmlFor="region">Region: </label>
                                        <input
                                            type="text"
                                            id="region"
                                            name="region"
                                            value={formValues.region}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <label htmlFor="companyname">Company Name: </label>
                                        <input
                                            type="text"
                                            id="companyname"
                                            name="companyname"
                                            value={formValues.companyname}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" style={{ width: "200px" }}>
                                        Update Job
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

export default AdminJobs;
