import { v4 } from "uuid";
import candy1 from "./images/2148381084.jpg";
import candy2 from "./images/2150707665.jpg";
import candy3 from "./images/2150897205.jpg";
import candy4 from "./images/8020.jpg";
import candy5 from "./images/2151284264.jpg";
import candy6 from "./images/2147866208.jpg";
// import candy7 from "./images/2150799020.jpg";
import candy8 from "./images/2150799014.jpg";
import { createSlice } from "@reduxjs/toolkit";

const uniqueCandies = [
  {
    img: candy1,
    title: "Love Hearts",
    description: "Сахарные и романтичные",
    basePrice: 300,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "love-hearts",
    category: "candies",
  },
  {
    img: candy2,
    title: "Peppermint Twist",
    description: "Освежающие и жевательные",
    basePrice: 400,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "peppermint-twist",
    category: "candies",
  },
  {
    img: candy3,
    title: "Lemon Glow",
    description: "Кисло-сладкие и солнечные",
    basePrice: 350,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "lemon-glow",
    category: "candies",
  },
  {
    img: candy4,
    title: "Marshmallow",
    description: "Воздушный и тающий",
    basePrice: 300,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "marshmallow",
    category: "candies",
  },
  {
    img: candy5,
    title: "Pink Ball",
    description: "Нежные с малиновым вкусом",
    basePrice: 320,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "pink-ball",
    category: "candies",
  },
  {
    img: candy6,
    title: "Rainbow rings",
    description: "Хрустящие и сахарные",
    basePrice: 270,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "rainbow-rings",
    category: "candies",
  },
  // {
  //   img: candy7,
  //   title: "Zephyr",
  //   description: "Ванильный и нежный",
  //   basePrice: 350,
  //   weights: ["200гр", "400гр", "800гр", "1кг"],
  //   showPrice: true,
  //   showCartButton: true,
  //   itemUrl: "zephyr",
  //   category: "candies",
  // },
  {
    img: candy8,
    title: "Lollipops",
    description: "С фруктовой начинкой",
    basePrice: 380,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "lollipops",
    category: "candies",
  },
];

const initialState = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < uniqueCandies.length; j++) {
    initialState.push({ ...uniqueCandies[j], id: v4() });
  }
}

const candiesSlice = createSlice({
  name: "candies",
  initialState,
  reducers: {},
});

export default candiesSlice.reducer;
