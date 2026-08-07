import { logoutThunk } from "../../features/auth/authThunk";
import { useAppDispatch, useAppSelector } from "../../hooks/dispatchHook";
import "./Navbar.css"
import { NavLink } from "react-router-dom";


function Navbar(){
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector((state)=>state.auth.isAuthenticated)
    const handleLogout = ()=>{
        dispatch(logoutThunk())
    }
    return (
        <>
            <nav className="navbar">
                <h2>OLX</h2>

                <div className="nav-links">
                    <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/sell">Sell</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="/cart">Cart</NavLink>
                    {!isAuth && (<NavLink className={({ isActive }) => isActive ? "active-link" : ""} to={`/${isAuth? "logout" : "login"}`}>{isAuth? "Logout" : "Login"}</NavLink>)}
                    {isAuth && (<button onClick={()=>handleLogout()}>Logout</button>)}
                </div>
            </nav>
        </>
    )
}
export default Navbar