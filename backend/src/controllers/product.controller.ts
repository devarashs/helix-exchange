import { ProductService } from "@/services/product.service";
import { Request, Response } from "express";

const productService = new ProductService();

export const getProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const products = await productService.getAllProducts();
    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
