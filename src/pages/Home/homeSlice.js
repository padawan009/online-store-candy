import { v4 } from "uuid";
import box from "./images/box.jpg";
import mix from "./images/mix.jpg";
import candy from "./images/candy.jpg";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: v4(),
    img: box,
    title: "Подарочные коробки",
    description: "Большой выбор",
    itemUrl: "/catalog/gift-boxes",
  },
  {
    id: v4(),
    img: mix,
    title: "Ассорти",
    description: "Для любого повода",
    itemUrl: "/catalog/mixes",
  },
  {
    id: v4(),
    img: candy,
    title: "Конфеты",
    description: "Разнообразие вкусов",
    itemUrl: "/catalog/candies",
  },
];

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
