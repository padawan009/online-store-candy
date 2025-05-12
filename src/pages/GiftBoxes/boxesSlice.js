import { v4 } from "uuid";
import box1 from "./images/1.jpg";
import box2 from "./images/2.jpg";
import box3 from "./images/3.jpg";
import box4 from "./images/4.jpg";
import box5 from "./images/5.jpg";
import box6 from "./images/6.jpg";
import box7 from "./images/7.jpg";
import { createSlice } from "@reduxjs/toolkit";

const uniqueBoxes = [
  {
    img: box6,
    title: "Joyful",
    description: "Моменты счастья",
    basePrice: 550,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "joyful",
    category: "gift-boxes",
  },
  {
    img: box2,
    title: "Wonder Set",
    description: "Волшебный набор",
    basePrice: 1300,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "wonder-set",
    category: "gift-boxes",
  },
  {
    img: box3,
    title: "Sweet Moments",
    description: "Сладкие мгновения",
    basePrice: 1100,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "sweet-moments",
    category: "gift-boxes",
  },
  {
    img: box4,
    title: "Delight set",
    description: "Набор радости",
    basePrice: 1200,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "delight-set",
    category: "gift-boxes",
  },
  {
    img: box7,
    title: "Tiffany Box",
    description: "Ментоловая мечта",
    basePrice: 550,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "tiffany-box",
    category: "gift-boxes",
  },
  {
    img: box1,
    title: "Heart Box",
    description: "С любовью",
    basePrice: 450,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "heart-box",
    category: "gift-boxes",
  },
  {
    img: box5,
    title: "Spark",
    description: "Искра с праздником",
    basePrice: 1050,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "spark",
    category: "gift-boxes",
  },
];

const initialState = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < uniqueBoxes.length; j++) {
    initialState.push({ ...uniqueBoxes[j], id: v4() });
  }
}

const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {},
});

export default boxesSlice.reducer;
