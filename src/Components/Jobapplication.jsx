import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Jobapplication = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [experience, setExperience] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/jobapplication",
        {
          name,
          email,
          education,
          phone,
          position,
          companyName,
          experience,
        }
      );

      if (response.status === 200) {
        alert("Applied for job sucessfully!");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the course.");
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="overlay" />
        <div
          className="form-container"
          style={{ position: "relative", top: "80px" }}
        >
          <h1>Job Application Form</h1>
          <form id="job-application-form">
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required=""
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Education:</label>
              <input
                type="text"
                id="position"
                name="position"
                required=""
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required=""
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position Applied For:</label>
              <input
                type="text"
                id="position"
                name="position"
                required=""
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Company Name:</label>
              <input
                type="text"
                id="position"
                name="position"
                required=""
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Experience:</label>
              <input
                type="text"
                id="position"
                name="position"
                required=""
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Submit Application
            </button>
          </form>
          <div id="response-message" className="hidden">
            Thank you for your application. We will get back to you soon!
          </div>
        </div>
      </div>
      <br></br>;<br></br>;<br></br>;
    </>
  );
};

export default Jobapplication;
