const express = require("express");
// const cors = require("cors");

const app = express();

// Enable CORS for all routes
// app.use(cors());

// Your routes and other server setup

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
