import Collection from "@/models/Collection";

export class CollectionService {
  async getAllCollections() {
    try {
      // Fetch all collections from DB
      return await Collection.find().lean();
    } catch (error) {
      console.error("Error fetching collections:", error);
      throw new Error("Failed to fetch collections");
    }
  }
}
