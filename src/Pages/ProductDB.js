import { v4 as uuid } from "uuid";
import img1 from "../Images/img1.jpeg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpeg";
import img4 from "../Images/img4.jpeg";
import img5 from "../Images/img5.jpeg";
import img6 from "../Images/img6.jpeg";
import img7 from "../Images/img7.jpeg";
import img8 from "../Images/img8.jpeg";
import img9 from "../Images/img9.jpeg";
import img10 from "../Images/img10.jpeg";
import img11 from "../Images/img11.jpeg";
import img12 from "../Images/img12.jpeg";
import img13 from "../Images/img13.jpeg";
import img14 from "../Images/img14.jpeg";
import img15 from "../Images/img15.jpeg";
import img16 from "../Images/img16.jpeg";
import img17 from "../Images/img17.jpeg";
import img18 from "../Images/img18.jpeg";

export const ProductDB = [
  {
    id: uuid(),
    name: "RedTape",
    price: 7599,
    img: img1,
    size: "S",
    currency: "INR",
    category: "Men",
    productCategory: "Ankle",
    details: `Closure Type : Zipper`,
    rating: 1.7,
    quantity: 1,
  },
  {
    id: uuid(),
    name: "LAREDO",
    price: 25295,
    img: img2,
    size: "L",
    currency: "INR",
    category: "Women",
    productCategory: "Cowboy",
    details: `
        Closure type : Pull-On`,
    rating: 4.4,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Littleplum",
    price: 9299,
    img: img3,
    size: "M",
    memory: 128,
    currency: "INR",
    category: "Kids",
    productCategory: "Hiking",
    details: `Closure Type : Hook & Loop`,
    rating: 2.4,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "ARIAT",
    price: 42691,
    img: img4,
    size: "XL",
    memory: 128,
    currency: "INR",
    category: "Men",
    productCategory: "Cowboy",
    details: `Closure Type : Slip-On`,
    rating: 3.4,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Columbia",
    price: 13999,
    img: img5,
    size: "XXL",
    currency: "INR",
    category: "Women",
    productCategory: "Hiking",
    details: "Closure Type : Slip-On",
    rating: 2.5,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "DeerStags",
    price: 18999,
    img: img6,
    size: "S",
    currency: "INR",
    category: "Kids",
    productCategory: "Cowboy",
    details: `
    Closure Type : Pull-On`,
    rating: 4.4,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "BaccaBucci",
    price: 2999,
    img: img7,
    size: "M",
    currency: "INR",
    category: "Men",
    productCategory: "Hiking",
    details: `
    Closure Type : Lace-Up`,
    rating: 4,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Metro",
    price: 1795,
    img: img8,
    size: "M",
    currency: "INR",
    category: "Women",
    productCategory: "Ankle",
    details: `
    Closure Type : Zip`,
    rating: 3.2,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "KazarMax",
    price: 2999,
    img: img9,
    size: "L",
    currency: "INR",
    category: "Kids",
    productCategory: "Ankle",
    details: `
    Closure Type : Lace-Up`,
    rating: 3.8,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "AllenCooper",
    price: 3999,
    img: img10,
    size: "L",
    currency: "INR",
    category: "Men",
    productCategory: "Ankle",
    details: `Closure Type : Lace-Up`,
    rating: 2.1,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "DREAMPAIRS",
    price: 25268,
    img: img11,
    size: "S",
    currency: "INR",
    category: "Women",
    productCategory: "Cowboy",
    details: `Closure Type : Pull-On`,
    rating: 4.6,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Mishansha",
    price: 12999,
    img: img12,
    size: "XXL",
    currency: "INR",
    category: "Kids",
    productCategory: "Hiking",
    details: `Closure Type : Hook & Loop`,
    rating: 1.3,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Delize",
    price: 8999,
    img: img13,
    size: "XXL",
    currency: "INR",
    category: "Men",
    productCategory: "Cowboy",
    details: `Closure Type : Zip`,
    rating: 2.8,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Adidas",
    price: 6522,
    img: img14,
    size: "Xl",
    currency: "INR",
    category: "Women",
    productCategory: "Hiking",
    details: `Closure Type : Lace-Up`,
    rating: 3.4,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Apakowa",
    price: 6799,
    img: img15,
    size: "XL",
    currency: "INR",
    category: "Kids",
    productCategory: "Cowboy",
    details: `Closure Type : Hook & loop`,
    rating: 3.2,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "ASIAN",
    price: 1999,
    img: img16,
    size: "L",
    currency: "INR",
    category: "Men",
    productCategory: "Hiking",
    details: `Closure Type : Lace-Up`,
    rating: 4.3,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "ROCIA",
    price: 3990,
    img: img17,
    size: "L",
    currency: "INR",
    category: "Women",
    productCategory: "Ankle",
    details: `Closure Type : Pull On`,
    rating: 3.7,
    quantity: 0,
  },
  {
    id: uuid(),
    name: "Woodland",
    price: 4295,
    img: img18,
    size: "M",
    currency: "INR",
    category: "Kids",
    productCategory: "Ankle",
    details: `Closure Type : Lace-UP`,
    rating: 4,
    quantity: 0,
  },
];
