import { useNavigate } from "react-router-dom";
import "./OrderPlaced.css";

function OrderPlaced() {
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

               

                <div className="success-actions">

                    <button
                        className="home-button"
                        onClick={() => navigate("/")}
                    >
                        Continue Shopping
                    </button>

                    

                </div>

            </div>

        </div>
    );
}

export default OrderPlaced;