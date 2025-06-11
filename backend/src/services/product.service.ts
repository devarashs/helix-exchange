export class ProductService {
  async getAllProducts() {
    // Fetch all products from DB (mocked here)
    return [
      {
        id: "itm-br-knife-001",
        collectionId: "col-blade-runner",
        name: "HELIX X Blade Runner Knife",
        image: "/img/items/blade-runner-knife.png",
        description:
          "Factory\u2011new tactical knife, carbon steel with red neon accents.",
        attributes: {
          type: "Knife",
          condition: "Factory New",
          productionYear: 2021,
          mobility: 120,
        },
        ownerId: "usr-alex",
      },
      {
        id: "itm-fd-rifle-001",
        collectionId: "col-fire-dragon",
        name: "Fire Dragon AR\u201124",
        image: "/img/items/fire-dragon-ar.png",
        description: "Assault rifle sporting the Fire Dragon reactive skin.",
        attributes: {
          type: "Assault Rifle",
          condition: "Field\u2011Tested",
          productionYear: 2022,
          mobility: 80,
        },
        ownerId: "usr-alex",
      },
      {
        id: "itm-br-knife-002",
        collectionId: "col-blade-runner",
        name: "Blade Runner Knife \u2013 Camo",
        image: "/img/items/blade-runner-knife-camo.png",
        description: "Limited camo edition of the Blade Runner knife.",
        attributes: {
          type: "Knife",
          condition: "Factory New",
          productionYear: 2021,
          mobility: 115,
        },
        ownerId: "usr-blake",
      },
    ];
  }
}
