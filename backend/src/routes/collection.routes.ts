import { Router } from "express";
import { getAllCollections } from "@/controllers/collection.controller";

const CollectionRouter = Router();

CollectionRouter.get("/", getAllCollections);

export default CollectionRouter;
