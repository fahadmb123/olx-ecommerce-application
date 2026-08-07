import { toast } from "react-toastify";
import { logoutThunk } from "../../features/auth/authThunk";
import { useAppDispatch, useAppSelector } from "../../hooks/dispatchHook";
import "./Navbar.css"
import { NavLink, useNavigate } from "react-router-dom";


function Navbar(){
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isAuth = useAppSelector((state)=>state.auth.isAuthenticated)
    const handleLogout = async ()=>{
        await dispatch(logoutThunk())
        navigate("/login")
        toast.success("Logged Out")
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