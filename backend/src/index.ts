import express from "express";
import dotenv from "dotenv";
import ProductRouter from "./routes/product.routes";
import ShopRouter from "./routes/shop.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello, world!");
});

app.use("/products", ProductRouter);
app.use("/shop", ShopRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
