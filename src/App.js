import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navbar";
import Body1 from "./Components/body1";
import Footer from "./Components/footer";
import Aboutus from "./Components/aboutus";
import Contact from "./Components/contact";
import Courses from "./Components/courses";
import Postjob from "./Components/postjob";
import Blog from "./Components/blog";
import Jobsingle from "./Components/jobsingle";
import Testimonials from "./Components/testimonials";
import Login from "./Components/login";
import Adminlogin from "./Components/adminlogin";
import Dashboard from "./Components/Dashboard";
import Joblisting from "./Components/Joblisting";
import Courseform from "./Components/Courseform";
import Jobapplication from "./Components/Jobapplication";
import Jobseekers from "./Components/Jobseekers";
import DashboardCourses from "./Components/DashboardCourses";
import Portfolio from "./Components/Portfolio";
import Faq from "./Components/Faq";
import PortfolioSingle from "./Components/PortfolioSingle";
import Gallery from "./Components/Gallery";
import SignupForm from "./Components/SignupForm";
import AdminJobs from "./Components/adminjobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PseudoBody1 />} />
        <Route path="/about" element={<PseudoAboutus />} />
        <Route path="/contact" element={<PseudoContact />} />
        <Route path="/courses" element={<PseudoCourses />} />
        <Route path="/postjob" element={<PseudoPostjob />} />
        <Route path="/blog" element={<PseudoBlog />} />
        <Route path="/jobsingle" element={<PseudoJobsingle />} />
        <Route path="/testimonials" element={<PseudoTestimonials />} />
        <Route path="/home" element={<PseudoLogin />} />
        <Route path="/admin" element={<PseudoAdminlogin />} />
        <Route path="/dashboard" element={<PseudoDashboard />} />
        <Route path="/joblisting" element={<Pseudojoblisting />} />
        <Route path="/Courseform" element={<PseudoCourseform />} />
        <Route path="/jobs" element={<Pseudojobs />} />

        <Route
          path="joblisting/Jobapplication"
          element={<PseudoJobapplication />}
        />
        <Route path="/Jobseekers" element={<PseudoJobseekers />} />
        <Route path="/DashboardCourses" element={<PseudoDashboardCourses />} />
        <Route path="/Portfolio" element={<PseudoPortfolio />} />
        <Route path="/Faq" element={<PseudoFaq />} />
        <Route path="/PortfolioSingle" element={<PseudoPortfolioSingle />} />
        <Route path="/Gallery" element={<PseudoGallery />} />
        <Route path="/Signup" element={<PseudoSignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

function PseudoBody1() {
  return (
    <>
      {/* <Navbar /> */}
      <Login />
      {/* <Footer /> */}
    </>
  );
}

function PseudoAboutus() {
  return (
    <>
      <Navbar />
      <Aboutus />
      <Footer />
    </>
  );
}

function PseudoContact() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}

function PseudoCourses() {
  return (
    <>
      <Navbar />
      <Courses />
      <Footer />
    </>
  );
}

function PseudoPostjob() {
  return (
    <>
      <Navbar />
      <Postjob />
      <Footer />
    </>
  );
}

function PseudoBlog() {
  return (
    <>
      <Navbar />
      <Blog />
      <Footer />
    </>
  );
}

function PseudoJobsingle() {
  return (
    <>
      <Navbar />
      <Jobsingle />
      <Footer />
    </>
  );
}

function PseudoTestimonials() {
  return (
    <>
      <Navbar />
      <Testimonials />
      <Footer />
    </>
  );
}

function PseudoLogin() {
  return (
    <>
      <Navbar />
      <Body1 />
      <Footer />
    </>
  );
}

function PseudoAdminlogin() {
  return (
    <>
      <Navbar />
      <Adminlogin />
      <Footer />
    </>
  );
}

function PseudoDashboard() {
  return (
    <>
      <Dashboard />
    </>
  );
}
function Pseudojoblisting() {
  return (
    <>
      <Navbar />
      <Joblisting />
      <Footer />
    </>
  );
}
function PseudoCourseform() {
  return (
    <>
      <Navbar />
      <Courseform />
      <Footer />
    </>
  );
}
function PseudoJobapplication() {
  return (
    <>
      <Navbar />
      <Jobapplication />
      <Footer />
    </>
  );
}
function PseudoJobseekers() {
  return (
    <>
      <Jobseekers />
    </>
  );
}
function PseudoDashboardCourses() {
  return (
    <>
      <DashboardCourses />
    </>
  );
}

function Pseudojobs() {
  return (
    <>
      <AdminJobs />
    </>
  );
}

function PseudoPortfolio() {
  return (
    <>
      <Navbar />
      <Portfolio />
    </>
  );
}
function PseudoFaq() {
  return (
    <>
      <Navbar />
      <Faq />
    </>
  );
}
function PseudoPortfolioSingle() {
  return (
    <>
      <Navbar />
      <PortfolioSingle />
    </>
  );
}
function PseudoGallery() {
  return (
    <>
      <Navbar />
      <Gallery />
    </>
  );
}
function PseudoSignupForm() {
  return (
    <>
      <SignupForm />
    </>
  );
}

export default App;
