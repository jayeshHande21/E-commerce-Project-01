import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    id: uuid(),
    name: "shoes 1",
    price: 51000,
    img: "",
    currency: "INR",
    category: "Ankle",
    details: `ip Processor`,
  },
  {
    id: uuid(),
    name: "shoes 2",
    price: 41000,
    img: "",
    currency: "INR",
    category: "Cowboy",
    details: `
      iOS 13 Compatible`,
  },
  {
    id: uuid(),
    name: "shoes 3",
    price: 81000,
    img: "",
    memory: 128,
    currency: "INR",
    category: "Hiking",
    details: `SHoes No 5`,
  },
];
