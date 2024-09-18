// const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./route");
// const app = express();
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect("mongodb://localhost:27017/jobportal")
//   .then("Connected")
//   .catch((err) => console.log(err));

// app.use("/", routes);
// app.listen(8000, () => {
//   console.log("working on 8000");
// });

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./route");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/jobportal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

app.use("/", routes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
