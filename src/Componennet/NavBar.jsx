import "../Componnents/NavBar.css";

function NavBar() {
    return (
        <header className="header">

            <div className="logo">

                <div className="logo-icon">
                    D
                </div>

                <h2>
                    Drive<span>X</span>
                </h2>

            </div>

            <nav>

                <ul className="nav-links">

                    <li><a href="#cars">Cars</a></li>
                    <li><a href="#whyus">Why Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>

            </nav>

            <button className="book-btn">
                Book Test Drive
            </button>

        </header>
    );
}

export default NavBar;