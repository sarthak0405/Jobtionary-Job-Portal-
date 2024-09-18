import React, { useState, useEffect } from "react";

const PortfolioSingle = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetch/loading process
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  return (
    <>
      {loading && (
        <>
          <div id="overlayer" />
          <div className="loader">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      )}
      {!loading && (
        <div className="site-wrap">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>
          {/* .site-mobile-menu */}

          {/* HOME */}
          <section
            className="section-hero overlay inner-page bg-image"
            style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
            id="home-section"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h1 className="text-white font-weight-bold">
                    Portfolio Single (Extra Pages)
                  </h1>
                  <div className="custom-breadcrumbs">
                    <a href="index.html">Home</a>{" "}
                    <span className="mx-2 slash">/</span>
                    <a href="portfolio.html">Portfolio</a>{" "}
                    <span className="mx-2 slash">/</span>
                    <span className="text-white">
                      <strong>Portfolio Single</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="site-section pb-0 portfolio-single"
            id="next-section"
          >
            <div className="container">
              <div className="row mb-5 mt-5">
                <div className="col-lg-8">
                  <figure>
                    <a href="images/sq_img_6.jpg" data-fancybox="gallery">
                      <img
                        src="https://www.techdonut.co.uk/sites/default/files/2023-11/office-suites-314847572%5B1%5D.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </figure>
                  <figure>
                    <a href="images/sq_img_2.jpg" data-fancybox="gallery">
                      <img
                        src="https://imageio.forbes.com/blogs-images/chuckcohn/files/2017/05/Internal-business-meeting.jpg?format=jpg&height=600&width=1200&fit=bounds"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </figure>
                  <figure>
                    <a href="images/sq_img_7.jpg" data-fancybox="gallery">
                      <img
                        src="https://imgeng.jagran.com/images/2022/sep/cover1663222987958.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </figure>
                  <figure className="mb-0">
                    <a href="images/sq_img_8.jpg" data-fancybox="gallery">
                      <img
                        src="https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwb2ZmaWNlfGVufDB8fDB8fHww"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </figure>
                </div>
                <div className="col-lg-4 ml-auto h-100 jm-sticky-top">
                  <div className="mb-4">
                    <h3 className="mb-4 h4 border-bottom">
                      Project Description
                    </h3>
                    <p className="mb-0">
                      Nostrum iure atque enim quisquam minima distinctio omnis
                      consequatur aliquam suscipit quidem esse aspernatur Libero
                      excepturi animi repellendus porro impedit
                    </p>
                  </div>
                  <div className="row mb-4">
                    <div className="col-sm-12 col-md-12 mb-4 col-lg-12">
                      <strong className="d-block text-black">Client</strong>
                      Google, Inc.
                    </div>
                    <div className="col-sm-12 col-md-12 mb-4 col-lg-12">
                      <strong className="d-block text-black">Role</strong>
                      Design, Front-End and Back-End (WordPress)
                    </div>
                    <div className="col-sm-12 col-md-12 mb-4 col-lg-12">
                      <strong className="d-block text-black">
                        Year Started
                      </strong>
                      2019
                    </div>
                    <div className="col-sm-12 col-md-12 mb-4 col-lg-12">
                      <strong className="d-block text-black mb-3">
                        Website URL
                      </strong>
                      <a
                        href="#"
                        className="btn btn-outline-primary border-width-2"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                  <div className="block__87154 mb-0">
                    <blockquote>
                      <p>
                        Ipsum harum assumenda in eum vel eveniet numquam, cumque
                        vero vitae enim cupiditate deserunt eligendi officia
                        modi consectetur. Expedita tempora quos nobis earum hic
                        ex asperiores quisquam optio nostrum sit
                      </p>
                    </blockquote>
                    <div className="block__91147 d-flex align-items-center">
                      <figure className="mr-4">
                        <img
                          src="images/person_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </figure>
                      <div>
                        <h3>Chris Peter</h3>
                        <span className="position">Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" py-3 site-section mb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <a
                    href="#"
                    className="btn btn-md btn-outline-primary border-width-2 d-block"
                  >
                    Previous Project
                  </a>
                </div>
                <div className="col-md-4 text-center">
                  <a
                    href="#"
                    className="btn btn-md btn-primary border-width-2 d-block"
                  >
                    All Projects
                  </a>
                </div>
                <div className="col-md-4 text-center">
                  <a
                    href="#"
                    className="btn btn-md btn-outline-primary border-width-2 d-block"
                  >
                    Next Project
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="site-section bg-light">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center" data-aos="fade">
                  <h2 className="section-title mb-3">Happy Candidates Says</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="block__87154 bg-white rounded">
                    <blockquote>
                      <p>
                        Ipsum harum assumenda in eum vel eveniet numquam cumque
                        vero vitae enim cupiditate deserunt eligendi officia
                        modi consectetur. Expedita tempora quos nobis earum hic
                        ex asperiores quisquam optio nostrum sit
                      </p>
                    </blockquote>
                    <div className="block__91147 d-flex align-items-center">
                      <figure className="mr-4">
                        <img
                          src="images/person_1.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </figure>
                      <div>
                        <h3>Elisabeth Smith</h3>
                        <span className="position">Creative Director</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="block__87154 bg-white rounded">
                    <blockquote>
                      <p>
                        Ipsum harum assumenda in eum vel eveniet numquam, cumque
                        vero vitae enim cupiditate deserunt eligendi officia
                        modi consectetur. Expedita tempora quos nobis earum hic
                        ex asperiores quisquam optio nostrum sit
                      </p>
                    </blockquote>
                    <div className="block__91147 d-flex align-items-center">
                      <figure className="mr-4">
                        <img
                          src="images/person_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </figure>
                      <div>
                        <h3>Chris Peter</h3>
                        <span className="position">Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="site-footer">
            <a href="#top" className="smoothscroll scroll-top">
              <span className="icon-keyboard_arrow_up" />
            </a>
            <div className="container">
              <div className="row mb-5">
                <div className="col-6 col-md-3 mb-4 mb-md-0">
                  <h3>Search Trending</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="graphic design.html">Graphic Design</a>
                    </li>
                    <li>
                      <a href="marketing strategy.html">Marketing Strategy</a>
                    </li>
                    <li>
                      <a href="web design.html">Web Design</a>
                    </li>
                    <li>
                      <a href="market leading.html">Market Leading</a>
                    </li>
                    <li>
                      <a href="seo.html">Search Engine Optimization</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3 mb-4 mb-md-0">
                  <h3>Company</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Resources</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3 mb-4 mb-md-0">
                  <h3>Support</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3 mb-4 mb-md-0">
                  <h3>Contact Us</h3>
                  <div className="footer-social">
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                    <a href="#">
                      <span className="icon-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-12">
                  <p className="copyright">
                    <small>
                      Copyright © All rights reserved | This template is made
                      with{" "}
                      <i
                        className="icon-heart text-danger"
                        aria-hidden="true"
                      />{" "}
                      by <a target="_blank"> ABHAY &amp; RAKSHA</a>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default PortfolioSingle;
