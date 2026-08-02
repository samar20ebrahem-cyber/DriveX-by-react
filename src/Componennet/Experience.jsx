import Experiences from '../data/Experience.js'
import '../Componnents/Experience.css'

function Experience() {
    return (
        <section className="experience">
            <div className="experience-container">

                {Experiences.map((item) => (
                    <div className="experience-card" key={item.id}>
                        <h2>{item.number}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Experience