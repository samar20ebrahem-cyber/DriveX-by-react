import "./Hero.css";
import HeroImage from '../../assets/images/bg-car.jpg'
import { useNavigate } from "react-router-dom"
export function Hero() {
  const navigate = useNavigate()
  return (

    <section className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>

      <div className="hero-content">

        <div className="card-hero">
          <div className="Dot"></div>
          <span>EST. 2007 · LUXURY AUTOMOTIVE</span>
        </div>

        <h1> Drive Your <span> Dream Car </span> </h1>

        <p className="hero-desc">
          Discover premium performance, luxury, and speed — all in one place.
          Curated hypercars, GTs and grand tourers from the world's most iconic marques.
        </p>

        <div className="hero-btns">
          <button onClick={() => {navigate('/cars')}} className="BtnEx">
            Explore Cars
          </button>

          <button onClick={() => {navigate('/booking')}} className="BtnBo">
            Book Test Drive
          </button>
        </div>

        <div className="char">

          <div className="cardat">
            <h2>2.4s</h2>
            <span>0-100</span>
          </div>

          <div className="cardat">
            <h2>340 km/h</h2>
            <span>TOP SPEED</span>
          </div>

          <div className="cardat">
            <h2>12+</h2>
            <span>MARQUES</span>
          </div>

        </div>

      </div>
    </section>
  );
}

