require("dotenv").config();
const express = require("express");
app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My ROUTES
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`DB CONNECTED`);
  })
  .catch(() => console.log(`db got oops`));

//MiddleWare
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("combined"));

//MyRoutes

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

//Port
const PORT = process.env.PORT || 8000;

//Starting a Server
app.listen(PORT, () => {
  console.log(`Up and Running at ${PORT}`);
});
