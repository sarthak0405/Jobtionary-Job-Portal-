import React from "react";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Navbar = () => {
  return (
    <>
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>{" "}
        {/* .site-mobile-menu */}
        {/* NAVBAR */}
        <header className="site-navbar mt-3">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="site-logo col-6">
                <Link to='/'> Jobstionery</Link>
              </div>
              <nav className="mx-auto site-navigation">
                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                  <li>
                    <a href="/home" className="nav-link">
                      <Link to="/home">Home</Link>
                    </a>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li className="has-children">
                    <Link to="/joblisting">Job Listings</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/jobsingle">Job Single</Link>
                      </li>
                      <li>
                        <Link to="/postjob">Post A Job</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="services.html">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                      <li>
                        <Link to="/Portfolio">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/PortfolioSingle">Portfolio Single</Link>
                      </li>
                      <li>
                        <Link to="/testimonials">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/Faq">Frequently Ask Questions</Link>
                      </li>
                      <li>
                        <Link to="/Gallery">Gallery</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="d-lg-none">
                    <a href="post-job.html">
                      <span className="mr-2">+</span> Post a Job
                    </a>
                  </li>
                  <li className="d-lg-none">
                    <Link to="/login">Log In</Link>
                  </li>
                </ul>
              </nav>
              <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                <div className="ml-auto">
                  <span
                    className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"
                    style={{ color: "white" }}
                  >
                    <Link to="/postjob">
                      <span className="mr-2 icon-add" />
                      Post a Job
                    </Link>
                  </span>
                  <a
                    href="login.html"
                    className="btn btn-primary border-width-2 d-none d-lg-inline-block"
                  >
                    <span className="mr-2 icon-lock_outline" />
                    <Link to="/login" style={{ color: "white" }}>
                      Log In
                    </Link>
                  </a>
                  <div

                    className="btn btn-primary border-width-2 d-none d-lg-inline-block"
                  >
                    <span className="mr-2 icon-lock_outline" />
                    <Link to="/admin" style={{ color: "white" }}>
                      Admin
                    </Link>
                  </div>
                </div>
                <a
                  href="/"
                  className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"
                >
                  <span className="icon-menu h3 m-0 p-0 mt-2" />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
