import { ItemService } from "@/services/item.service";
import { Request, Response } from "express";

const itemService = new ItemService();

export const getAllItems = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const collectionSlug = req.query.collectionSlug as string | undefined;
    const itemId = req.query.itemId as string | undefined;
    const itemSlug = req.query.itemSlug as string | undefined;
    const refineSlug = itemSlug ? itemSlug.replace(/-/g, " ") : undefined;

    const filters = {
      collectionSlug: collectionSlug || undefined,
      itemId: itemId || undefined,
      itemName: refineSlug,
    };

    const items = await itemService.getAllItems({ filters });
    res.json({ items });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Failed to fetch items" });
  }
};
