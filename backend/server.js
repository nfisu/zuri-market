require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const products = [
  {
    id: 1,
    name: "Zuri Tote Bag",
    price: 25,
    description: "Reusable everyday shopping bag"
  },
  {
    id: 2,
    name: "Zuri Hoodie",
    price: 55,
    description: "Comfortable branded hoodie"
  },
  {
    id: 3,
    name: "Zuri Water Bottle",
    price: 18,
    description: "Stainless steel reusable bottle"
  },
  {
    id: 4,
    name: "Zuri Notebook",
    price: 12,
    description: "Simple notebook for daily planning"
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "Zuri Market Backend API Running",
    store: process.env.STORE_NAME || "Zuri Market Store"
  });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});