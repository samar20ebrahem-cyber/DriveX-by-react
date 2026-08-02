import choose from "../data/choose";
import '../Componnents/cardchoose.css'
function WhyUs() {
    return (
        <section className="why-us">

            <p className="sub-title">THE DRIVEX STANDARD</p>

            <h2 className="title">
                Why Choose <span>Us</span>
            </h2>

            <p className="desc">
                A promise of quality, craftsmanship and service worthy of the machines we sell.
            </p>

            <div className="choose-container">

                {choose.map((item) => (
                    <div className="choose-card" key={item.id}>

                        <div className="icon-box">
                            <img src={item.img} alt={item.name} />
                        </div>

                        <h3>{item.name}</h3>

                        <p>{item.desc}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default WhyUs;