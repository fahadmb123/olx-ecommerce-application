import "./Navbar.css"
import { NavLink } from "react-router-dom";


function Navbar(){
    
    return (
        <>
            <nav className="navbar">
                <h2>OLX</h2>

                <div className="nav-links">
                    <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/sell">Sell</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/cart">Cart</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/lougout">Logout</NavLink>
                </div>
            </nav>
        </>
    )
}
export default Navbar