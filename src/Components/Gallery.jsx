import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
// import "@fancyapps/fancybox/dist/jquery.fancybox.min.js";

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="site-wrap">
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="text-white font-weight-bold">Gallery</h1>
              <div className="custom-breadcrumbs">
                <a href="index.html">Home</a>{" "}
                <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Gallery</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="site-section" id="next-section">
        <div className="container">
          <div className="row">
            {[
              "https://www.techdonut.co.uk/sites/default/files/2023-11/office-suites-314847572%5B1%5D.jpg",
              "https://imageio.forbes.com/blogs-images/chuckcohn/files/2017/05/Internal-business-meeting.jpg?format=jpg&height=600&width=1200&fit=bounds",
              "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aW5lc3N8ZW58MHx8MHx8fDA%3D",
              "https://media.istockphoto.com/id/1059661468/photo/creative-business-people-working-together.webp?b=1&s=170667a&w=0&k=20&c=uk_ssbO9An7WNfY3Xbf4oUYeFbzQAjppxJ4PbDVZgus=",
              "https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwb2ZmaWNlfGVufDB8fDB8fHww",
              "https://imgeng.jagran.com/images/2022/sep/cover1663222987958.jpg",
              "https://images.unsplash.com/photo-1556741568-055d848f8bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJ1aW5lc3N8ZW58MHx8MHx8fDA%3D",
              "https://media.istockphoto.com/id/1059661468/photo/creative-business-people-working-together.webp?b=1&s=170667a&w=0&k=20&c=uk_ssbO9An7WNfY3Xbf4oUYeFbzQAjppxJ4PbDVZgus=",
              "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aW5lc3N8ZW58MHx8MHx8fDA%3D",
              "https://media.istockphoto.com/id/2047017335/photo/a-happy-asian-mom-is-playing-with-her-little-son-while-working-on-her-laptop.webp?b=1&s=170667a&w=0&k=20&c=ovmIMrCBMhSsMc_nJxOxloThXmWJs5qzec1OkjYKMf4=",
              "https://media.istockphoto.com/id/1446269804/photo/womens-workgroup-within-the-company.webp?b=1&s=170667a&w=0&k=20&c=hwPoq4c-TEZ-pvBiRGy31ge7w4qoZDFCv04lu61tlCI=",
              "https://plus.unsplash.com/premium_photo-1661274111128-99c37c02b706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmt8ZW58MHx8MHx8fDA%3D",
            ].map((img, index) => (
              <div key={index} className="col-md-6 col-lg-4 item">
                <a
                  href={`images/${img}`}
                  className="item-wrap fancybox"
                  data-fancybox="gallery2"
                >
                  <span className="icon-search2" />
                  <img
                    className="img-fluid"
                    src={`images/${img}`}
                    alt={`Gallery ${index + 1}`}
                  />
                </a>
              </div>
            ))}
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
                  <a href="#">Courses</a>
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
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                  <a target="_blank" href="https://example.com">
                    ABHAY &amp; RAKSHA
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
