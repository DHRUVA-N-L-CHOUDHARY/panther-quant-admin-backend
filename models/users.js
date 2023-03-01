const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    wallet_id: {
      type: String,
      required: false,
    },
    // createdAt:{
    //     type:String,
    //     required: true,
    // },
    // updatedAt:{
    //     type:String,
    //     required:true,
    // },
    // dateofjoining:{
    //     type:String,
    //     required:true,
    // },
    // lastonline:{
    //     type:String,
    //     required:true,
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", usersSchema);
