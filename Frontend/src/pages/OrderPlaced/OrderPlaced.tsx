import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
    const navigate = useNavigate();

    return (
        <div className="order-success-page">

            <div className="order-success-card">

                <div className="success-circle">
                    ✓
                </div>

                <h1>Order Placed Successfully!</h1>

                <p className="success-message">
                    Thank you for your purchase. Your order has been
                    successfully placed.
                </p>

                <div className="order-info">

                    <div className="order-info-row">
                        <span>Order ID</span>
                        <strong>#ORD123456</strong>
                    </div>

                    <div className="order-info-row">
                        <span>Order Status</span>
                        <strong className="status">
                            Confirmed
                        </strong>
                    </div>

                    <div className="order-info-row">
                        <span>Payment</span>
                        <strong>Cash on Delivery</strong>
                    </div>

                </div>

                <div className="success-divider"></div>

                <h3>What happens next?</h3>

                <div className="order-steps">

                    <div className="order-step">
                        <div className="step-number">1</div>

                        <div>
                            <strong>Order Confirmed</strong>
                            <p>Your order has been received.</p>
                        </div>
                    </div>

                    <div className="order-step">
                        <div className="step-number">2</div>

                        <div>
                            <strong>Preparing Your Order</strong>
                            <p>The seller will prepare your product.</p>
                        </div>
                    </div>

                    <div className="order-step">
                        <div className="step-number">3</div>

                        <div>
                            <strong>Order Delivered</strong>
                            <p>Your product will be delivered to you.</p>
                        </div>
                    </div>

                </div>

                <div className="success-actions">

                    <button
                        className="home-button"
                        onClick={() => navigate("/")}
                    >
                        Continue Shopping
                    </button>

                    <button
                        className="orders-button"
                        onClick={() => navigate("/orders")}
                    >
                        View My Orders
                    </button>

                </div>

            </div>

        </div>
    );
}

export default OrderSuccess;