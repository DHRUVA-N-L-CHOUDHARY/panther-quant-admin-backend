const router = require("express").Router();
const Indicator = require("../models/indicators");

router.get("/", async (req, res) => {
  try {
    const indicators = await Indicator.find({});
    res.status(200).json(indicators);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/add", async (req, res) => {
  try {
    const { indicator } = req.body;
    console.log(indicator);
    const temp = new Indicator({ ...indicator });
    await temp.save();
    res.json(temp);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
