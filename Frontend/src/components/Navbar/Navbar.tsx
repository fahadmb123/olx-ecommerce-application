import "./Navbar.css"
import { NavLink } from "react-router-dom";


function Navbar(){
    
    return (
        <>
            <nav className="navbar">
                <h2>OLX</h2>

                <div className="nav-links">
                    <NavLink to="/sell">Sell</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                    <NavLink to="/lougout">Logout</NavLink>
                </div>
            </nav>
        </>
    )
}
export default Navbar