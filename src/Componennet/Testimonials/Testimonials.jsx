import { Testimonial } from '../../data/Testimonials.js'
import './Testimonials.css'
export function Testimonials() {
    return (
        <>
            <section className="testimonials-section">
                <div className="testimonials-heading">
                    <p className="section-label">Testimonials</p>
                    <h2> Voices from the<span> Owners </span></h2>
                </div>
                <div className="testimonials-container">
                    {
                        Testimonial.map((item) => (
                            <div className="testimonial-card" key={item.id}>
                                <div className="stars">
                                    <i className={item.icon}></i>
                                    <i className={item.icon}></i>
                                    <i className={item.icon}></i>
                                    <i className={item.icon}></i>
                                    <i className={item.icon}></i>
                                </div>
                                <p className="testimonial-description">{item.description}</p>
                                <div className="testimonial-line"></div>
                                <div className="testimonial-user">
                                    <img src={item.img} alt={item.name} />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.job}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
        </>
    )
}