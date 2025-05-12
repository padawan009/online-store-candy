import { v4 } from "uuid";

import mix1 from "./images/2150897167.jpg"
import mix2 from "./images/2147717522.jpg"
import mix3 from "./images/2149870793.jpg"
import mix4 from "./images/2150799016.jpg"
import mix5 from "./images/2150897141.jpg"
import mix6 from "./images/2150897149.jpg"
import mix7 from "./images/2150897151.jpg"
import { createSlice } from "@reduxjs/toolkit";
// import mix8 from "./images/2147689711.jpg"

const uniqueMixes = [
  {
    img: mix1,
    title: "Fruit Parade",
    description: "Фруктовое ассорти",
    basePrice: 450,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "fruit-parade",
    category: "mixes",
  },
    {
    img: mix6,
    title: "Pink assorty",
    description: "Нежные и ароматные",
    basePrice: 380,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "pink-assorty",
    category: "mixes",
  },
  {
    img: mix3,
    title: "Gummy bears",
    description: "Фруктовые, жевательные",
    basePrice: 350,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "gummy-bears",
    category: "mixes",
  },
  {
    img: mix4,
    title: "Candy shells",
    description: "Разноцветные карамельки",
    basePrice: 320,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "candy-shells",
    category: "mixes",
  },
  {
    img: mix5,
    title: "Sweet puffs",
    description: "Мягкие кольца",
    basePrice: 340,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "sweet-puffs",
    category: "mixes",
  },
    {
    img: mix2,
    title: "Choco Drops",
    description: "Шоколадные и хрустящие",
    basePrice: 290,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "choco-drops",
    category: "mixes",
  },
  {
    img: mix7,
    title: "Crunch Pop",
    description: "Яркие и сахарные",
    basePrice: 400,
    weights: ["200гр", "400гр", "800гр", "1кг"],
    showPrice: true,
    showCartButton: true,
    itemUrl: "crunch-pop",
    category: "mixes",
  },
];

const initialState = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < uniqueMixes.length; j++) {
    initialState.push({ ...uniqueMixes[j], id: v4() });
  }
}

const mixesSlice = createSlice({
    name: "mixes",
    initialState,
    reducers: {},
})

export default mixesSlice.reducer;
