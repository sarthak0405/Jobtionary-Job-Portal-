import React from 'react'
import p5 from "../images/person_5.jpg"
import hr1 from "../images/hero_1.jpg"
import CountUp from 'react-countup'

const Aboutus = () => {
    const bg = {
        backgroundImage: `url(${hr1})`
    };
    return (

        <>
            {/* HOME */}
            <section
                className="section-hero overlay inner-page bg-image"
                style={bg}
                id="home-section"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="text-white font-weight-bold">About Us</h1>
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
            <section className="site-section pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">


                        </div>
                        <div className="col-lg-5 ml-auto">
                            <h2 className="section-title mb-3">
                                JOBSTIONERY For Freelancers, Web Developers
                            </h2>
                            <p className="lead">
                                Building a website is crucial to establish a strong online presence.
                                While you can easily make one using a site builder, developing a
                                more advanced site requires technical skills. Website owners usually
                                hire freelance web developers for this task. Compared to web
                                development companies, hiring freelancers is a more viable option
                                for small projects like building a website. To help you find a
                                suitable freelance developer for your needs,!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0 order-md-2">
                            <a
                                data-fancybox=""
                                data-ratio={2}
                                href="C:\Users\acer\Downloads\3252856-hd_1920_1080_25fps.mp4"
                                className="block__96788"
                            >
                                <span className="play-icon">
                                    <span className="icon-play" />
                                </span>
                                <img
                                    src="C:\Users\acer\Pictures\Screenshots\Screenshot (9).png"
                                    alt="Image"
                                    className="img-fluid img-shadow"
                                />
                            </a>
                        </div>
                        <div className="col-lg-5 mr-auto order-md-1  mb-5 mb-lg-0">
                            <h2 className="section-title mb-3">JOBSTIONERY For Workers</h2>
                            <p className="lead">
                                JOBSTIONERY are the best way for employers and job seekers to find
                                each other online. There are many to choose from, including general
                                boards where any job might be posted, and narrowly focused niche
                                boards that cater to specific industries and jobs. The landscape is
                                constantly changing, with old boards being phased out or bought by
                                competitors, and new ones sprouting up. We've reviewed hundreds of
                                job boards to find the ones that give employers the most reach, and
                                job seekers a trustworthy collection of the best jobs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade">
                            <h2 className="section-title mb-3">Our Team</h2>
                        </div>
                    </div>
                    <div className="row align-items-center block__69944">
                        <div className="col-md-6">
                            <img
                                src="C:\211D5600\DSC_0038.JPG"
                                alt="Image"
                                className="img-fluid mb-4 rounded"
                            />
                        </div>
                        <div className="col-md-6">
                            <h3>ABHAY SONAWANE</h3>
                            <p className="text-muted">Creative Director</p>
                            <p>
                                {" "}
                                SPECIALITY : HAFTA, MURDER , HALF-MURDER , KIDNAPPING , VASULI ,
                                ARMS SUPPLIER ETC.{" "}
                            </p>
                            <div className="social mt-4">
                                <a href="https://www.facebook.com/abhay.sonawane.7967">
                                    <span className="icon-facebook" />
                                </a>
                                <a href="https://twitter.com/AbhaySonaw64849">
                                    <span className="icon-twitter" />
                                </a>
                                <a href="https://www.instagram.com/abhaysonawane358/">
                                    <span className="icon-instagram" />
                                </a>
                                <a href="/">
                                    <span className="icon-linkedin" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 ml-md-auto">
                            <img src={p5} alt="PersonImage" className="img-fluid mb-4 rounded" />
                        </div>
                        <div className="col-md-6">
                            <h3>Chintan Patel</h3>
                            <p className="text-muted">Creative Director</p>
                            <p>
                                Soluta quasi cum delectus eum facilis recusandae nesciunt molestias
                                accusantium libero dolores repellat id in dolorem laborum ad modi
                                qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus
                                ut? Ex vel ad explicabo iure ipsa possimus consectetur neque rem
                                molestiae eligendi velit?.
                            </p>
                            <div className="social mt-4">
                                <a href="https://www.facebook.com/abhay.sonawane.7967">
                                    <span className="icon-facebook" />
                                </a>
                                <a href="https://twitter.com/AbhaySonaw64849">
                                    <span className="icon-twitter" />
                                </a>
                                <a href="https://www.instagram.com/abhaysonawane358/">
                                    <span className="icon-instagram" />
                                </a>
                                <a href="/">
                                    <span className="icon-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Aboutus