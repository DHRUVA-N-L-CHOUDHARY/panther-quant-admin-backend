const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/users");
const strategiesRoute = require("./routes/strategies");
const indicatorRoute = require("./routes/indactors");
var cors = require("cors");

const uri =
  "mongodb+srv://panter_quant_dev_client:Sx78JD6MtlThDsRe@cluster0.bmekpvd.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();
// dotenv.config();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/strategies", strategiesRoute);
app.use("/api/indicators", indicatorRoute);
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
