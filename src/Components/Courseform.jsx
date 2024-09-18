import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Courseform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [course, setCourse] = useState("");
  const [why, setWhy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/addcourse", {
        name,
        email,
        phno,
        course,
        why,
      });

      if (response.status === 200) {
        alert("Course added successfully!");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the course.");
    }
  };

  return (
    <div
      style={{
        height: "140vh",
        width: "98vw",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="container1"
        style={{ position: "relative", top: "100px" }}
      >
        <h1 className="hone">Creative Course Enrollment</h1>
        <div className="course-images"></div>
        <form id="enrollmentForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required=""
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Select Course</label>
            <select
              id="course"
              name="course"
              required=""
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">--Choose a course--</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Marketing Strategy">Marketing Strategy</option>
              <option value="Market Leading">Market Leading</option>
              <option value="Search Engine Optimizations">
                Search Engine Optimizations
              </option>
              <option value="Web Design">Web Design</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Why do you want to join this course?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required=""
              value={why}
              onChange={(e) => setWhy(e.target.value)}
            />
          </div>
          <button className="subbtn" type="submit">
            Enroll Now
          </button>
        </form>
        <div id="responseMessage" />
      </div>
    </div>
  );
};

export default Courseform;
