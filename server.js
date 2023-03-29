const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/users");
const strategiesRoute = require("./routes/strategies");
const indicatorRoute = require("./routes/indactors");
var cors = require("cors");
const helmet = require("helmet");
const fs = require("fs");
const https = require("https");

app.use(helmet());

const options = {
  key: fs.readFileSync(
    "/etc/letsencrypt/live/admin.pantherquant.io/privkey.pem"
  ),
  cert: fs.readFileSync(
    "/etc/letsencrypt/live/admin.pantherquant.io/fullchain.pem"
  ),
};

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
app.listen(80, () => {
  console.log("Server started on port 80");
});

https
  .createServer(options, app)
  .on("secureConnection", (socket) => {
    socket.setTimeout(10 * 60 * 1000);
  })
  .listen(443);
