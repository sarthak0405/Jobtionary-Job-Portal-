
import React, { useState, useEffect } from "react";
import pvtltd from "../images/falcon pvt ltd.jpg";
import torrent from "../images/torrent-power.jpg";
import ola from "../images/ola.png";
import joblogo from "../images/job_logo_1.jpg";
import jl2 from "../images/job_logo_2.jpg";
import persontransparent from "../images/person_transparent.png";
import im1 from "../images/img_1.jpg";
import img1 from "../images/images (1).png";
import img2 from "../images/images (2).png";
import hr1 from "../images/hero_1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Body1 = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const bg = {
    backgroundImage: `url(${hr1})`,
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      fetchData();
    } else {
      setData([]);
    }
  }, [searchInput]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/getjob?title=${searchInput}`
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    filterData();
  }, [searchInput, data]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const filterData = () => {
    if (searchInput.length > 0) {
      const filtered = data.filter((job) =>
        job.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };
  return (
    <>
      <>
        {/* HOME */}
        <section
          className="home-section section-hero overlay bg-image"
          style={bg}
          id="home-section"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="mb-5 text-center">
                  <h1 className="text-white font-weight-bold">
                    The Easiest Way To Get Your Dream Job
                  </h1>
                  <p>
                    Find your dream job. Use JOBSTIONERY to easily get
                    discovered by reputed companies and get referred to job
                    positions very few know about.
                  </p>
                </div>
                <form method="post" className="search-jobs-form">
                  <div className="row mb-5">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 mb-lg-0">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Job title, Company..."
                        value={searchInput}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ position: "relative", top: "-14px" }}>
                      <Link to="/joblisting">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block text-white btn-search"
                        >
                          <span className="icon-search icon mr-2" />
                          Search Job
                        </button>
                      </Link>
                      <br />
                    </div>
                    {/* <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <a
                        href="https://www.mycvcreator.com/app/register"
                        className="btn btn-primary btn-lg btn-block text-white btn-search"
                      >
                        <span className="icon-search icon mr-2" />
                        Resume Builder
                      </a>
                    </div> */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0" style={{ position: "relative", top: "-14px" }}>

                      <button
                        className="btn btn-primary btn-lg btn-block text-white btn-search"
                      >
                        <a href="https://www.mycvcreator.com/app/register" style={{ color: "white" }}>
                          <span className="icon-search icon mr-2" style={{ color: "white" }} />
                          Resume Builder
                        </a>
                      </button>

                      <br />
                    </div>
                  </div>
                </form>
                <div>
                  {filteredData.length > 0 && (
                    <div className="job-listings">
                      {filteredData.map((job, index) => (
                        <div key={index} className="job-item">
                          {job.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <a href="#next" className="scroll-button smoothscroll">
            <span className="icon-keyboard_arrow_down" />
          </a>
        </section>
        <section
          className="py-5 bg-image overlay-primary fixed overlay"
          id="next"
          style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="section-title mb-2 text-white">
                  JOBSTIONERY Site Stats
                </h2>
                <p className="lead text-white">
                  {" "}
                  find your dream job. Use JOBSTIONERY to easily get discovered
                  by reputed companies and get referred to job positions very
                  few know about.
                </p>
              </div>
            </div>
            <div className="row pb-0 block__19738 section-counter">
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2" style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}>
                  <CountUp style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}
                    start={0}
                    end={973}
                    duration={2.75}

                  />+
                </div>
                <span className="caption">Candidates</span>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2" style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}>
                  <CountUp style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}
                    start={0}
                    end={100}
                    duration={2.75}

                  />+
                </div>
                <span className="caption">Jobs Posted</span>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2" style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}>
                  <CountUp style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}
                    start={0}
                    end={70}
                    duration={2.75}

                  />+
                </div>
                <span className="caption">Jobs Filled</span>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center mb-2" style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}>
                  <CountUp style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}
                    start={0}
                    end={30}
                    duration={2.75}

                  />+
                </div>
                <span className="caption">Companies</span>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="section-title mb-2">43,167 Job Listed</h2>
              </div>
            </div>
            <ul className="job-listings mb-5">
              <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                <div className="job-listing-logo">
                  <img src={torrent} alt="torrent" className="img-fluid" />
                </div>
                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                  <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                    <h2>UI/UX Designer</h2>
                    <strong>Vectone</strong>
                  </div>
                  <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                    <span className="icon-room" /> Nashik
                  </div>
                  <div className="job-listing-meta">
                    <span className="badge badge-success">Full Time</span>
                  </div>
                </div>
              </li>
              <ul className="job-listings mb-5">
                <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                  <a href="application administrator.html" />
                  <div className="job-listing-logo">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                      <h2>Application Administrator</h2>
                      <a href="application administrator.html" />
                      <strong>Inchcape Shipping Services</strong>
                    </div>
                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                      <span className="icon-room" /> Mumbai
                    </div>
                    <div className="job-listing-meta">
                      <span className="badge badge-success">Full Time</span>
                    </div>
                  </div>
                </li>
                <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                  <a href="production manager.html" />
                  <div className="job-listing-logo">
                    <img src={pvtltd} alt="mage" className="img-fluid" />
                  </div>
                  <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                      <h2>Production Manager</h2>
                      <strong>Falcons Fiber Factory PVT LTD</strong>
                    </div>
                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                      <span className="icon-room" /> Pune
                    </div>
                    <div className="job-listing-meta">
                      <span className="badge badge-success">Full Time</span>
                    </div>
                  </div>
                </li>
                <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                  <a href="civil engineer.html" />
                  <div className="job-listing-logo">
                    <img src={torrent} alt="mage" className="img-fluid" />
                  </div>
                  <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                      <h2>Civil Engineer</h2>
                      <strong>Torrent Power PVT.LTD</strong>
                    </div>
                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                      <span className="icon-room" /> Ahmedabad
                    </div>
                    <div className="job-listing-meta">
                      <span className="badge badge-success">Full Time</span>
                    </div>
                  </div>
                </li>
                <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                  <a href="brand champion.html" />
                  <div className="job-listing-logo">
                    <img src={ola} alt="mage" className="img-fluid" />
                  </div>
                  <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                      <h2>Brand Champion</h2>
                      <strong>OLA</strong>
                    </div>
                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                      <span className="icon-room" /> Banglore
                    </div>
                    <div className="job-listing-meta">
                      <span className="badge badge-success">Full Time</span>
                    </div>
                  </div>
                </li>
                <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                  <a href="job-single.html" />
                  <div className="job-listing-logo">
                    <img
                      src={joblogo}
                      alt="Free Website Template by Free-Template.co"
                      className="img-fluid"
                    />
                  </div>
                  <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                      <h2>Product Designer</h2>
                      <strong>Adidas</strong>
                    </div>
                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                      <span className="icon-room" /> Pune
                    </div>
                    <div className="job-listing-meta">
                      <span className="badge badge-danger">Part Time</span>
                    </div>
                  </div>
                </li>
                <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                  <a href="job-single.html" />
                  <div className="job-listing-logo">
                    <img
                      src={jl2}
                      alt="Free Website Template by Free-Template.co"
                      className="img-fluid"
                    />
                  </div>
                  <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                    <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                      <h2>Digital Marketing Director</h2>
                      <strong>Sprint</strong>
                    </div>
                    <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                      <span className="icon-room" /> Nashik
                    </div>
                    <div className="job-listing-meta">
                      <span className="badge badge-success">Full Time</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="row pagination-wrap">
                <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                  <span>Showing 1-7 Of 43,167 Jobs</span>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="custom-pagination ml-auto">
                    <a href="#" className="prev">
                      Prev
                    </a>
                    <div className="d-inline-block">
                      <a href="index.html" className="active">
                        1
                      </a>
                      <a href="about.html">2</a>
                      <a href="job-listings.html">3</a>
                      <a href="services.html">4</a>
                      <a href="courses.html">5</a>
                      <a href="blog.html">6</a>
                      <a href="contact.html">7</a>
                    </div>
                    <a href="#" className="next">
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </section>
        <section
          className="py-5 bg-image overlay-primary fixed overlay"
          style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h2 className="text-white">Come Build Your RESUME With US</h2>
                <p className="mb-0 text-white lead" />
              </div>
              <div className="col-md-3 ml-auto">
                <a
                  href="https://www.mycvcreator.com/app/register"
                  className="btn btn-warning btn-block btn-lg"
                >
                  RESUME BUILDER
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center mt-4 mb-5">
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <h2 className="section-title mb-2">Company We've Helped</h2>
                    <p className="lead">
                      {" "}
                      Verious prestigious institutions and reputed companies
                      including more than 150K profiles{" "}
                    </p>
                    <div className="card-info">
                      <div className="card-about">
                        <marquee
                          behavior="scroll"
                          direction="left"
                          scrollamount={25}
                          onmouseover="this.stop()"
                          onmouseout="this.start()"
                          vspace={0}
                          hspace={0}
                        >
                          <img
                            src={img1}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          <img
                            src={img2}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          <img
                            src={img1}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          &nbsp;
                          <img
                            src={img2}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          &nbsp;
                          <img
                            src={img1}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          &nbsp;
                          <img
                            src={img2}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          &nbsp;
                          <img
                            src={img1}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          &nbsp;
                          <img
                            src={img2}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          &nbsp;
                          <img
                            src={img1}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          &nbsp;
                          <img
                            src={img2}
                            width="300px"
                            height="200px"
                            alt="Natural"
                          />
                          &nbsp;
                        </marquee>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light pt-5 testimony-full">
          <div className="owl-carousel single-carousel">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 align-self-center text-center text-lg-left">
                  <blockquote>
                    <p>
                      “Soluta quasi cum delectus eum facilis recusandae nesciunt
                      molestias accusantium libero dolores repellat id in
                      dolorem laborum ad modi qui at quas dolorum voluptatem
                      voluptatum repudiandae.”
                    </p>
                    <p>
                      <cite> — Corey Woods, @Dribbble</cite>
                    </p>
                  </blockquote>
                </div>
                <div className="col-lg-6 align-self-end text-center text-lg-right">
                  <img src={im1} alt="Iage" className="img-fluid mb-0" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 align-self-center text-center text-lg-left">
                  <blockquote>
                    <p>
                      “Soluta quasi cum delectus eum facilis recusandae nesciunt
                      molestias accusantium libero dolores repellat id in
                      dolorem laborum ad modi qui at quas dolorum voluptatem
                      voluptatum repudiandae.”
                    </p>
                    <p>
                      <cite> — Chris Peters, @Google</cite>
                    </p>
                  </blockquote>
                </div>
                <div className="col-lg-6 align-self-end text-center text-lg-right">
                  <img
                    src={persontransparent}
                    alt="img"
                    className="img-fluid mb-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Body1;
