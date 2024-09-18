import React from 'react'
import sq1 from "../images/sq_img_1.jpg"
import sq2 from "../images/sq_img_2.jpg"
import sq4 from "../images/sq_img_4.jpg"
import sq7 from "../images/sq_img_7.jpg"
import sq5 from "../images/sq_img_5.jpg"
import sq6 from "../images/sq_img_6.jpg"
import hr1 from "../images/hero_1.jpg"

const Blog = () => {
    const bg = {
        backgroundImage: `url(${hr1})`
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
                            <h1 className="text-white font-weight-bold">Our Blog</h1>
                            <div className="custom-breadcrumbs">
                                <a href="/">Home</a> <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>About Us</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <a href="blog-single.html">
                                <img
                                    src={sq1}
                                    alt="sqimg"
                                    className="img-fluid rounded mb-4"
                                />
                            </a>
                            <h3>
                                <a href="blog-single.html" className="text-black">
                                    7 Factors for Choosing Between Two Jobs
                                </a>
                            </h3>
                            <div>
                                Feb 15, 2024<span className="mx-2">|</span>{" "}
                                <a href="/">2 Comments</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <a href="blog-single.html">
                                <img
                                    src={sq2}
                                    alt="sq2"
                                    className="img-fluid rounded mb-4"
                                />
                            </a>
                            <h3>
                                <a href="blog-single.html" className="text-black">
                                    How to Write a Creative Cover Letter
                                </a>
                            </h3>
                            <div>
                                Feb 20, 2024 <span className="mx-2">|</span>{" "}
                                <a href="/">2 Comments</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <a href="blog-single.html">
                                <img
                                    src={sq4}
                                    alt="sq4"
                                    className="img-fluid rounded mb-4"
                                />
                            </a>
                            <h3>
                                <a href="blog-single.html" className="text-black">
                                    The Right Way to Quit a Job You Started
                                </a>
                            </h3>
                            <div>
                                Mar 15, 2024 <span className="mx-2">|</span>{" "}
                                <a href="/">2 Comments</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <a href="blog-single.html">
                                <img
                                    src={sq7}
                                    alt="sq7"
                                    className="img-fluid rounded mb-4"
                                />
                            </a>
                            <h3>
                                <a href="blog-single.html" className="text-black">
                                    7 Factors for Choosing Between Two Jobs
                                </a>
                            </h3>
                            <div>
                                Mar 19, 2024 <span className="mx-2">|</span>{" "}
                                <a href="/">2 Comments</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <a href="blog-single.html">
                                <img
                                    src={sq5}
                                    alt="sq5"
                                    className="img-fluid rounded mb-4"
                                />
                            </a>
                            <h3>
                                <a href="blog-single.html" className="text-black">
                                    How to Write a Creative Cover Letter
                                </a>
                            </h3>
                            <div>
                                Mar 27, 2024 <span className="mx-2">|</span>{" "}
                                <a href="/">2 Comments</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <a href="blog-single.html">
                                <img
                                    src={sq6}
                                    alt="sq6"
                                    className="img-fluid rounded mb-4"
                                />
                            </a>
                            <h3>
                                <a href="blog-single.html" className="text-black">
                                    The Right Way to Quit a Job You Started
                                </a>
                            </h3>
                            <div>
                                April 15, 2024 <span className="mx-2">|</span>{" "}
                                <a href="/">2 Comments</a>
                            </div>
                        </div>
                    </div>
                    <div className="row pagination-wrap mt-5">
                        <div className="col-md-12 text-center ">
                            <div className="custom-pagination ml-auto">
                                <a href="/" className="prev">
                                    Prev
                                </a>
                                <div className="d-inline-block">
                                    <a href="/" className="active">
                                        1
                                    </a>
                                    <a href="/">2</a>
                                    <a href="/">3</a>
                                    <a href="/">4</a>
                                </div>
                                <a href="/" className="next">
                                    Next
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Blog