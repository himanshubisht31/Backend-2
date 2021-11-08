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
  "/:id",
  authenticate,
  authorize(["admin"]),
  async (req, res) => {
    try {
      const lecture = await Lecture.findByIdAndUpdate(req.params.id,req.body,{new:true});
      return res.status(200).send(lecture );
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
);


router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  async (req, res) => {
    try {
      const lecture = await Lecture.findByIdAndUpdate(req.params.id,req.body);
      return res.status(200).send(lecture );
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
);


router.get(
  "/:id",
  async (req, res) => {
    try {
      const lecture = await Lecture.find(req.params.id);
      return res.status(200).send(lecture );
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
);


module.exports=router