const express = require("express");
const router = express.Router();
// const { check, validationResult } = require('express-validator');
// const auth = require('../../middleware/auth');

const Trainerr = require("../models/Trainerr");

router.get("/", async (req, res) => {
 
  try {
    const reqs = await Trainerr.find();
    res.json(reqs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newTrainnerr = new Trainerr({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender,
      age: req.body.age,
      goals: req.body.goals,
      callDate: req.body.callDate,
      freeInfo: req.body.freeInfo,
    });
    

    const trequest = await newTrainnerr.save();

    res.json(trequest);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
