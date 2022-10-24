const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.NODE_LOCAL_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/status", (req, res) => {
  res.send("The server is up and running!");
});

const server = app.listen(port, () => {
  console.log("info: ", `Server is running on port ${port}`);
});

module.exports = server;
