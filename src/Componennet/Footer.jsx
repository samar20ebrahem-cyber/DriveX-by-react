import '../Componnents/Footer.css'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-box">

                    <div className="logo">
                        <div className="logo-icon">D</div>
                        <h2>Drive<span>X</span></h2>
                    </div>

                    <p>
                        The world's most iconic marques,
                        curated in one showroom.
                    </p>

                    <div className="social">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>

                </div>

                <div className="footer-box">

                    <h3>Quick Links</h3>

                    <ul>
                        <li><a href="#">Featured Cars</a></li>
                        <li><a href="#">Book Test Drive</a></li>
                        <li><a href="#">Financing</a></li>
                        <li><a href="#">Trade-in</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>

                </div>

                <div className="footer-box">

                    <h3>Contact</h3>

                    <p><FiPhone /> +1 (800) 555-0199</p>

                    <p><FiMail /> hello@drivex.com</p>

                    <p><FiMapPin /> Miami, Florida</p>

                </div>

                <div className="footer-box">

                    <h3>Newsletter</h3>

                    <p>
                        New arrivals, private events,
                        and exclusive offers.
                    </p>

                    <div className="newsletter">

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                        <button>Join</button>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <p>© 2026 DriveX. All rights reserved.</p>

                <div className="bottom-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Cookies</a>
                </div>

            </div>

        </footer>
    )
}

export default Footer