import express from "express";
import dotenv from "dotenv";
import ShopRouter from "./routes/shop.routes";
import mongoose from "mongoose";
import CollectionRouter from "./routes/collection.routes";
import ItemRouter from "./routes/item.routes";
import UserRouter from "./routes/user.routes";

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// MongoDB connection
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/helix-exchange";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (_req, res) => {
  res.send("Hello, world!");
});

app.use("/shop", ShopRouter);
app.use("/collection", CollectionRouter);
app.use("/item", ItemRouter);
app.use("/user", UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
