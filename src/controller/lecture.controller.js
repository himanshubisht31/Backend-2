const express = require("express");
const authorize = require("../middleware/authorize");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
const Lecture = require("../model/lecture.model");

router.post(
  "/",
  authenticate,
  authorize(["instructor", "admin"]),
  async (req, res) => {
    try {
      const lecture = await Lecture.create(req.body);
      return res.status(200).send({ lecture: lecture });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const lecture = await Lecture.find().lean().exec();
    return res.status(200).send(lecture);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});


router.patch(
  "/",
  authenticate,
  authorize(["instructor", "admin"]),
  async (req, res) => {
    try {
      const lecture = await Lecture.create(req.body);
      return res.status(200).send({ lecture: lecture });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
);
