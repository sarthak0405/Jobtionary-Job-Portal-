// const model = require("./model");

// const checkPeople = async (req, res) => {
//   const { usrnm, pwrd } = req.body;
//   try {
//     const tofind = await model.find({ usrnm, pwrd });
//     if (tofind.length === 0) {
//       res.send("not exist");
//     } else {
//       res.send("exist");
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Internal Server Error");
//   }
// };
//  module.exports = { checkpeople };

const model = require("./model");
const Job = require("./jobmodel");
const adminmodel = require("./adminmodel");
const Course = require("./courseformmodel");
const Jobapplication = require("./Jobformmodel");
const Company = require("./companymodel");
const jobmodel = require("./jobmodel");

const checkPeople = async (req, res) => {
  const { usrnm, pwrd } = req.body;
  try {
    const tofind = await model.find({ usrnm, pwrd });
    if (tofind.length === 0) {
      res.send("not exist");
    } else {
      res.send("exist");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const adminlogin = async (req, res) => {
  const { usrnm, pwrd } = req.body;
  try {
    const tofind = await adminmodel.find({ usrnm, pwrd });
    if (tofind.length === 0) {
      res.send("not exist");
    } else {
      res.send("exist");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const addJob = async (req, res) => {
  const {
    type,
    location,
    region,
    title,
    email,
    companyname,
    LNusrnm,
    twitter,
    tagline,
    FBusrnm,
    website,
    jobDescription,
  } = req.body;
  try {
    const newJob = new Job({
      type,
      location,
      region,
      title,
      email,
      companyname,
      LNusrnm,
      twitter,
      tagline,
      FBusrnm,
      website,
      jobDescription,
    });
    await newJob.save();
    res.send("Job added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const addpeople = async (req, res) => {
  const { fullname, usrnm, email, pwrd, phone, dob, gender } = req.body;
  try {
    const newmodel = new model({
      fullname,
      usrnm,
      email,
      pwrd,
      phone,
      dob,
      gender,
    });
    await newmodel.save();
    res.send("Job added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getjob = async (req, res) => {
  try {
    const data = await Job.find();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};
const getjobapplicant = async (req, res) => {
  try {
    const data = await Jobapplication.find();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getcourses = async (req, res) => {
  try {
    const data = await Course.find();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const addcourse = async (req, res) => {
  const { name, email, phno, course, why } = req.body;
  try {
    const newCourse = new Course({
      name,
      email,
      phno,
      course,
      why,
    });
    await newCourse.save();
    res.send("Course added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const jobapplicant = async (req, res) => {
  const { name, email, phone, position, companyName, experience, education } =
    req.body;
  try {
    const newjobapplicant = new Jobapplication({
      name,
      email,
      phone,
      position,
      companyName,
      experience,
      education,
    });
    await newjobapplicant.save();
    res.send("Course added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const deletejobseeker = async (req, res) => {
  const { name } = req.params;
  try {
    const data = await Jobapplication.deleteOne({ name });
    if (data.deletedCount > 0) {
      res.status(200).send("msg:deleted");
    } else {
      res.send(" not deleted");
    }
  } catch (err) {
    console.log(err);
  }
};

const deletedashboardcourse = async (req, res) => {
  const { name } = req.params;
  console.log(`Attempting to delete course with name: ${name.trim()}`); // Debugging log
  try {
    const data = await Course.deleteOne({ name: name.trim() });
    console.log(`Delete operation result: ${JSON.stringify(data)}`); // Debugging log
    if (data.deletedCount > 0) {
      res.status(200).send("msg:deleted");
    } else {
      res.status(404).send("Course not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const courseupdate = async (req, res) => {
  const { name, course } = req.body;
  try {
    const data = await Course.findOneAndUpdate(
      {
        name: req.params.name,
      },
      { $set: { name, course } },
      { new: true }
    );
    if (data.modifiedCount > 0) {
      res.status(200).send("updated");
    } else {
      res.send("not updated");
    }
  } catch (err) {
    console.log(err);
  }
};

const jobupdate = async (req, res) => {
  const { name, position, education } = req.body;
  try {
    const data = await Jobapplication.findOneAndUpdate(
      {
        name: req.params.name,
      },
      { $set: { name, education, position } },
      { new: true }
    );
    if (data.modifiedCount > 0) {
      res.status(200).send("updated");
    } else {
      res.send("not updated");
    }
  } catch (err) {
    console.log(err);
  }
};

const getcompany = async (req, res) => {
  try {
    const data = await Company.find();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const deletejob = async (req, res) => {
  const { title } = req.params;
  try {
    const data = await jobmodel.deleteOne({ title });
    if (data.deletedCount > 0) {
      res.status(200).send("msg:deleted");
    } else {
      res.send(" not deleted");
    }
  } catch (err) {
    console.log(err);
  }
};

const jobavailableupdate = async (req, res) => {
  const { title, type, email, region, companyname } = req.body;
  try {
    const data = await jobmodel.findOneAndUpdate(
      {
        title: req.params.title,
      },
      { $set: { title, type, email, region, companyname } },
      { new: true }
    );
    if (data.modifiedCount > 0) {
      res.status(200).send("updated");
    } else {
      res.send("not updated");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  checkPeople,
  addJob,
  adminlogin,
  getjob,
  addcourse,
  jobapplicant,
  getjobapplicant,
  getcourses,
  deletejobseeker,
  deletedashboardcourse,
  courseupdate,
  jobupdate,
  getcompany,
  addpeople,
  deletejob,
  jobavailableupdate
};
