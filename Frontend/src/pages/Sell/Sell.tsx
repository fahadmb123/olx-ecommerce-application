import "./Sell.css";
import { useNavigate } from "react-router-dom";

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

                    <div className="listing-card">

                        <img
                            src="https://picsum.photos/400/300?1"
                            alt="Product"
                        />

                        <div className="listing-details">

                            <h3>iPhone 15</h3>

                            <h4>₹55,000</h4>

                            <p>Mobile</p>

                            <div className="listing-actions">

                                <button className="edit-button">
                                    Edit
                                </button>

                                <button className="delete-button">
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>


                    <div className="listing-card">

                        <img
                            src="https://picsum.photos/400/300?2"
                            alt="Product"
                        />

                        <div className="listing-details">

                            <h3>Dell Laptop</h3>

                            <h4>₹30,000</h4>

                            <p>Laptop</p>

                            <div className="listing-actions">

                                <button className="edit-button">
                                    Edit
                                </button>

                                <button className="delete-button">
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>


                    <div className="listing-card">

                        <img
                            src="https://picsum.photos/400/300?3"
                            alt="Product"
                        />

                        <div className="listing-details">

                            <h3>Office Chair</h3>

                            <h4>₹3,000</h4>

                            <p>Furniture</p>

                            <div className="listing-actions">

                                <button className="edit-button">
                                    Edit
                                </button>

                                <button className="delete-button">
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Sell;