import mongoose, { Types } from "mongoose";

const items = [
  // Panda Weapon Pack Items
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994080"),
    name: "Bamboo Blaster",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg?width=1200&quality=75&format=auto",
    description:
      "A sleek, panda-themed blaster with bamboo accents and exceptional accuracy.",
    attributes: {
      type: "Blaster",
      condition: "Factory New",
      productionYear: 2024,
      mobility: 85,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b2"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994080"),
    name: "Panda's Paw Dagger",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg?width=1200&quality=75&format=auto",
    description:
      "A ceremonial dagger with a black and white handle, featuring jade inlay.",
    attributes: {
      type: "Melee",
      condition: "Minimal Wear",
      productionYear: 2023,
      mobility: 95,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b2"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994080"),
    name: "Bamboo Forest Rifle",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg?width=1200&quality=75&format=auto",
    description:
      "Long-range rifle with bamboo-patterned stock and panda motifs.",
    attributes: {
      type: "Rifle",
      condition: "Battle-Scarred",
      productionYear: 2022,
      mobility: 65,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b2"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994080"),
    name: "Giant Panda Launcher",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg?width=1200&quality=75&format=auto",
    description: "Heavy-duty launcher decorated with intricate panda artwork.",
    attributes: {
      type: "Launcher",
      condition: "Well-Worn",
      productionYear: 2024,
      mobility: 45,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b2"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994080"),
    name: "Zen Panda Sword",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg?width=1200&quality=75&format=auto",
    description:
      "Elegant katana with black and white hilt wrapping and panda engraving.",
    attributes: {
      type: "Melee",
      condition: "Factory New",
      productionYear: 2025,
      mobility: 90,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b2"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994080"),
    name: "Panda's Revenge Pistol",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg?width=1200&quality=75&format=auto",
    description: "Compact sidearm with panda-themed grip and bamboo accents.",
    attributes: {
      type: "Pistol",
      condition: "Field-Tested",
      productionYear: 2023,
      mobility: 95,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b2"),
  },

  // Cat Weapon Pack Items
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994081"),
    name: "Feline Fury Shotgun",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg?width=1200&quality=75&format=auto",
    description:
      "Short-range devastator with cat-like reflexes and whisker detailing.",
    attributes: {
      type: "Shotgun",
      condition: "Factory New",
      productionYear: 2024,
      mobility: 75,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994081"),
    name: "Siamese Sniper",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg?width=1200&quality=75&format=auto",
    description:
      "Precision long-range rifle with dual-tone finish and cat eye scope.",
    attributes: {
      type: "Sniper",
      condition: "Minimal Wear",
      productionYear: 2024,
      mobility: 40,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994081"),
    name: "Calico Claws",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg?width=1200&quality=75&format=auto",
    description:
      "Multi-colored blade set with retractable mechanism and cat's paw grip.",
    attributes: {
      type: "Melee",
      condition: "Field-Tested",
      productionYear: 2023,
      mobility: 100,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994081"),
    name: "Persian Purrer",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg?width=1200&quality=75&format=auto",
    description:
      "Silenced submachine gun with luxurious finish and cat-themed engravings.",
    attributes: {
      type: "SMG",
      condition: "Factory New",
      productionYear: 2025,
      mobility: 85,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994081"),
    name: "Tabby Tactical",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg?width=1200&quality=75&format=auto",
    description:
      "Assault rifle with striped pattern and cat-like agility in handling.",
    attributes: {
      type: "Rifle",
      condition: "Well-Worn",
      productionYear: 2022,
      mobility: 70,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },

  // Dog Weapon Pack Items
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994082"),
    name: "Bulldog Blaster",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/11/Valorant-Store-screenshot-1212x682-1.png?width=1200&quality=75&format=auto",
    description:
      "Heavy-hitting assault weapon with bulldog-inspired design and bite.",
    attributes: {
      type: "Rifle",
      condition: "Factory New",
      productionYear: 2024,
      mobility: 60,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994082"),
    name: "Shepherd's Shield",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/11/Valorant-Store-screenshot-1212x682-1.png?width=1200&quality=75&format=auto",
    description:
      "Defensive handgun with reliable performance and protective shield attachment.",
    attributes: {
      type: "Pistol",
      condition: "Minimal Wear",
      productionYear: 2023,
      mobility: 90,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994082"),
    name: "Retriever Rifle",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/11/Valorant-Store-screenshot-1212x682-1.png?width=1200&quality=75&format=auto",
    description:
      "Golden-finish sniper rifle with exceptional range and loyalty to its target.",
    attributes: {
      type: "Sniper",
      condition: "Factory New",
      productionYear: 2025,
      mobility: 45,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994082"),
    name: "Doberman Dagger",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/11/Valorant-Store-screenshot-1212x682-1.png?width=1200&quality=75&format=auto",
    description:
      "Sleek, black combat knife with aggressive styling and razor-sharp edge.",
    attributes: {
      type: "Melee",
      condition: "Field-Tested",
      productionYear: 2023,
      mobility: 100,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994082"),
    name: "Greyhound Gunner",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/11/Valorant-Store-screenshot-1212x682-1.png?width=1200&quality=75&format=auto",
    description:
      "Rapid-fire SMG with sleek design and unmatched speed in action.",
    attributes: {
      type: "SMG",
      condition: "Factory New",
      productionYear: 2024,
      mobility: 95,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994082"),
    name: "Pug Puncher",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/11/Valorant-Store-screenshot-1212x682-1.png?width=1200&quality=75&format=auto",
    description:
      "Compact but powerful sidearm with wrinkled texture grip and fierce impact.",
    attributes: {
      type: "Pistol",
      condition: "Battle-Scarred",
      productionYear: 2022,
      mobility: 90,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b8"),
  },

  // Turtle Weapon Pack Items
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994083"),
    name: "Shell Shocker",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/08/elderflame-collection-valorant.jpg?width=1200&quality=75&format=auto",
    description:
      "Heavy shotgun with turtle shell pattern and devastating close-range power.",
    attributes: {
      type: "Shotgun",
      condition: "Minimal Wear",
      productionYear: 2024,
      mobility: 40,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67ba"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994083"),
    name: "Terrapin Tactical",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/08/elderflame-collection-valorant.jpg?width=1200&quality=75&format=auto",
    description:
      "Mid-range rifle with armored plating and exceptional durability in combat.",
    attributes: {
      type: "Rifle",
      condition: "Factory New",
      productionYear: 2025,
      mobility: 55,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67ba"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994083"),
    name: "Snapping Shield",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/08/elderflame-collection-valorant.jpg?width=1200&quality=75&format=auto",
    description:
      "Defensive handgun with turtle-inspired shield attachment and snapping mechanism.",
    attributes: {
      type: "Pistol",
      condition: "Field-Tested",
      productionYear: 2023,
      mobility: 75,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67ba"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994083"),
    name: "Galapagos Grenade",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/08/elderflame-collection-valorant.jpg?width=1200&quality=75&format=auto",
    description:
      "Explosive device shaped like a turtle shell with island-inspired engravings.",
    attributes: {
      type: "Explosive",
      condition: "Factory New",
      productionYear: 2024,
      mobility: 80,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67ba"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994083"),
    name: "Ancient Shell Blade",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/08/elderflame-collection-valorant.jpg?width=1200&quality=75&format=auto",
    description:
      "Ceremonial blade crafted from ancient turtle shell patterns with jade inlay.",
    attributes: {
      type: "Melee",
      condition: "Well-Worn",
      productionYear: 2020,
      mobility: 85,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67ba"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994083"),
    name: "Sea Turtle Sniper",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2020/08/elderflame-collection-valorant.jpg?width=1200&quality=75&format=auto",
    description:
      "Ocean-themed long-range rifle with turtle shell pattern and aqua accents.",
    attributes: {
      type: "Sniper",
      condition: "Factory New",
      productionYear: 2024,
      mobility: 35,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67ba"),
  },

  // Axolotl Weapon Pack Items
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994084"),
    name: "Amphibian Assault Boots",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/01/valorant-zedd-spectrum-skins-scaled.jpeg?width=1200&quality=75&format=auto",
    description:
      "Water-ready combat boots with axolotl-inspired color-shifting capabilities.",
    attributes: {
      type: "Boots",
      condition: "Factory New",
      productionYear: 2025,
      mobility: 90,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b6"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994084"),
    name: "Regeneration Runners",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/01/valorant-zedd-spectrum-skins-scaled.jpeg?width=1200&quality=75&format=auto",
    description:
      "Self-repairing sneakers with axolotl-inspired healing technology.",
    attributes: {
      type: "Sneakers",
      condition: "Minimal Wear",
      productionYear: 2024,
      mobility: 95,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b6"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994084"),
    name: "Pink Gill Loafers",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/01/valorant-zedd-spectrum-skins-scaled.jpeg?width=1200&quality=75&format=auto",
    description:
      "Elegant footwear with gill-like ventilation and vibrant pink accents.",
    attributes: {
      type: "Loafers",
      condition: "Factory New",
      productionYear: 2025,
      mobility: 75,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b6"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994084"),
    name: "Aquatic Trail Hikers",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/01/valorant-zedd-spectrum-skins-scaled.jpeg?width=1200&quality=75&format=auto",
    description:
      "All-terrain boots with amphibious capabilities and water-resistant finish.",
    attributes: {
      type: "Hiking Boots",
      condition: "Field-Tested",
      productionYear: 2023,
      mobility: 85,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b6"),
  },
  {
    collectionId: new Types.ObjectId("6849d3fb2bbba9d05c994084"),
    name: "Neotenic Neon Heels",
    image:
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/01/valorant-zedd-spectrum-skins-scaled.jpeg?width=1200&quality=75&format=auto",
    description:
      "Glowing designer heels with axolotl-inspired color patterns that shift in darkness.",
    attributes: {
      type: "Heels",
      condition: "Factory New",
      productionYear: 2024,
      mobility: 65,
    },
    ownerId: new Types.ObjectId("6849d2277e4ef5baf93e67b6"),
  },
];

async function importData() {
  try {
    await mongoose.connect("mongodb://localhost:27017/helix-exchange"); // Change DB name/URI if needed
    // Assuming you have an Item model defined
    const Item = mongoose.model(
      "Item",
      new mongoose.Schema({
        collectionId: Types.ObjectId,
        name: String,
        image: String,
        description: String,
        attributes: Object,
        ownerId: Types.ObjectId,
      }),
    );

    await Item.deleteMany({}); // Optional: clear existing data
    await Item.insertMany(items);
    console.log("Items imported successfully!");
  } catch (error) {
    console.error("Error importing items:", error);
  } finally {
    await mongoose.disconnect();
  }
}

importData()
  .then(() => console.log("Import completed."))
  .catch((err) => console.error("Import failed:", err));
