import Item from "@/models/Item";
import User from "@/models/User";
import Collection from "@/models/Collection";
import mongoose from "mongoose";

export class ItemService {
  async getAllItems({
    filters,
  }: {
    filters: { collectionSlug?: string; itemId?: string; itemName?: string };
  }) {
    try {
      // Ensure User and Collection models are registered
      if (!mongoose.modelNames().includes("User")) {
        mongoose.model("User", User.schema);
      }
      if (!mongoose.modelNames().includes("Collection")) {
        mongoose.model("Collection", Collection.schema);
      }
      // Find collection by slug if provided
      let collectionId: string | undefined;

      if (filters.collectionSlug) {
        const collection = await Collection.findOne({
          slug: filters.collectionSlug,
        }).lean();
        if (collection) {
          collectionId = collection._id.toString();
        } else {
          throw new Error("Collection not found");
        }
      }

      // Build query filter
      const filter: Record<string, unknown> = {};
      if (collectionId) {
        filter.collectionId = collectionId;
      }
      if (filters.itemId) {
        filter._id = filters.itemId;
      }
      if (filters.itemName) {
        filter.name = { $regex: new RegExp(filters.itemName, "i") }; // Case-insensitive search
      }

      // Fetch items from DB
      return await Item.find(filter)
        .populate("ownerId", "username avatar")
        .populate("collectionId", "name image")
        .lean();
    } catch (error) {
      console.error("Error fetching items:", error);
      throw new Error("Failed to fetch items");
    }
  }
}
