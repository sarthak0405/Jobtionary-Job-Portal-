// // const express = require("express");
// // const controllerss = require("./controller");

// // const route = express.Router();

// // route.post("/login", controllerss.checkpeople);

// // module.exports = route;
// // route.js
// const express = require("express");
// const {
//   checkPeople,
//   addJob,
//   adminlogin,
//   getjob,
//   addcourse,
//   jobapplicant,
//   getjobapplicant,
//   getcourses,
//   deletejobseeker,
//   deletedashboardcourse,
// } = require("./controller");

// const router = express.Router();

// router.post("/login", checkPeople);
// router.post("/addjob", addJob);
// router.post("/adminlogin", adminlogin);
// router.get("/getjob", getjob);
// router.post("/addcourse", addcourse);
// router.post("/jobapplication", jobapplicant);
// router.get("/getjobapplicant", getjobapplicant);
// router.get("/getcourses", getcourses);
// router.delete("/deletejobapplicant/:name", deletejobseeker);
// router.delete("/deletedashboardcourse/:name", deletedashboardcourse);
// module.exports = router;
const express = require("express");
const {
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
  jobavailableupdate,
} = require("./controller");

const router = express.Router();
router.post("/Signup", addpeople);
router.post("/login", checkPeople);
router.post("/addjob", addJob);
router.post("/adminlogin", adminlogin);
router.get("/getjob", getjob);
router.delete("/deletejob/:title", deletejob);
router.put("/updatejob/:title", jobavailableupdate);
router.post("/addcourse", addcourse);
router.post("/jobapplication", jobapplicant);
router.get("/getjobapplicant", getjobapplicant);
router.get("/getcompany", getcompany);
router.get("/getcourses", getcourses);
router.delete("/deletejobapplicant/:name", deletejobseeker);
router.delete("/deletedashboardcourse/:name", deletedashboardcourse);
router.put("/updatecourse/:name", courseupdate);
router.put("/updatejob/:name", jobupdate);
module.exports = router;
