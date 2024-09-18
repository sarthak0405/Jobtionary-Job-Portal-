// // import React, { useState } from "react";
// // import hr1 from "../images/hero_1.jpg";
// // // import { use } from "../../route";
// // import axios from "axios";

// // const Postjob = () => {
// //   const [email, setEmail] = useState();
// //   const [title, setTitle] = useState();
// //   const [location, setLocation] = useState();
// //   const [region, setRegion] = useState();
// //   const [type, setType] = useState();
// //   const [companyname, setCompanyname] = useState();
// //   const [tagline, setTagline] = useState();
// //   const [website, setWebsite] = useState();
// //   const [FBusrnm, setFBusrnm] = useState();
// //   const [twitter, setTwitterusrnm] = useState();
// //   const [LNusrnm, setLNusrnm] = useState();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post("http://localhost:8000/addjob", {
// //         type: type,
// //         location: location,
// //       });

// //       if (response.status === 200) {
// //         console.log("Job added successfully!");
// //         setType("");
// //         setLocation("");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       console.log("An error occurred while adding the job.");
// //     }
// //   };

// //   const bg = {
// //     backgroundImage: `url(${hr1})`,
// //   };
// //   return (
// //     <>
// //       <section
// //         className="section-hero overlay inner-page bg-image"
// //         style={bg}
// //         id="home-section"
// //       >
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-md-7">
// //               <h1 className="text-white font-weight-bold">Post A Job</h1>
// //               <div className="custom-breadcrumbs">
// //                 <a href="/">Home</a> <span className="mx-2 slash">/</span>
// //                 <a href="/">Job</a> <span className="mx-2 slash">/</span>
// //                 <span className="text-white">
// //                   <strong>Post a Job</strong>
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //       <section className="site-section">
// //         <div className="container">
// //           <div className="row align-items-center mb-5">
// //             <div className="col-lg-8 mb-4 mb-lg-0">
// //               <div className="d-flex align-items-center">
// //                 <div>
// //                   <h2>Post A Job</h2>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col-lg-4">
// //               <div className="row">
// //                 <div className="col-6">
// //                   <a href="/" className="btn btn-block btn-light btn-md">
// //                     <span className="icon-open_in_new mr-2" />
// //                     Preview
// //                   </a>
// //                 </div>
// //                 <div className="col-6">
// //                   <a href="/" className="btn btn-block btn-primary btn-md">
// //                     Save Job
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="row mb-5">
// //             <div className="col-lg-12">
// //               <form className="p-4 p-md-5 border rounded" method="post">
// //                 <h3 className="text-black mb-5 border-bottom pb-2">
// //                   Job Details
// //                 </h3>
// //                 <div className="form-group">
// //                   <label htmlFor="company-website-tw d-block">
// //                     Upload Featured Image
// //                   </label>{" "}
// //                   <br />
// //                   <label className="btn btn-primary btn-md btn-file">
// //                     Browse File
// //                     <input type="file" hidden="" />
// //                   </label>
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="email">Email</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="email"
// //                     placeholder="you@yourdomain.com"
// //                     onChange={(e) => setEmail(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="job-title">Job Title</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="job-title"
// //                     placeholder="Product Designer"
// //                     onChange={(e) => setTitle(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="job-location">Location</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="job-location"
// //                     placeholder="e.g. India"
// //                     onChange={(e) => setLocation(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="job-region">Job Region</label>
// //                   <select
// //                     className="selectpicker border rounded"
// //                     id="job-region"
// //                     data-style="btn-black"
// //                     data-width="100%"
// //                     data-live-search="true"
// //                     title="Select Region"
// //                     onChange={(e) => setRegion(e.target.value)}
// //                   >
// //                     <option>NASHIK</option>
// //                     <option>Agra</option>
// //                     <option>Ahmedabad</option>
// //                     <option>Ahmednagar</option>
// //                     <option>Ajmer</option>
// //                     <option>Alighar</option>
// //                     <option>Amritsar</option>
// //                     <option>Asansol</option>
// //                     <option>Aurangabad</option>
// //                     <option>Bareilly</option>
// //                     <option>Belagavi</option>
// //                     <option>Bengaluru</option>
// //                     <option>Bhavnagar</option>
// //                     <option>Bhilai</option>
// //                     <option>Bhopal</option>
// //                     <option>Bhubaneswar</option>
// //                     <option>Bikaner</option>
// //                     <option>Chandigarh</option>
// //                     <option>Chennai</option>
// //                     <option>Coimbatore</option>
// //                     <option>Cuttack</option>
// //                     <option>Dehradun</option>
// //                     <option>Delhi</option>
// //                     <option>Dhanbad</option>
// //                     <option>Goa</option>
// //                     <option>Gorakhpur</option>
// //                     <option>Guntur</option>
// //                     <option>Guwahati</option>
// //                     <option>Gwalior</option>
// //                     <option>Hubli-Dharwad</option>
// //                     <option>Hyderabad</option>
// //                     <option>Indore</option>
// //                     <option>Jabalpur</option>
// //                     <option>Jaipur</option>
// //                     <option>Jalandhar</option>
// //                     <option>Jamnagar</option>
// //                     <option>Jamshedpur</option>
// //                     <option>Jodhpur</option>
// //                     <option>Kannur</option>
// //                     <option>Kanpur</option>
// //                     <option>Kochi</option>
// //                     <option>Kolhapur</option>
// //                     <option>Kolkata</option>
// //                     <option>Kota</option>
// //                     <option>Lucknow</option>
// //                     <option>Ludhiana</option>
// //                     <option>Madurai</option>
// //                     <option>Malapurram</option>
// //                     <option>Mangalore</option>
// //                     <option>Meerut</option>
// //                     <option>Mumbai</option>
// //                     <option>Mysore</option>
// //                     <option>Nagpur</option>
// //                     <option>Panipat</option>
// //                     <option>Patna</option>
// //                     <option>Pondicherry</option>
// //                     <option>Prayagraj</option>
// //                     <option>Pune</option>
// //                     <option>Raipur</option>
// //                     <option>Rajkot</option>
// //                     <option>Ranchi</option>
// //                     <option>Saharanpur</option>
// //                     <option>Salem</option>
// //                     <option>solapur</option>
// //                     <option>Surat</option>
// //                     <option>Thiruvananthapuram</option>
// //                     <option>Trichy</option>
// //                     <option>Udaipur</option>
// //                     <option>Ujjain</option>
// //                     <option>Vadodara</option>
// //                     <option>Varanasi</option>
// //                     <option>Vijaywada</option>
// //                     <option>Visakhapatnam</option>
// //                     <option>Warangal</option>
// //                   </select>
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="job-type">Job Type</label>
// //                   <select
// //                     className="selectpicker border rounded"
// //                     id="job-type"
// //                     data-style="btn-black"
// //                     data-width="100%"
// //                     data-live-search="true"
// //                     title="Select Job Type"
// //                     onChange={(e) => setType(e.target.value)}
// //                   >
// //                     <option>Part Time</option>
// //                     <option>Full Time</option>
// //                   </select>
// //                 </div>
// //                 {/* <div className="form-group">
// //                                     <label htmlFor="job-description">Job Description</label>
// //                                     <div className="editor" id="editor-1">
// //                                         <p>Write Job Description!</p>
// //                                     </div>
// //                                 </div> */}
// //                 <h3 className="text-black my-5 border-bottom pb-2">
// //                   Company Details
// //                 </h3>
// //                 <div className="form-group">
// //                   <label htmlFor="company-name">Company Name</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="company-name"
// //                     placeholder="e.g. India"
// //                     onChange={(e) => setCompanyname(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="company-tagline">Tagline (Optional)</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="company-tagline"
// //                     placeholder="e.g. India"
// //                     onChange={(e) => setTagline(e.target.value)}
// //                   />
// //                 </div>
// //                 {/* <div className="form-group">
// //                                     <label htmlFor="job-description">
// //                                         Company Description (Optional)
// //                                     </label>
// //                                     <div className="editor" id="editor-2">
// //                                         <p>Description</p>
// //                                     </div>
// //                                 </div> */}
// //                 <div className="form-group">
// //                   <label htmlFor="company-website">Website (Optional)</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="company-website"
// //                     placeholder="https://"
// //                     onChange={(e) => setWebsite(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="company-website-fb">
// //                     Facebook Username (Optional)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="company-website-fb"
// //                     placeholder="companyname"
// //                     onChange={(e) => setFBusrnm(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="company-website-tw">
// //                     Twitter Username (Optional)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="company-website-tw"
// //                     placeholder="@companyname"
// //                     onChange={(e) => setTwitterusrnm(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="company-website-tw">
// //                     Linkedin Username (Optional)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="company-website-tw"
// //                     placeholder="companyname"
// //                     onChange={(e) => setLNusrnm(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label htmlFor="company-website-tw d-block">
// //                     Upload Logo
// //                   </label>{" "}
// //                   <br />
// //                   <label className="btn btn-primary btn-md btn-file">
// //                     Browse File
// //                     <input type="file" hidden="" />
// //                   </label>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //           <div className="row align-items-center mb-5">
// //             <div className="col-lg-4 ml-auto">
// //               <div className="row">
// //                 <div className="col-6">
// //                   <a href="/" className="btn btn-block btn-light btn-md">
// //                     <span className="icon-open_in_new mr-2" />
// //                     Preview
// //                   </a>
// //                 </div>
// //                 <div className="col-6">
// //                   <a
// //                     href="/"
// //                     className="btn btn-block btn-primary btn-md"
// //                     onSubmit={handleSubmit()}
// //                   >
// //                     Save Job
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Postjob;
// import React, { useState } from "react";
// import hr1 from "../images/hero_1.jpg";
// import axios from "axios";

// const Postjob = () => {
//   const [email, setEmail] = useState();
//   const [title, setTitle] = useState();
//   const [location, setLocation] = useState();
//   const [region, setRegion] = useState();
//   const [type, setType] = useState();
//   const [companyname, setCompanyname] = useState();
//   const [tagline, setTagline] = useState();
//   const [website, setWebsite] = useState();
//   const [FBusrnm, setFBusrnm] = useState();
//   const [twitter, setTwitterusrnm] = useState();
//   const [LNusrnm, setLNusrnm] = useState();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/addjob", {
//         type: type,
//         location: location,
//       });

//       if (response.status === 200) {
//         console.log("Job added successfully!");
//         setType("");
//         setLocation("");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       console.log("An error occurred while adding the job.");
//     }
//   };

//   const bg = {
//     backgroundImage: `url(${hr1})`,
//   };
//   return (
//     <>
//       <section
//         className="section-hero overlay inner-page bg-image"
//         style={bg}
//         id="home-section"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-7">
//               <h1 className="text-white font-weight-bold">Post A Job</h1>
//               <div className="custom-breadcrumbs">
//                 <a href="/">Home</a> <span className="mx-2 slash">/</span>
//                 <a href="/">Job</a> <span className="mx-2 slash">/</span>
//                 <span className="text-white">
//                   <strong>Post a Job</strong>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="site-section">
//         <div className="container">
//           <div className="row align-items-center mb-5">
//             <div className="col-lg-8 mb-4 mb-lg-0">
//               <div className="d-flex align-items-center">
//                 <div>
//                   <h2>Post A Job</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="row">
//                 <div className="col-6">
//                   <a href="/" className="btn btn-block btn-light btn-md">
//                     <span className="icon-open_in_new mr-2" />
//                     Preview
//                   </a>
//                 </div>
//                 <div className="col-6">
//                   <button className="btn btn-block btn-primary btn-md">
//                     Save Job
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row mb-5">
//             <div className="col-lg-12">
//               <form
//                 className="p-4 p-md-5 border rounded"
//                 method="post"
//                 onSubmit={handleSubmit} // Attach onSubmit to the form element
//               >
//                 <h3 className="text-black mb-5 border-bottom pb-2">
//                   Job Details
//                 </h3>
//                 <div className="form-group">
//                   <label htmlFor="company-website-tw d-block">
//                     Upload Featured Image
//                   </label>{" "}
//                   <br />
//                   <label className="btn btn-primary btn-md btn-file">
//                     Browse File
//                     <input type="file" hidden="" />
//                   </label>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="email"
//                     placeholder="you@yourdomain.com"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="job-title">Job Title</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="job-title"
//                     placeholder="Product Designer"
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="job-location">Location</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="job-location"
//                     placeholder="e.g. India"
//                     onChange={(e) => setLocation(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="job-region">Job Region</label>
//                   <select
//                     className="selectpicker border rounded"
//                     id="job-region"
//                     data-style="btn-black"
//                     data-width="100%"
//                     data-live-search="true"
//                     title="Select Region"
//                     onChange={(e) => setRegion(e.target.value)}
//                   >
//                     <option>NASHIK</option>
//                     <option>Agra</option>
//                     <option>Ahmedabad</option>
//                     {/* More options */}
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="job-type">Job Type</label>
//                   <select
//                     className="selectpicker border rounded"
//                     id="job-type"
//                     data-style="btn-black"
//                     data-width="100%"
//                     data-live-search="true"
//                     title="Select Job Type"
//                     onChange={(e) => setType(e.target.value)}
//                   >
//                     <option>Part Time</option>
//                     <option>Full Time</option>
//                   </select>
//                 </div>
//                 {/* Company Details */}
//                 {/* Input fields */}
//               </form>
//             </div>
//           </div>
//           <div className="row align-items-center mb-5">
//             <div className="col-lg-4 ml-auto">
//               <div className="row">
//                 <div className="col-6">
//                   <a href="/" className="btn btn-block btn-light btn-md">
//                     <span className="icon-open_in_new mr-2" />
//                     Preview
//                   </a>
//                 </div>
//                 <div className="col-6">
//                   <button className="btn btn-block btn-primary btn-md">
//                     Save Job
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Postjob;

// import React, { useState } from "react";
// import hr1 from "../images/hero_1.jpg";
// import axios from "axios";

// const Postjob = () => {
//   const [email, setEmail] = useState("");
//   const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("");
//   const [region, setRegion] = useState("");
//   const [type, setType] = useState("");
//   const [companyname, setCompanyname] = useState("");
//   const [tagline, setTagline] = useState("");
//   const [website, setWebsite] = useState("");
//   const [FBusrnm, setFBusrnm] = useState("");
//   const [twitter, setTwitterusrnm] = useState("");
//   const [LNusrnm, setLNusrnm] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/addjob", {
//         type,
//         location,
//       });

//       if (response.status === 200) {
//         console.log("Job added successfully!");
//         setType("");
//         setLocation("");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       console.log("An error occurred while adding the job.");
//     }
//   };

//   const bg = {
//     backgroundImage: `url(${hr1})`,
//   };
//   return (
//     <>
//       <section
//         className="section-hero overlay inner-page bg-image"
//         style={bg}
//         id="home-section"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-7">
//               <h1 className="text-white font-weight-bold">Post A Job</h1>
//               <div className="custom-breadcrumbs">
//                 <a href="/">Home</a> <span className="mx-2 slash">/</span>
//                 <a href="/">Job</a> <span className="mx-2 slash">/</span>
//                 <span className="text-white">
//                   <strong>Post a Job</strong>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="site-section">
//         <div className="container">
//           <div className="row align-items-center mb-5">
//             <div className="col-lg-8 mb-4 mb-lg-0">
//               <div className="d-flex align-items-center">
//                 <div>
//                   <h2>Post A Job</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="row">
//                 <div className="col-6">
//                   <a href="/" className="btn btn-block btn-light btn-md">
//                     <span className="icon-open_in_new mr-2" />
//                     Preview
//                   </a>
//                 </div>
//                 <div className="col-6">
//                   <button className="btn btn-block btn-primary btn-md">
//                     Save Job
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row mb-5">
//             <div className="col-lg-12">
//               <form
//                 className="p-4 p-md-5 border rounded"
//                 method="post"
//                 // Attach onSubmit to the form element
//               >
//                 <h3 className="text-black mb-5 border-bottom pb-2">
//                   Job Details
//                 </h3>
//                 <div className="form-group">
//                   <label htmlFor="company-website-tw d-block">
//                     Upload Featured Image
//                   </label>{" "}
//                   <br />
//                   <label className="btn btn-primary btn-md btn-file">
//                     Browse File
//                     <input type="file" hidden="" />
//                   </label>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="email"
//                     placeholder="you@yourdomain.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="job-title">Job Title</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="job-title"
//                     placeholder="Product Designer"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="job-location">Location</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="job-location"
//                     placeholder="e.g. India"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="job-region">Job Region</label>
//                   <select
//                     className="selectpicker border rounded"
//                     id="job-region"
//                     data-style="btn-black"
//                     data-width="100%"
//                     data-live-search="true"
//                     title="Select Region"
//                     value={region}
//                     onChange={(e) => setRegion(e.target.value)}
//                   >
//                     <option>NASHIK</option>
//                     <option>Agra</option>
//                     <option>Ahmedabad</option>
//                     {/* More options */}
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="job-type">Job Type</label>
//                   <select
//                     className="selectpicker border rounded"
//                     id="job-type"
//                     data-style="btn-black"
//                     data-width="100%"
//                     data-live-search="true"
//                     title="Select Job Type"
//                     value={type}
//                     onChange={(e) => setType(e.target.value)}
//                   >
//                     <option>Part Time</option>
//                     <option>Full Time</option>
//                   </select>
//                 </div>
//                 {/* Company Details */}
//                 {/* Input fields */}
//                 <button
//                   type="submit"
//                   className="btn btn-block btn-primary btn-md"
//                   onSubmit={handleSubmit}
//                 >
//                   Save Job
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="row align-items-center mb-5">
//             <div className="col-lg-4 ml-auto">
//               <div className="row">
//                 <div className="col-6">
//                   <a href="/" className="btn btn-block btn-light btn-md">
//                     <span className="icon-open_in_new mr-2" />
//                     Preview
//                   </a>
//                 </div>
//                 <div className="col-6"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Postjob;

import React, { useState } from "react";
import hr1 from "../images/hero_1.jpg";
import axios from "axios";

const Postjob = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [tagline, setTagline] = useState("");
  const [website, setWebsite] = useState("");
  const [FBusrnm, setFBusrnm] = useState("");
  const [twitter, setTwitterusrnm] = useState("");
  const [LNusrnm, setLNusrnm] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/addjob", {
        email,
        title,
        location,
        region,
        type,
        jobDescription,
        companyname,
        tagline,
        website,
        FBusrnm,
        twitter,
        LNusrnm,
      });

      if (response.status === 200) {
        alert("Job added successfully!");
        setEmail("");
        setTitle("");
        setLocation("");
        setRegion("");
        setType("");
        setJobDescription("");
        setFBusrnm("");
        setTagline("");
        setTwitterusrnm("");
        setLNusrnm("");
        setCompanyname("");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("An error occurred while adding the job.");
    }
  };

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
              <h1 className="text-white font-weight-bold">Post A Job</h1>
              <div className="custom-breadcrumbs">
                <a href="/">Home</a> <span className="mx-2 slash">/</span>
                <a href="/">Job</a> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Post a Job</strong>
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
                <div>
                  <h2>Post A Job</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-6">
                  <a href="/" className="btn btn-block btn-light btn-md">
                    <span className="icon-open_in_new mr-2" />
                    Preview
                  </a>
                </div>
                <div className="col-6">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary btn-md"
                    onClick={handleSubmit}
                  >
                    Save Job
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-12">
              <form
                className="p-4 p-md-5 border rounded"
                method="post"
                onSubmit={handleSubmit}
              >
                <h3 className="text-black mb-5 border-bottom pb-2">
                  Job Details
                </h3>

                <div className="form-group">
                  <label htmlFor="company-website-tw d-block">
                    Upload Featured Image
                  </label>
                  <br></br>
                  <label className="btn btn-primary btn-md btn-file">
                    Browse File <input type="file" hidden="" />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="you@yourdomain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job-title">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="job-title"
                    placeholder="Product Designer"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job-location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="job-location"
                    placeholder="e.g. India"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job-region">Job Region</label>
                  <select
                    className="selectpicker border rounded"
                    id="job-region"
                    data-style="btn-black"
                    data-width="100%"
                    data-live-search="true"
                    title="Select Region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option>NASHIK</option>
                    <option>Agra</option>
                    <option>Ahmedabad</option>
                    <option>Ahmednagar</option>
                    <option>Ajmer</option>
                    <option>Alighar</option>
                    <option>Amritsar</option>
                    <option>Asansol</option>
                    <option>Aurangabad</option>
                    <option>Bareilly</option>
                    <option>Belagavi</option>
                    <option>Bengaluru</option>
                    <option>Bhavnagar</option>
                    <option>Bhilai</option>
                    <option>Bhopal</option>
                    <option>Bhubaneswar</option>
                    <option>Bikaner</option>
                    <option>Chandigarh</option>
                    <option>Chennai</option>
                    <option>Coimbatore</option>
                    <option>Cuttack</option>
                    <option>Dehradun</option>
                    <option>Delhi</option>
                    <option>Dhanbad</option>
                    <option>Goa</option>
                    <option>Gorakhpur</option>
                    <option>Guntur</option>
                    <option>Guwahati</option>
                    <option>Gwalior</option>
                    <option>Hubli-Dharwad</option>
                    <option>Hyderabad</option>
                    <option>Indore</option>
                    <option>Jabalpur</option>
                    <option>Jaipur</option>
                    <option>Jalandhar</option>
                    <option>Jamnagar</option>
                    <option>Jamshedpur</option>
                    <option>Jodhpur</option>
                    <option>Kannur</option>
                    <option>Kanpur</option>
                    <option>Kochi</option>
                    <option>Kolhapur</option>
                    <option>Kolkata</option>
                    <option>Kota</option>
                    <option>Lucknow</option>
                    <option>Ludhiana</option>
                    <option>Madurai</option>
                    <option>Malapurram</option>
                    <option>Mangalore</option>
                    <option>Meerut</option>
                    <option>Mumbai</option>
                    <option>Mysore</option>
                    <option>Nagpur</option>
                    <option>Panipat</option>
                    <option>Patna</option>
                    <option>Pondicherry</option>
                    <option>Prayagraj</option>
                    <option>Pune</option>
                    <option>Raipur</option>
                    <option>Rajkot</option>
                    <option>Ranchi</option>
                    <option>Saharanpur</option>
                    <option>Salem</option>
                    <option>solapur</option>
                    <option>Surat</option>
                    <option>Thiruvananthapuram</option>
                    <option>Trichy</option>
                    <option>Udaipur</option>
                    <option>Ujjain</option>
                    <option>Vadodara</option>
                    <option>Varanasi</option>
                    <option>Vijaywada</option>
                    <option>Visakhapatnam</option>
                    <option>Warangal</option>
                    {/* More options */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="job-type">Job Type</label>
                  <select
                    className="selectpicker border rounded"
                    id="job-type"
                    data-style="btn-black"
                    data-width="100%"
                    data-live-search="true"
                    title="Select Job Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Part Time</option>
                    <option>Full Time</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="job-description">Job Description</label>
                  <div className="editor" id="editor-1">
                    <textarea
                      className="form-control"
                      id="job-description"
                      name="jobDescription"
                      placeholder="Write Job Description!"
                      rows="4"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <h3 className="text-black my-5 border-bottom pb-2">
                  Company Details
                </h3>
                <div className="form-group">
                  <label htmlFor="company-name">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-name"
                    placeholder="e.g. India"
                    onChange={(e) => setCompanyname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company-tagline">Tagline (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-tagline"
                    placeholder="e.g. India"
                    onChange={(e) => setTagline(e.target.value)}
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="job-description">
                    Company Description (Optional)
                  </label>
                  <div className="editor" id="editor-2">
                    <p>Description</p>
                  </div>
                </div> */}
                <div className="form-group">
                  <label htmlFor="company-website">Website (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-website"
                    placeholder="https://"
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company-website-fb">
                    Facebook Username (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-website-fb"
                    placeholder="companyname"
                    onChange={(e) => setFBusrnm(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company-website-tw">
                    Twitter Username (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-website-tw"
                    placeholder="@companyname"
                    onChange={(e) => setTwitterusrnm(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company-website-tw">
                    Linkedin Username (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-website-tw"
                    placeholder="companyname"
                    onChange={(e) => setLNusrnm(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company-website-tw d-block">
                    Upload Logo
                  </label>{" "}
                  <br />
                  <label className="btn btn-primary btn-md btn-file">
                    Browse File
                    <input type="file" hidden="" />
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-block btn-primary btn-md"
                  onSubmit={handleSubmit}
                >
                  Save Job
                </button>
              </form>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-4 ml-auto">
              <div className="row">
                <div className="col-6">
                  {/* <a href="/" className="btn btn-block btn-light btn-md">
                    <span className="icon-open_in_new mr-2" />
                    Preview
                  </a> */}
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Postjob;
