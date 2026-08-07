import { NavBar } from '../NavBar/NavBar.jsx'
import  './Header.css'
export function Header(){
    return(
        <>
        <header>
            <div className="logo">
                <p>D</p>
                <h2>DriveX</h2>
            </div> 
            {/* ################################  NAVBAR ################################ */}
            <NavBar />
            <button>Book Test Drive</button>
        </header>
        </>
    )
}