const express = require("express");
const connect = require("./config/db");
const userController=require('./controller/user.controller')


const app = express();
app.use(express.json())

app.use("/users", userController);

app.listen(5000, async () => {
  await connect();
  console.log("Listening on port 5000");
});
