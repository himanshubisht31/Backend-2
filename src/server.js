const express = require("express");
const connect = require("./config/db");
const userController=require('./controller/user.controller')
const lectureController=require('./controller/lecture.controller')
const {register,login}=require('./controller/auth.controller')


const app = express();
app.use(express.json())

app.use("/users", userController);
app.use("/lectures", lectureController);
app.post("/users/register", register);
app.post("/users/login", login);

app.listen(5000, async () => {
  await connect();
  console.log("Listening on port 5000");
});
