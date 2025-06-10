import express from "express";
import dotenv from "dotenv";
import ProductRouter from "./routes/product.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello, world!");
});

app.use("/products", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
