import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Delivery from "../pages/Delivery/Delivery.jsx";
import Home from "../pages/Home/Home.jsx";
import Charity from "../pages/Charity/Charity.jsx";
import About from "../pages/About/About.jsx";
import Holidays from "../pages/Holidays/Holidays.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Candies from "../pages/Candies/Candies.jsx";
import Mixes from "../pages/Mixes/Mixes.jsx";
import Boxes from "../pages/GiftBoxes/Boxes.jsx";
import Sets from "../pages/CandySets/Sets.jsx";
import OtherItems from "../pages/Other/OtherItems.jsx"
import ProductDetail from "../components/ui/ProductDetail/ProductDetail.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "catalog",
        element: <Home />,
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
      { path: "profile", element: <Profile /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);