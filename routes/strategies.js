const router = require("express").Router();

const { default: mongoose } = require("mongoose");
const strategies = require("../models/strategies");

router.get("/", async (req, res) => {
  try {
    const stratergy = await strategies.find();
    res.status(200).json(stratergy);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/getBacktestData", async (req, res) => {
  try {
    const { user, sno } = req.body;
    const data = new strategies.find({
      $and: [
        { user: new mongoose.Types.ObjectId(user) },
        { stratergy_no: sno },
      ],
    });
    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
