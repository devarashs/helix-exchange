import { CollectionService } from "@/services/collection.service";
import { Request, Response } from "express";

const collectionService = new CollectionService();

export const getAllCollections = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const category = req.query.category as string | undefined;
    const categorySlug = req.query.categorySlug as string | undefined;
    const filters = {
      category,
      categorySlug,
    };
    const collections = await collectionService.getAllCollections(filters);
    res.json({ collections });
  } catch (error) {
    console.error("Error fetching collections:", error);
    res.status(500).json({ error: "Failed to fetch collections" });
  }
};
