import React from "react";
import hr1 from "../images/hero_1.jpg";
import { Link } from "react-router-dom";
const Courses = () => {
  const bg = {
    backgroundImage: `url(${hr1})`,
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
              <h1 className="text-white font-weight-bold">Courses</h1>
              <div className="custom-breadcrumbs">
                <a href="/">Home</a> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Courses</strong>
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
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              style={{ textAlign: "center" }}
            >
              <a
                href="graphic design.html"
                className="block__16443 text-center d-block"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-magnet d-block" />
                </span>
                <h3>Graphic Design</h3>
                <p>
                  Learn 2D/3D Animation, VFX &amp; Graphic Design from Best
                  School &amp; Industry Experts. Apply Now. 500+ Top Recruiters
                  for Campus Placement. 4000+ Professionals Placed Globally.
                </p>
              </a>
              <Link to="/Courseform">
                {" "}
                <button
                  style={{
                    backgroundColor: "rgb(137,186,22)",
                    width: "150px",
                    borderRadius: "7px",
                    border: "none",
                  }}
                >
                  Apply
                </button>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              style={{ textAlign: "center" }}
            >
              <a
                href="marketing strategy.html"
                className="block__16443 text-center d-block"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-trophy d-block" />
                </span>
                <h3>Marketing Strategy</h3>
                <p>
                  Boost your career with the best course on digital marketing by
                  MICA. Master popular Gen AI Tools like Chat GPT, MidJourney
                  etc. Achieve positive career growth. upGrad results are
                  endorsed by Deloitte! Join now!
                </p>
              </a>
              <Link to="/Courseform">
                {" "}
                <button
                  style={{
                    backgroundColor: "rgb(137,186,22)",
                    width: "150px",
                    borderRadius: "7px",
                    border: "none",
                  }}
                >
                  Apply
                </button>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              style={{ textAlign: "center" }}
            >
              <a
                href="web design.html"
                className="block__16443 text-center d-block"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-laptop d-block" />
                </span>
                <h3>Web Design</h3>
                <p>
                  With so much trade and entertainment occurring on the
                  internet, knowledge of web design is a highly sought after
                  skill. Whether interested in building your own site or looking
                  into a career in web building.
                </p>
              </a>
              <Link to="/Courseform">
                {" "}
                <button
                  style={{
                    backgroundColor: "rgb(137,186,22)",
                    width: "150px",
                    borderRadius: "7px",
                    border: "none",
                  }}
                >
                  Apply
                </button>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              style={{ textAlign: "center" }}
            >
              <a href="seo.html" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-search d-block" />
                </span>
                <h3>SEO</h3>
                <p>
                  SEO Training From An SEO Agency Owner: Step By Step Process To
                  Rank #1 on Google. Keyword Research, Technical SEO
                </p>
              </a>
              <Link to="/Courseform">
                {" "}
                <button
                  style={{
                    backgroundColor: "rgb(137,186,22)",
                    width: "150px",
                    borderRadius: "7px",
                    border: "none",
                  }}
                >
                  Apply
                </button>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              style={{ textAlign: "center" }}
            >
              <a
                href="market leading.html"
                className="block__16443 text-center d-block"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-paper-plane d-block" />
                </span>
                <h3>Market Leading </h3>
                <p>
                  Beginners Course in financial market, Capital Market, Money
                  Market, Debts markets, Equity, bonds market, debentures &amp;
                  More
                </p>
              </a>
              <Link to="/Courseform">
                {" "}
                <button
                  style={{
                    backgroundColor: "rgb(137,186,22)",
                    width: "150px",
                    borderRadius: "7px",
                    border: "none",
                  }}
                >
                  Apply
                </button>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              style={{ textAlign: "center" }}
            >
              <a
                href="pixel perfect design.html"
                className="block__16443 text-center d-block"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-plug d-block" />
                </span>
                <h3>Pixel Perfect Design</h3>
                <p className="d-sm-block">
                  Learn ALL about pixel art in an always growing course! Get
                  access to basic and pro techniques with daily feedbacks!
                </p>
              </a>
              <Link to="/Courseform">
                {" "}
                <button
                  style={{
                    backgroundColor: "rgb(137,186,22)",
                    width: "150px",
                    borderRadius: "7px",
                    border: "none",
                  }}
                >
                  Apply
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
