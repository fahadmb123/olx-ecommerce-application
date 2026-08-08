import "./Sell.css";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card"


function Sell() {
    const navigate = useNavigate();

    return (
        <main className="sell-container">

            <section className="my-listings">

                <div className="listings-header">
                    <div>
                        <h2>My Listings</h2>
                        <span>3 Products</span>
                    </div>

                    <button
                        className="sell-product-button"
                        onClick={() => navigate("/addedit")}
                    >
                        + Sell Product
                    </button>
                </div>


                <div className="listing-grid">

                    <Card sell={true}/>
                    <Card sell={true}/>
                    <Card sell={true}/>
                    <Card sell={true}/>
                    <Card sell={true}/>

                </div>

            </section>

        </main>
    );
}

export default Sell;