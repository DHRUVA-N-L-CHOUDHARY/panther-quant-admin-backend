const mongoose = require("mongoose");

const IndicatorSchema = new mongoose.Schema({
  name: { type: String },
  elements: [
    {
      key_name: {
        type: String,
      },
      name: {
        type: String,
      },
      defaultValue: {
        type: Number,
      },
      dataType: {
        type: String,
      },
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      description: {
        type: String,
      },
      family: {
        type: String,
      },
    },
  ],
  group: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports =
  mongoose.models.indicators || mongoose.model("indicators", IndicatorSchema);
