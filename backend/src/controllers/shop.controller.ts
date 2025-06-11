import { Request, Response } from "express";

export const getCategories = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const categories = [
      "CLOTHING",
      "FOOTWEAR",
      "ACCESSORIES",
      "PROPERTIES",
      "WEAPONS",
      "VEHICLES",
    ];
    res.json({ categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
