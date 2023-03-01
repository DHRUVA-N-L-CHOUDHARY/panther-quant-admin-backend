const router = require("express").Router();

const User = require("../models/users_details");
const Users = require("../models/users");


router.post("/entry", async (req, res) => {
    const newEntry = new User(req.body);
    try {
      const savedEntry = await newEntry.save();
      res.status(200).json(savedEntry);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/details", async (req, res) => {
    try {
      const user = await Users.find();
      // const { password, ...others } = user._doc;
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;