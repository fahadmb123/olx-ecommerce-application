import { NavLink } from "react-router-dom";
import "./Cart.css";



function Cart() {
    return (
        <div className="cart-page">

            {/* Main */}
            <main className="cart-container">

                <div className="cart-header">
                    <h1>My Cart</h1>
                    <span>3 Items</span>
                </div>


                <div className="cart-content">

                    {/* Cart Items */}
                    <section className="cart-items">

                        {/* Item 1 */}
                        <div className="cart-item">

                            <img
                                src="https://picsum.photos/200/200?1"
                                alt="iPhone 15"
                            />

                            <div className="cart-item-details">

                                <h2>iPhone 15</h2>

                                <p className="category">
                                    Mobile
                                </p>

                                <h3>₹55,000</h3>

                                <div className="quantity">

                                    <button>-</button>

                                    <span>1</span>

                                    <button>+</button>

                                </div>

                            </div>

                            <button className="remove-button">
                                Remove
                            </button>

                        </div>


                        {/* Item 2 */}
                        <div className="cart-item">

                            <img
                                src="https://picsum.photos/200/200?2"
                                alt="Dell Laptop"
                            />

                            <div className="cart-item-details">

                                <h2>Dell Laptop</h2>

                                <p className="category">
                                    Laptop
                                </p>

                                <h3>₹30,000</h3>

                                <div className="quantity">

                                    <button>-</button>

                                    <span>1</span>

                                    <button>+</button>

                                </div>

                            </div>

                            <button className="remove-button">
                                Remove
                            </button>

                        </div>


                        {/* Item 3 */}
                        <div className="cart-item">

                            <img
                                src="https://picsum.photos/200/200?3"
                                alt="Office Chair"
                            />

                            <div className="cart-item-details">

                                <h2>Office Chair</h2>

                                <p className="category">
                                    Furniture
                                </p>

                                <h3>₹3,000</h3>

                                <div className="quantity">

                                    <button>-</button>

                                    <span>2</span>

                                    <button>+</button>

                                </div>

                            </div>

                            <button className="remove-button">
                                Remove
                            </button>

                        </div>

                    </section>


                    {/* Summary */}
                    <aside className="cart-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Items</span>
                            <span>4</span>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹88,000</span>
                        </div>

                        <div className="summary-line"></div>

                        <div className="total-row">
                            <span>Total</span>
                            <strong>₹88,000</strong>
                        </div>

                        <NavLink
                            to="/checkout"
                            className="checkout-button"
                        >
                            Proceed to Checkout
                        </NavLink>

                    </aside>

                </div>

            </main>

        </div>
    );
}

export default Cart;