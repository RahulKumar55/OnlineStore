/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "p1",
    title: "Sony Speaker h1",
    description: "Sony Speaker for home from h series",
    price: 39999,
    discontinued: false,
    categories: ["c1", "c2"],
    imageUrl: "./files/electronics.jpg"
  },

  {
    id: "p2",
    title: "Dell inspiron",
    description: "Laptop/Computer",
    price: 64999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./files/electronics.jpg"
  },

  {
    id: "p3",
    title: "Cotten Bedsheet",
    description: "Comfy Bedsheet for your bed",
    price: 1999,
    discontinued: false,
    categories: ["c1", "c3"],
    imageUrl: "./files/clothes.jpg"
  },

  {
    id: "p4",
    title: "TTC Pass",
    description: "Transit Pass for Toronto",
    price: 15000,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./files/tickets.jpg"
  },

  {
    id: "p5",
    title: "Brampton Pass",
    description: "Transit Pass for Brampton",
    price: 15000,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./files/tickets.jpg"
  },

  {
    id: "p6",
    title: "MiWay Pass",
    description: "Transit Pass for Missisauga",
    price: 15000,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./files/tickets.jpg"
  },

  {
    id: "p7",
    title: "iPhone 6",
    description: "Apple's iPhone 6",
    price: 69999,
    discontinued: true,
    categories: ["c2"],
    imageUrl: "./files/electronics.jpg"
  },

  {
    id: "p8",
    title: "Woolen Coat",
    description: "It will keep you warm",
    price: 34999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./files/clothes.jpg"
  },

  {
    id: "p9",
    title: "LG Z3 TV",
    description: "LG TV from Z series",
    price: 139999,
    discontinued: false,
    categories: ["c1", "c2"],
    imageUrl: "./files/tv.jpg"
  },

  {
    id: "p10",
    title: "G-Eazy show",
    description: "Concert tickets",
    price: 79999,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./files/tickets.jpg"
  },

  {
    id: "p11",
    title: "Eminem show",
    description: "Concert tickets",
    price: 99999,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./files/tickets.jpg"
  },

  {
    id: "p12",
    title: "Drake show",
    description: "Concert tickets",
    price: 89999,
    discontinued: true,
    categories: ["c4"],
    imageUrl: "./files/tickets.jpg"
  },

  {
    id: "p13",
    title: "Samsung Speaker K1",
    description: "Samsung Speaker from k series",
    price: 29999,
    discontinued: true,
    categories: ["c2"],
    imageUrl: "./files/electronics.jpg"
  },

  {
    id: "p14",
    title: "Wooden Table",
    description: "Dining table",
    price: 39999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./files/tablechair.jpg"
  },

  {
    id: "p15",
    title: "Chair set",
    description: "Set of 6 chairs",
    price: 29999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./files/tablechair.jpg"
  },

  {
    id: "p16",
    title: "Sony Microwave",
    description: "Microwave to heat your food",
    price: 9999,
    discontinued: false,
    categories: ["c1", "c2"],
    imageUrl: "./files/electronics.jpg"
  },

  {
    id: "p17",
    title: "Google Pixel 6",
    description: "Android Phone",
    price: 69999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./files/electronics.jpg"
  },

  {
    id: "p18",
    title: "Socks",
    description: "Socks for your feet",
    price: 2999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./files/clothes.jpg"
  },

  {
    id: "p19",
    title: "Silk Shirt",
    description: "Stylish shirt for Women",
    price: 4999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./files/clothes.jpg"
  },

  {
    id: "p20",
    title: "Leather Pants",
    description: "Pants for Men",
    price: 8999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./files/clothes.jpg"
  }
];
