import Collection from "@/models/Collection";
import User from "@/models/User";
import mongoose from "mongoose";

export class CollectionService {
  async getAllCollections(filters: {
    category?: string;
    categorySlug?: string;
  }) {
    const { category, categorySlug } = filters;
    try {
      // Ensure User model is registered
      if (!mongoose.modelNames().includes("User")) {
        mongoose.model("User", User.schema);
      }

      // Build filter object
      const filter: Record<string, unknown> = {};
      if (category) {
        filter.category = category;
      }
      if (categorySlug) {
        filter.slug = categorySlug;
      }

      // Fetch collections with optional category filter
      return await Collection.find(filter).populate("owner").lean();
    } catch (error) {
      console.error("Error fetching collections:", error);
      throw new Error("Failed to fetch collections");
    }
  }
}
