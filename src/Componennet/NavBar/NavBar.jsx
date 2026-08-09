import "./NavBar.css";
import { NavLink } from "react-router-dom"
export function NavBar() {
    return (
        <>
            <nav>
                <ul className="nav-links">

                    <li>
                        <NavLink to="/cars">Cars</NavLink>
                    </li>

                    <li>
                        <NavLink to="/whyus">Why Us</NavLink>
                    </li>

                    <li>
                        <NavLink to="/testimonials">Testimonials</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/stats">Stats</NavLink>
                    </li>

                      <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>

                </ul>
            </nav>
        </>
    )
}
