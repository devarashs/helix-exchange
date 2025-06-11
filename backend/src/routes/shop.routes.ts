import { getCategories } from "@/controllers/shop.controller";
import { Router } from "express";

const ShopRouter = Router();

ShopRouter.get("/categories", getCategories);

export default ShopRouter;
