import { Router } from "express";
import { getAllItems } from "@/controllers/item.controller";

const ItemRouter = Router();

ItemRouter.get("/", getAllItems);

export default ItemRouter;
