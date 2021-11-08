const express = require("express");
const connect = require("./config/db");

const app = express();

app.listen(5000, async () => {
  await connect();
  console.log("Listening on port 5000");
});
