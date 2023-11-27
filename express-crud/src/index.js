const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("hello world");
});

const productController = require("./product/product.controller")

app.use("/products", productController)

app.listen(PORT, () => {
  console.log("Express api running in port: " + PORT);
});
