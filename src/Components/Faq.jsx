import React, { useState, useEffect } from "react";

const Faq = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer); // Cleanup the timer
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
                Frequently Ask Questions
              </h1>
              <div className="custom-breadcrumbs">
                <a href="index.html">Home</a>
                <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>FAQ</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="site-section" id="accordion">
        <div className="container">
          <div className="row accordion justify-content-center block__76208">
            <div className="col-lg-6">
              <img
                src="https://i.pinimg.com/736x/8f/a1/c1/8fa1c11f432b39bff3fa8859e8586328.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-5 ml-auto">
              <div className="accordion-item">
                <h3 className="mb-0 heading">
                  <a
                    className="btn-block h4"
                    data-toggle="collapse"
                    href="#collapseFive"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    What is the name of your company
                    <span className="icon" />
                  </a>
                </h3>
                <div
                  id="collapseFive"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="body-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequatur quae cumque perspiciatis aperiam accusantium
                      facilis provident aspernatur nisi optio debitis dolorum,
                      est eum eligendi vero aut ad necessitatibus nulla sit
                      labore doloremque magnam! Ex molestiae, dolor tempora, ad
                      fuga minima enim mollitia consequuntur, necessitatibus
                      praesentium eligendi officia recusandae culpa tempore
                      eaque quasi ullam magnam modi quidem in amet. Quod debitis
                      error placeat, tempore quasi aliquid eaque vel facilis
                      culpa voluptate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="mb-0 heading">
                  <a
                    className="btn-block h4"
                    data-toggle="collapse"
                    href="#collapseSix"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How much pay for 3 months?
                    <span className="icon" />
                  </a>
                </h3>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="body-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel ad laborum expedita. Nostrum iure atque enim quisquam
                      minima distinctio omnis, consequatur aliquam suscipit,
                      quidem, esse aspernatur! Libero, excepturi animi
                      repellendus porro impedit nihil in doloremque a quaerat
                      enim voluptatum, perspiciatis, quas dignissimos maxime ut
                      cum reiciendis eius dolorum voluptatem aliquam!
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="mb-0 heading">
                  <a
                    className="btn-block h4"
                    data-toggle="collapse"
                    href="#collapseSeven"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Do I need to register? <span className="icon" />
                  </a>
                </h3>
                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="body-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel ad laborum expedita. Nostrum iure atque enim quisquam
                      minima distinctio omnis, consequatur aliquam suscipit,
                      quidem, esse aspernatur! Libero, excepturi animi
                      repellendus porro impedit nihil in doloremque a quaerat
                      enim voluptatum, perspiciatis, quas dignissimos maxime ut
                      cum reiciendis eius dolorum voluptatem aliquam!
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="mb-0 heading">
                  <a
                    className="btn-block h4"
                    data-toggle="collapse"
                    href="#collapseEight"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    Who should I contact in case of support.
                    <span className="icon" />
                  </a>
                </h3>
                <div
                  id="collapseEight"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="body-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel ad laborum expedita. Nostrum iure atque enim quisquam
                      minima distinctio omnis, consequatur aliquam suscipit,
                      quidem, esse aspernatur! Libero, excepturi animi
                      repellendus porro impedit nihil in doloremque a quaerat
                      enim voluptatum, perspiciatis, quas dignissimos maxime ut
                      cum reiciendis eius dolorum voluptatem aliquam!
                    </p>
                  </div>
                </div>
              </div>
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
                    “Ipsum harum assumenda in eum vel eveniet numquam cumque
                    vero vitae enim cupiditate deserunt eligendi officia modi
                    consectetur. Expedita tempora quos nobis earum hic ex
                    asperiores quisquam optio nostrum sit”
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
                    “Ipsum harum assumenda in eum vel eveniet numquam, cumque
                    vero vitae enim cupiditate deserunt eligendi officia modi
                    consectetur. Expedita tempora quos nobis earum hic ex
                    asperiores quisquam optio nostrum sit”
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

export default Faq;
