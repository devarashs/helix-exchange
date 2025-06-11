import Collection from "@/models/Collection";
import User from "@/models/User";
import mongoose from "mongoose";

export class CollectionService {
  async getAllCollections() {
    try {
      // Make sure User model is registered properly
      if (!mongoose.modelNames().includes("User")) {
        // This ensures User model is registered if it wasn't already
        mongoose.model("User", User.schema);
      }

      // Fetch all collections from DB
      return await Collection.find().populate("owner").lean();
    } catch (error) {
      console.error("Error fetching collections:", error);
      throw new Error("Failed to fetch collections");
    }
  }
}
