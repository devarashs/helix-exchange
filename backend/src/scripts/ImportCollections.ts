import Collection from "@/models/Collection";
import mongoose from "mongoose";

const collections = [
  {
    slug: "panda-weapon-pack",
    name: "Panda Weapon Pack",
    category: "accessories",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg?width=1200&quality=75&format=auto",
    floorPrice: 1000,
    volume24h: 10000,
    owner: {
      name: "John Doe",
      avatar:
        "https://i.pinimg.com/236x/11/de/fc/11defc17b380ab9fe1861cd0aa817dc2.jpg",
    },
  },
  {
    slug: "cat-weapon-pack",
    name: "Cat Weapon Pack",
    category: "weapons",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg?width=1200&quality=75&format=auto",
    floorPrice: 100,
    volume24h: 2222,
    owner: {
      name: "Jane Smith",
      avatar:
        "https://i.pinimg.com/originals/e7/41/85/e74185538462b372d6e62791b399138f.jpg",
    },
  },
  {
    slug: "dog-weapon-pack",
    name: "Dog Weapon Pack",
    category: "weapons",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/11/Valorant-Store-screenshot-1212x682-1.png?width=1200&quality=75&format=auto",
    floorPrice: 10000,
    volume24h: 1000,
    owner: {
      name: "Alice Johnson",
      avatar:
        "https://i.pinimg.com/736x/17/7f/c6/177fc6ca5d840284a8347ac68ab74d40.jpg",
    },
  },
  {
    slug: "turtle-weapon-pack",
    name: "Turtle Weapon Pack",
    category: "weapons",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/08/elderflame-collection-valorant.jpg?width=1200&quality=75&format=auto",
    floorPrice: 5000,
    volume24h: 5000,
    owner: {
      name: "Bob Brown",
      avatar:
        "https://i.pinimg.com/236x/1b/8c/e8/1b8ce804e9cc7f9dbeb7f52176c63b8a.jpg",
    },
  },
  {
    slug: "axolotl-weapon-pack",
    name: "Axolotl Weapon Pack",
    category: "footwear",
    coverImage:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/01/valorant-zedd-spectrum-skins-scaled.jpeg?width=1200&quality=75&format=auto",
    floorPrice: 2500,
    volume24h: 7500,
    owner: {
      name: "Charlie Lee",
      avatar:
        "https://i.pinimg.com/736x/41/b7/11/41b7116ed040864dd32c7b09e4ba536e.jpg",
    },
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
