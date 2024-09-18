import React from 'react'
import hr1 from "../images/hero_1.jpg"

const Jobsingle = () => {
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
                            <h1 className="text-white font-weight-bold">UI/UX Designer</h1>
                            <div className="custom-breadcrumbs">
                                <a href="/">Home</a> <span className="mx-2 slash">/</span>
                                <a href="/">Job</a> <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>UI/UX Designer</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            <div className="d-flex align-items-center">
                                <div className="border p-2 d-inline-block mr-3 rounded">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt="Image"
                                    />
                                </div>
                                <div>
                                    <h2>UI/UX Designer</h2>
                                    <div>
                                        <span className="ml-0 mr-2 mb-2">
                                            <span className="icon-briefcase mr-2" />
                                            Vectone
                                        </span>
                                        <span className="m-2">
                                            <span className="icon-room mr-2" />
                                            Nashik
                                        </span>
                                        <span className="m-2">
                                            <span className="icon-clock-o mr-2" />
                                            <span className="text-primary">Full Time</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-6">
                                    <a href="/" className="btn btn-block btn-light btn-md">
                                        <span className="icon-heart-o mr-2 text-danger" />
                                        Save Job
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href="/" className="btn btn-block btn-primary btn-md">
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="mb-5">
                                <figure className="mb-5">
                                    <img
                                        src="images/job_single_img_1.jpg"
                                        alt="Image"
                                        className="img-fluid rounded"
                                    />
                                </figure>
                                <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                    <span className="icon-align-left mr-3" />
                                    Job Description
                                </h3>
                                <p>
                                    Hands-on experience with creating user-friendly and
                                    straightforward ideas for products.
                                </p>
                                <p>
                                    Learning how to organize, multitask and manage time to complete
                                    tasks.
                                </p>
                                <p>
                                    Hands-on experience with wireframes, storyboards, and sitemaps.
                                </p>
                                <p>sponsive landing pages</p>
                                <p>Optimising sites for maximum speed and scalability</p>
                            </div>
                            <div className="mb-5">
                                <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                    <span className="icon-rocket mr-3" />
                                    Responsibilities
                                </h3>
                                <ul className="list-unstyled m-0 p-0">
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="icon-check_circle mr-2 text-muted" />
                                        <span>
                                            make sure that every page and every step a user will
                                            experience in their interaction with the finished product will
                                            conform to the overall vision created by UX designers.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-5">
                                <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                    <span className="icon-book mr-3" />
                                    Education + Experience
                                </h3>
                                <ul className="list-unstyled m-0 p-0">
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="icon-check_circle mr-2 text-muted" />
                                        <span>UG: Any Graduate</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="icon-check_circle mr-2 text-muted" />
                                        <span>PG: Any Postgraduate</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="icon-check_circle mr-2 text-muted" />
                                        <span>Experience: 0 to 2 yrs</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-5">
                                <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                    <span className="icon-turned_in mr-3" />
                                    Other Benifits
                                </h3>
                                <ul className="list-unstyled m-0 p-0">
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="icon-check_circle mr-2 text-muted" />
                                        <span>Timing Flexibility</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="icon-check_circle mr-2 text-muted" />
                                        <span>PF</span>
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="icon-check_circle mr-2 text-muted" />
                                        <span>Travel Allowance</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="row mb-5">
                                <div className="col-6">
                                    <a href="/" className="btn btn-block btn-light btn-md">
                                        <span className="icon-heart-o mr-2 text-danger" />
                                        Save Job
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href="/" className="btn btn-block btn-primary btn-md">
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light p-3 border rounded mb-4">
                                <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
                                <ul className="list-unstyled pl-3 mb-0">
                                    <li className="mb-2">
                                        <strong className="text-black">Published on:</strong> April 14,
                                        2024
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-black">Vacancy:</strong> 20
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-black">Employment Status:</strong>{" "}
                                        Full-time
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-black">Experience:</strong> 0 to 2
                                        year(s)
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-black">Job Location:</strong> Nashik
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-black">Salary:</strong> 15,000-20,000 rs
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-black">Gender:</strong> Any
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-black">Application Deadline:</strong>{" "}
                                        April 28, 2024
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section" id="next">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-7 text-center">
                            <h2 className="section-title mb-2">22,392 Related Jobs</h2>
                        </div>
                    </div>
                    <ul className="job-listings mb-5">
                        <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                            <a href="application administrator.html" />
                            <div className="job-listing-logo">
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt="Image"
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
                                    <span className="icon-room" /> mumbai
                                </div>
                                <div className="job-listing-meta">
                                    <span className="badge badge-success">Full Time</span>
                                </div>
                            </div>
                        </li>
                        <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                            <a href="production manager.html" />
                            <div className="job-listing-logo">
                                <img
                                    src="C:\Users\acer\Desktop\123456789\jobboard-master\images\falcon pvt ltd.jpg"
                                    alt="Image"
                                    className="img-fluid"
                                />
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
                                <img
                                    src="C:\Users\acer\Desktop\123456789\jobboard-master\images\torrent-power.jpg"
                                    alt="Image"
                                    className="img-fluid"
                                />
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
                                <img
                                    src="C:\Users\acer\Desktop\123456789\jobboard-master\images\ola.png"
                                    alt="Image"
                                    className="img-fluid"
                                />
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
                                    src="images/job_logo_1.jpg"
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                    <h2>Product Designer</h2>
                                    <strong>Adidas</strong>
                                </div>
                                <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                    <span className="icon-room" /> New York, New York
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
                                    src="images/job_logo_2.jpg"
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                    <h2>Digital Marketing Director</h2>
                                    <strong>Sprint</strong>
                                </div>
                                <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                    <span className="icon-room" /> Overland Park, Kansas
                                </div>
                                <div className="job-listing-meta">
                                    <span className="badge badge-success">Full Time</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="row pagination-wrap">
                        <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                            <span>Showing 1-7 Of 22,392 Jobs</span>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
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
            <section className="bg-light pt-5 testimony-full">
                <div className="owl-carousel single-carousel">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center text-center text-lg-left">
                                <blockquote>
                                    <p>
                                        “Soluta quasi cum delectus eum facilis recusandae nesciunt
                                        molestias accusantium libero dolores repellat id in dolorem
                                        laborum ad modi qui at quas dolorum voluptatem voluptatum
                                        repudiandae.”
                                    </p>
                                    <p>
                                        <cite> — Corey Woods, @Dribbble</cite>
                                    </p>
                                </blockquote>
                            </div>
                            <div className="col-lg-6 align-self-end text-center text-lg-right">
                                <img
                                    src="images/person_transparent_2.png"
                                    alt="Image"
                                    className="img-fluid mb-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center text-center text-lg-left">
                                <blockquote>
                                    <p>
                                        “Soluta quasi cum delectus eum facilis recusandae nesciunt
                                        molestias accusantium libero dolores repellat id in dolorem
                                        laborum ad modi qui at quas dolorum voluptatem voluptatum
                                        repudiandae.”
                                    </p>
                                    <p>
                                        <cite> — Chris Peters, @Google</cite>
                                    </p>
                                </blockquote>
                            </div>
                            <div className="col-lg-6 align-self-end text-center text-lg-right">
                                <img
                                    src="images/person_transparent.png"
                                    alt="Image"
                                    className="img-fluid mb-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Jobsingle