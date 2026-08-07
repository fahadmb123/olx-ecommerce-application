import { NavLink } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
    return (
        <div className="checkout-page">

            {/* Main */}
            <main className="checkout-container">

                <h1>Checkout</h1>

                <div className="checkout-content">

                    {/* Selected Products */}
                    <section className="checkout-products">

                        <h2>Your Products</h2>

                        {/* Product 1 */}
                        <div className="checkout-item">

                            <img
                                src="https://picsum.photos/200/200?1"
                                alt="iPhone 15"
                            />

                            <div className="checkout-item-details">

                                <h3>iPhone 15</h3>

                                <p>Mobile</p>

                                <span>Quantity: 1</span>

                            </div>

                            <strong>₹55,000</strong>

                        </div>


                        {/* Product 2 */}
                        <div className="checkout-item">

                            <img
                                src="https://picsum.photos/200/200?2"
                                alt="Dell Laptop"
                            />

                            <div className="checkout-item-details">

                                <h3>Dell Laptop</h3>

                                <p>Laptop</p>

                                <span>Quantity: 1</span>

                            </div>

                            <strong>₹30,000</strong>

                        </div>


                        {/* Product 3 */}
                        <div className="checkout-item">

                            <img
                                src="https://picsum.photos/200/200?3"
                                alt="Office Chair"
                            />

                            <div className="checkout-item-details">

                                <h3>Office Chair</h3>

                                <p>Furniture</p>

                                <span>Quantity: 2</span>

                            </div>

                            <strong>₹3,000</strong>

                        </div>

                    </section>


                    {/* Order Summary */}
                    <aside className="checkout-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Products</span>
                            <span>4</span>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹88,000</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>Free</span>
                        </div>

                        <div className="summary-line"></div>

                        <div className="total-row">
                            <span>Total</span>
                            <strong>₹88,000</strong>
                        </div>

                        <button className="place-order-button">
                            Place Order
                        </button>

                        <NavLink
                            to="/cart"
                            className="back-cart"
                        >
                            Back to Cart
                        </NavLink>

                    </aside>

                </div>

            </main>

        </div>
    );
}

export default Checkout;