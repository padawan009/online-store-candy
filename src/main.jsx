import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Delivery from './pages/Delivery/Delivery.jsx'
import Home from "./pages/Home/Home.jsx";
import Charity from './pages/Charity/Charity.jsx'
import About from './pages/About/About.jsx'
import Holidays from './pages/Holidays/Holidays.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Candies from './pages/Candies/Candies.jsx'
import Mixes from './pages/Mixes/Mixes.jsx'
import Boxes from './pages/GiftBoxes/Boxes.jsx'
import Sets from './pages/CandySets/Sets.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: 'home', element: <Home />},
      { path: 'delivery-and-payment', element: <Delivery />},
      { path: 'charity', element: <Charity />},
      { path: 'about-project', element: <About />},
      { path: 'holidays', element: <Holidays />},
      { path: 'profile', element: <Profile />},
      { path: 'cart', element: <Cart />},
      { path: 'mixes', element: <Mixes />},
      { path: 'candies', element: <Candies />},
      { path: 'gift-boxes', element: <Boxes />},
      { path: 'candy-sets', element: <Sets />}
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
