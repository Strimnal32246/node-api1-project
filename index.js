// implement your API here
const express = require("express");
const db = require("./data/db.js");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send({ api: "up and running..." });
});


