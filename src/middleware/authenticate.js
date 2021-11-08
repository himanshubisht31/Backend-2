require("dotenv").config();
const jwt = require("jsonwebtoken");

function verifyToken(token) {
  return new Promise((res, rej) => {
    jwt.verify(token, process.env.KEY, (error, similar) => {
      if (error) return rej(error);
      else return res(similar);
    });
  });
}

async function authenticate(req, res, next) {
  const bearerToken = req.headers.authorization;

  if (!bearerToken || !bearerToken.startsWith("Bearer"))
    return res.status(400).send({ message: "Bearer token missing" });

  const token = bearerToken.split(" ")[1];

  try {
    const { user } = await verifyToken(token);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(400).send({ message: "Invalid Token" });
  }
}

module.exports = authenticate;
