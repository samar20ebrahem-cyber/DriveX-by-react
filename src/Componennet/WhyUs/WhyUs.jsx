import WhyUs from '../../data/WhyUs.js'
import './WhyUs.css'
export function WChoose() {
    return (
        <>
            <section className="why-us">
                <div className="why-us-heading">
                    <p> The DriveX Standard</p>
                    <h2>Why Choose Us</h2>
                    <p className="why-us-description">A promise of quality, craftsmanship and service worthy of the machines we sell.</p>
                </div>
                <div className="why-us-cards">
                    {
                        WhyUs.map((item) => {
                            const Icon = item.icon
                             return (
                            <div className="why-us-card" key={item.id}>
                                <div className="why-us-icon">
                                    <div className="icon">
                                        <Icon />
                                    </div>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        )})
                    }
                </div>
            </section>

        </>
    )
}