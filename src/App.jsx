import { Routes, Route } from "react-router-dom";
import { Header } from "./Componennet/Header/Header.jsx";
import { Hero } from "./Componennet/Hero/Hero.jsx";
import { CarCards} from "./Componennet/CarCards/CarCads.jsx";
import { WChoose } from "./Componennet/WhyUs/WhyUs.jsx";
import { Testimonials } from "./Componennet/Testimonials/Testimonials.jsx";
import { Stats } from './Componennet/Stats/Stats.jsx'
import { ContactCTA } from './Componennet/ContactCTA/ContactCTA.jsx'
import { Footer }  from './Componennet/Footer/Footer.jsx'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path="/cars" element={<CarCards/>} />
        <Route path="/whyus" element={<WChoose />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<ContactCTA />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;