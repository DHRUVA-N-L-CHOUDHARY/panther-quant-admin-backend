const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    walletaddress:{
        type:String,
        required: true,
    },
    currentbalance:{
        type:String,
        required:true,
    },
    dateofjoining:{
        type:String,
        required:true,
    },
    lastonline:{
        type:String,
        required:true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users-details", UserDetailsSchema);
