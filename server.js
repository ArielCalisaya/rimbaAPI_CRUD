const express = require("express");
const clothesRoute = require("./src/routes/clothesRoute");
const userRoute = require("./src/routes/userRoute");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyP = require("body-parser");

// DB configuration
require("./util/configDB");

const port = process.env.PORT || 3330
const host = process.env.HOST

dotenv.config();

const app = express();

app.use(bodyP.json());
app.use(bodyP.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/users/", userRoute);
app.use("/api/clothes/", clothesRoute);
app.get("/api/clothes/", (req, res) => {
  res.send("void");
});

app.listen(port, () => {
  console.log(`server running on port http://${host}:${port}`);
});
