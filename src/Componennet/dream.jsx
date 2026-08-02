import '../Componnents/Dream.css'
import { FaArrowRight } from "react-icons/fa";

function Dream() {
    return (
        <section className="dream">

            <p className="dream-subtitle">
                READY WHEN YOU ARE
            </p>

            <h2 className="dream-title">
                Ready to drive your
                <span> dream car?</span>
            </h2>

            <p className="dream-desc">
                Speak with a DriveX specialist. Personalized viewings,
                private test drives, and end-to-end concierge
                on your schedule.
            </p>

            <button className="dream-btn">
                Contact Us
                <FaArrowRight />
            </button>

        </section>
    )
}

export default Dream