const User = require("../model/user.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = (user) => jwt.sign({ user }, process.env.KEY);

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user)
      return res.status(400).send({ message: "Please enter unique mail" });

    user = await User.create(req.body);
    const token = createToken(user);

    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send({ message: "User not found" });

    let passwordCheck = user.checkPassword(req.body.password);

    if (!passwordCheck)
      return res.status(400).send({ message: "User not found" });

    const token = createToken(user);
    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports={register,login}
