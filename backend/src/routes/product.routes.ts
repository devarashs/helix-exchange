import { getProducts } from "@/controllers/product.controller";
import { Router } from "express";

const ProductRouter = Router();

ProductRouter.get("/", getProducts);

export default ProductRouter;
