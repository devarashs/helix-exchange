import Collection from "@/models/Collection";
import mongoose, { Types } from "mongoose";

const collections = [
  {
    slug: "panda-weapon-pack",
    name: "Panda Weapon Pack",
    category: "accessories",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg?width=1200&quality=75&format=auto",
    floorPrice: 1000,
    volume24h: 10000,
    owner: new Types.ObjectId("6849d2277e4ef5baf93e67b2"),
  },
  {
    slug: "cat-weapon-pack",
    name: "Cat Weapon Pack",
    category: "weapons",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg?width=1200&quality=75&format=auto",
    floorPrice: 100,
    volume24h: 2222,
    owner: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    slug: "dog-weapon-pack",
    name: "Dog Weapon Pack",
    category: "weapons",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/11/Valorant-Store-screenshot-1212x682-1.png?width=1200&quality=75&format=auto",
    floorPrice: 10000,
    volume24h: 1000,
    owner: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    slug: "turtle-weapon-pack",
    name: "Turtle Weapon Pack",
    category: "weapons",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/08/elderflame-collection-valorant.jpg?width=1200&quality=75&format=auto",
    floorPrice: 5000,
    volume24h: 5000,
    owner: new Types.ObjectId("6849d2277e4ef5baf93e67ba"),
  },
  {
    slug: "axolotl-weapon-pack",
    name: "Axolotl Weapon Pack",
    category: "footwear",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/01/valorant-zedd-spectrum-skins-scaled.jpeg?width=1200&quality=75&format=auto",
    floorPrice: 2500,
    volume24h: 7500,
    owner: new Types.ObjectId("6849d2277e4ef5baf93e67b6"),
  },
];

async function importData() {
  try {
    await mongoose.connect("mongodb://localhost:27017/helix-exchange"); // Change DB name/URI if needed
    await Collection.deleteMany({}); // Optional: clear existing data
    await Collection.insertMany(collections);
    console.log("Dummy data imported!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

importData();
