import { v4 } from "uuid";

import other1 from "./images/teddy.png";
import other2 from "./images/baloon2.png";
import other3 from "./images/flower1.png";
import other4 from "./images/baloon1.png";
import other5 from "./images/flower2.png";
import other6 from "./images/baloons3.png";
import other7 from "./images/teddy2.png";
import { createSlice } from "@reduxjs/toolkit";

const uniqueOther = [
  {
    img: other1,
    title: "Teddy Bear",
    description: "Плюшевый мишка",
    basePrice: 780,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "teddy-bear",
    category: "other",
  },
  {
    img: other2,
    title: "Gold balloons",
    description: "Королевский блеск",
    basePrice: 1300,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "gold-balloons",
    category: "other",
  },
  {
    img: other3,
    title: "Ruby Charm",
    description: "Рубиновое сердце",
    basePrice: 1700,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "ruby-charm",
    category: "other",
  },
  {
    img: other4,
    title: "Elegant Spark",
    description: "Перламутровая нежность",
    basePrice: 900,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "elegant-spark",
    category: "other",
  },
  {
    img: other5,
    title: "Blush Bloom",
    description: "Нежный розовый",
    basePrice: 1650,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "blush-bloom",
    category: "other",
  },
  {
    img: other7,
    title: "Cuddle Blue",
    description: "Облачный мишка",
    basePrice: 980,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "cuddle-blue",
    category: "other",
  },
  {
    img: other6,
    title: "Cloudy Pastel",
    description: "Пудровый шарм",
    basePrice: 1100,
    weights: [],
    showPrice: true,
    showCartButton: true,
    itemUrl: "cloudy-pastel",
    category: "other",
  },
];

const initialState = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < uniqueOther.length; j++) {
    initialState.push({ ...uniqueOther[j], id: v4() });
  }
}

const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {},
});

export default otherSlice.reducer;
