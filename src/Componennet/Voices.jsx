import Owners from '../data/Owners.js'
import '../Componnents/owner.css'
function Voices() {
    return (
        <>
            <section className="voices">

                <p className="sub-title">Testimonials</p>

                <h2 className="title">
                    Voices from the<span>Owners</span>
                </h2>

                <div className="testimonial-container">

                    {Owners.map((owner, index) => (
                        <div className="choose-card" key={index}>
                            <p>{owner.stars}</p>
                            <p>{owner.desc}</p>
                            <div className="owner-info">
                                <img src={owner.img} alt={owner.name} />
                                <p>{owner.name}</p>
                                <p>{owner.job}</p>
                            </div>
                        </div>))
                    }
                </div>
            </section>

        </>
    )
}
export default Voices 