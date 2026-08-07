import "./Navbar.css"


function Navbar(){
    return (
        <>
            <nav className="navbar">
                <h2>OLX</h2>

                <div className="nav-links">
                    <button>Sell</button>
                    <button>Cart</button>
                    <button>Logout</button>
                </div>
            </nav>
        </>
    )
}
export default Navbar