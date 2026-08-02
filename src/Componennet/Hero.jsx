import "../Componnents/Hero.css";
import  heroImage from '../assets/imges/bg-car.jpg'
function Hero() {
  return (
    <section className="hero"  style={{ backgroundImage: `url(${heroImage})` }}>
  <div className="overlay"></div>

  <div className="hero-content">

    <div className="cardHero">
      <div className="dot"></div>
      <span>EST. 2007 · LUXURY AUTOMOTIVE</span>
    </div>

    <h1>
      Drive Your <br />
      <span>Dream Car</span>
    </h1>

    <p className="hero-desc">
      Discover premium performance, luxury, and speed — all in one place.
      Curated hypercars, GTs and grand tourers from the world's most iconic marques.
    </p>

    <div className="hero-btns">
      <button className="btn1">
        Explore Cars
      </button>

      <button className="btn2">
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

export default Hero;