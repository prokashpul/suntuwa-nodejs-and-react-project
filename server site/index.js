const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

// get api
app.get("/", async (req, res) => {
  res.send("Hello world ");
});

//app listen
app.listen(port, () => {
  console.log(`Your server ${port}`);
});
