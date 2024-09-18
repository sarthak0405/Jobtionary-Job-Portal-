import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
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
    <>
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
                  Portfolio (Extra Pages)
                </h1>
                <div className="custom-breadcrumbs">
                  <a href="#">Home</a> <span className="mx-2 slash">/</span>
                  <span className="text-white">
                    <strong>Portfolio</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="site-section block__62272" id="next-section">
          <div className="container">
            <div className="row justify-content-center mb-5" data-aos="fade-up">
              <div
                id="filters"
                className="filters text-center button-group col-md-7"
              >
                <button className="btn btn-primary active" data-filter="*">
                  All
                </button>
                <button className="btn btn-primary" data-filter=".web">
                  Web
                </button>
                <button className="btn btn-primary" data-filter=".design">
                  Design
                </button>
                <button className="btn btn-primary" data-filter=".brand">
                  Brand
                </button>
              </div>
            </div>
            <div id="posts" className="row no-gutter">
              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmslMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                  />
                </a>
              </div>
              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://img.freepik.com/free-photo/unrecognizable-asian-woman-sitting-cafe-working-laptop_1098-17167.jpg"
                  />
                </a>
              </div>
              <div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmslMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                  />
                </a>
              </div>
              <div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmt8ZW58MHx8MHx8fDA%3D"
                  />
                </a>
              </div>
              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmt8ZW58MHx8MHx8fDA%3D"
                  />
                </a>
              </div>
              <div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmt8ZW58MHx8MHx8fDA%3D"
                  />
                </a>
              </div>
              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1aW5lc3N8ZW58MHx8MHx8fDA%3D"
                  />
                </a>
              </div>
              <div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1496950866446-3253e1470e8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aW5lc3MlMjBjbGFzcyUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
                  />
                </a>
              </div>
              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbmVzcyUyMGNsYXNzJTIwdHJhdmVsfGVufDB8fDB8fHww"
                  />
                </a>
              </div>
              <div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aW5lc3N8ZW58MHx8MHx8fDA%3D"
                  />
                </a>
              </div>
              <div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://media.istockphoto.com/id/1059661468/photo/creative-business-people-working-together.webp?b=1&s=170667a&w=0&k=20&c=uk_ssbO9An7WNfY3Xbf4oUYeFbzQAjppxJ4PbDVZgus="
                  />
                </a>
              </div>
              <div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="portfolio-single.html" className="item-wrap">
                  <span className="icon-add" />
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1556741568-055d848f8bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJ1aW5lc3N8ZW58MHx8MHx8fDA%3D"
                  />
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
                      "Happy candidates make all the difference, and my
                      experience with JOBSTIONERY has been nothing short of
                      exceptional. From the moment I applied to the final offer
                      letter, the team at JOBSTIONERY made the entire process
                      smooth and transparent. Their professionalism,
                      responsiveness, and genuine interest in finding the right
                      fit for both the candidate and the company truly stood
                      out. Thanks to their support and guidance, I am now in a
                      role that aligns perfectly with my skills and career
                      goals. I'm grateful for the opportunity and highly
                      recommend JOBSTIONERY to any job seeker looking for a
                      positive and rewarding experience."
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
                      <h3>Bhagyashree Sonawane</h3>
                      <span className="position">Creative Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="block__87154 bg-white rounded">
                  <blockquote>
                    <p>
                      "My experience with JOBSTIONERY has been truly
                      transformative. The team's dedication to matching
                      candidates with the right job opportunities is
                      commendable. They provided invaluable guidance and support
                      throughout the entire job search process. The personalized
                      attention and care they offered made me feel valued as a
                      candidate. Thanks to JOBSTIONERY, I have found a role that
                      not only aligns with my career aspirations but also allows
                      me to thrive in a supportive and engaging work
                      environment. I highly recommend JOBSTIONERY to anyone
                      seeking a seamless and successful job search experience."
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
                      <h3>Yash Shinde</h3>
                      <span className="position">Creative Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Add Footer Component here */}
    </>
  );
};

export default Portfolio;
