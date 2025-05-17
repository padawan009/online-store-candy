import { v4 } from "uuid";
import hol1 from "./images/14fev.jpg";
import hol2 from "./images/wom.jpg";
import hol3 from "./images/wed.jpg";
import hol4 from "./images/hb.jpg";
import hol5 from "./images/ny.jpg";
import hol6 from "./images/without.jpg";
import { createSlice } from "@reduxjs/toolkit";

const uniqueHolidays = [
  {
    img: hol1,
    title: "Valentine's day",
    description: "Для значимых людей",
    itemUrl: "valentines",
    category: "holidays",
  },
  {
    img: hol2,
    title: "Woman Day",
    description: "Сладости на любой вкус",
    itemUrl: "woman-day",
    category: "holidays",
  },
  {
    img: hol3,
    title: "Wedding party",
    description: "Лучшие сладости для важного дня",
    itemUrl: "wedding",
    category: "holidays",
  },
  {
    img: hol4,
    title: "Birthday party",
    description: "Большой выбор для праздника",
    itemUrl: "birthday",
    category: "holidays",
  },
  {
    img: hol5,
    title: "New Year",
    description: "Сладкие наборы для детей",
    itemUrl: "new-year",
    category: "holidays",
  },
  {
    img: hol6,
    title: "Without Ocassion",
    description: "Дарите без повода",
    itemUrl: "without-ocassion",
    category: "holidays",
  },
];

const initialState = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < uniqueHolidays.length; j++) {
    initialState.push({ ...uniqueHolidays[j], id: v4() });
  }
}

const holidaysSlice = createSlice({
  name: "holidays",
  initialState,
  reducers: {},
});

export default holidaysSlice.reducer;
