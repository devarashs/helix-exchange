import { ShopService } from "@/services/shop.services";
import { Request, Response } from "express";

const shopService = new ShopService();

export const getCategories = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const categories = await shopService.getCategories();
    res.json({ categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
