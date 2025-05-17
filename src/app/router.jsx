import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import("./App.jsx"));
const Delivery = lazy(() => import("../pages/Delivery/Delivery.jsx"));
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Charity = lazy(() => import("../pages/Charity/Charity.jsx"));
const About = lazy(() => import("../pages/About/About.jsx"));
const Holidays = lazy(() => import("../pages/Holidays/Holidays.jsx"));
const Cart = lazy(() => import("../pages/Cart/Cart.jsx"));
const Profile = lazy(() => import("../pages/Profile/Profile.jsx"));
const Candies = lazy(() => import("../pages/Candies/Candies.jsx"));
const Mixes = lazy(() => import("../pages/Mixes/Mixes.jsx"));
const Boxes = lazy(() => import("../pages/GiftBoxes/Boxes.jsx"));
const Sets = lazy(() => import("../pages/CandySets/Sets.jsx"));
const OtherItems = lazy(() => import("../pages/Other/OtherItems.jsx"));
const ProductDetail = lazy(() => import("../components/ui/ProductDetail/ProductDetail.jsx"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog.jsx"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home />},
      {
        path: "catalog",
        element: <Catalog />,
        children: [
          { path: "mixes", element: <Mixes /> },
          { path: "candies", element: <Candies /> },
          { path: "gift-boxes", element: <Boxes /> },
          { path: "candy-sets", element: <Sets /> },
          { path: "other", element: <OtherItems /> },
          { path: ":category/:itemUrl", element: <ProductDetail /> },
        ],
      },
      { path: "delivery-and-payment", element: <Delivery /> },
      { path: "charity", element: <Charity /> },
      { path: "about-project", element: <About /> },
      { path: "holidays", element: <Holidays /> },
      { path: "holidays/:itemUrl", element: <ProductDetail /> },
      { path: "profile", element: <Profile /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);