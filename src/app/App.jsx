import Navbar from "../components/layout/Navbar/Navbar"
import Footer from "../components/layout/Footer/Footer"
import { Outlet } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
