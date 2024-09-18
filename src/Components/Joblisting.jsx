import React, { useState, useEffect } from "react";
import hr1 from "../images/hero_1.jpg";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Joblisting = () => {
  const bg = {
    backgroundImage: `url(${hr1})`,
  };
  const navi = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getjob");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleapply = () => {
    navi("./Jobapplication");
  };

  return (
    <>
      <section
        className="section-hero overlay inner-page bg-image"
        style={bg}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="text-white font-weight-bold">Job Listing</h1>
              <div className="custom-breadcrumbs">
                <a href="/">Home</a> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Job Listing</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="site-section services-section bg-light block__62849"
        id="next-section"
      >
        <div className="container">
          <div className="row">
            {data.map((e, index) => (
              <div
                key={index}
                className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
                style={{ textAlign: "center" }}
              >
                <div
                  // href={`/${e.slug}`}
                  className="block__16443 text-center d-block"
                >
                  <span className="custom-icon mx-auto">
                    <span className="icon-magnet d-block" />
                  </span>
                  <h3>{e.title}</h3>
                  <p>{e.jobDescription}</p>
                  <button
                    style={{
                      backgroundColor: "rgb(137,186,22)",
                      width: "150px",
                      borderRadius: "7px",
                      border: "none",
                    }}
                    onClick={handleapply}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
            {data.length === 0 && <p>No jobs available</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Joblisting;
