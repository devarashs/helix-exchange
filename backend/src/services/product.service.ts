export class ProductService {
  async getAllProducts() {
    // Fetch all products from DB (mocked here)
    return [
      { id: 1, name: "Product A", category: "Books" },
      { id: 2, name: "Product B", category: "Electronics" },
      // ...more products
    ];
  }

  async getCategories() {
    const products = await this.getAllProducts();
    // Extract unique categories
    return [...new Set(products.map((p) => p.category))];
  }
}
