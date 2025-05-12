import { v4 } from "uuid";
import set1 from "./images/set1.jpg";
import set2 from "./images/set2.jpg";
import set3 from "./images/set3.jpg";
import set4 from "./images/set4.jpg";
import set5 from "./images/set5.jpg"
import { createSlice } from "@reduxjs/toolkit";

const uniqueSets = [
  {
    img: set1,
    title: "Sweet Mood",
    description: "Для хорошего настроения",
    basePrice: 550,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "sweet-mood",
    category: "candy-sets",
  },
  {
    img: set2,
    title: "Rainbow box",
    description: "Яркий микс",
    basePrice: 600,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "rainbow-box",
    category: "candy-sets",
  },
  {
    img: set3,
    title: "Candy Garden",
    description: "Сад из сладостей",
    basePrice: 570,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "candy-garden",
    category: "candy-sets",
  },
  {
    img: set4,
    title: "Fantasy Chews",
    description: "Фантазия вкусов",
    basePrice: 630,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "fantasy-chews",
    category: "candy-sets",
  },
  {
    img: set5,
    title: "Sugar Bloom",
    description: "Цветочная сладость",
    basePrice: 490,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "sugar-bloom",
    category: "candy-sets",
  },
];

const initialState = [];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < uniqueSets.length; j++) {
    initialState.push({ ...uniqueSets[j], id: v4() });
  }
}

const setsSlice = createSlice({
  name: "sets",
  initialState,
  reducers: {},
})

export default setsSlice.reducer;
