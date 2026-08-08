import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Componennet/Header/Header.jsx"
import { Hero } from "./Componennet/Hero/Hero.jsx"
import { Home } from "./pages/Home/Home.jsx"
import { Cars } from "./pages/Cars/Cars.jsx"
import { WChoose } from "./Componennet/WhyUs/WhyUs.jsx"
import { Testimonials } from './Componennet/Testimonials/Testimonials.jsx'
import { Stats } from './Componennet/Stats/Stats.jsx'
import { Booking } from "./pages/Booking/Booking.jsx"
import { CarDetails } from "./pages/CarDetails/CarDetails.jsx"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/WhyUs" element={<WChoose />} />
          <Route path="/Testimonials" element={< Testimonials />} />
        </Routes>
        <Stats />
        <Routes>
          <Route path="/Booking " element={<Booking />} />
          <Route path="/CarDetails" element={<CarDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App