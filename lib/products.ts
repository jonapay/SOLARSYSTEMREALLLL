export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
};

export const products: Product[] = [
  {
    id: "phone",
    name: "SmartPhone X",
    description: "A sleek phone with edge-to-edge display and powerful processor.",
    image: "https://source.unsplash.com/random/400x400?phone",
    price: "$999",
  },
  {
    id: "laptop",
    name: "Laptop Pro",
    description: "Lightweight laptop with stunning Retina display and long battery life.",
    image: "https://source.unsplash.com/random/400x400?laptop",
    price: "$1999",
  },
  {
    id: "tablet",
    name: "Tablet Air",
    description: "Thin tablet perfect for work and play with incredible performance.",
    image: "https://source.unsplash.com/random/400x400?tablet",
    price: "$799",
  },
];
