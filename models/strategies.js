const mongoose = require("mongoose");

const strategiesSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        require: false,
    },
    max_open_trades:{
        type: String,
        require: false,
    },
    dry_run:{
        type: String,
        require: false,
    },
    stakeamount:{
        type: String,
        require: false,
    },
    exchange_name:{
        type: String,
        require: false,
    },
    pair_whitelist:{
        type: String,
        require: false,
    },
    pair_blacklist:{
        type: String,
        require: false,
    },
    stratergy_no:{
        type: String,
        require: false,
    },
    minimal_roi:{
        type: String,
        require: false,
    },
    stoploss:{
        type: String,
        require: false,
    },
    lots:{
        type: String,
        require: false,
    },
    timeframe:{
        type: String,
        require: false,
    },
    enter_long_check:{
        type: String,
        require: false,
    },
    enter_short_check:{
        type: String,
        require: false,
    },
    exit_long_check:{
        type: String,
        require: false,
    },
    exit_short_check:{
        type: String,
        require: false,
    },
    ready:{
        type: String,
        require: false,
    },
    step:{
        type: String,
        require: false,
    },
    indicators_list:{
        type: String,
        require: false,
    },
    state:{
        type: String,
        require: false,
    },
    use_exit_signal:{
        type: String,
        require: false,
    },
    createdAt:{
        type: String,
        require: false,
    },
    updatedAt:{
        type:String,
        require:false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("strategies", strategiesSchema);
