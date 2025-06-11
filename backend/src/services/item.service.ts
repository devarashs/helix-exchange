import Item from "@/models/Item";
import User from "@/models/User";
import Collection from "@/models/Collection";
import mongoose from "mongoose";

export class ItemService {
  async getAllItems(collectionSlug?: string) {
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
      if (collectionSlug) {
        const collection = await Collection.findOne({
          slug: collectionSlug,
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
