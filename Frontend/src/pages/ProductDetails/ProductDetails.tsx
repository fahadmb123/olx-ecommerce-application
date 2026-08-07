import "./ProductDetails.css";

function ProductDetails() {
    return (
        <div className="product-details-page">

            <div className="product-details-card">

                {/* Product Image */}
                <div className="product-image-section">
                    <img
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                        alt="Product"
                    />
                </div>


               
                <div className="product-info">

                    <p className="product-category">
                        Mobile
                    </p>

                    <h1>iPhone 15</h1>

                    <h2>₹45,000</h2>

                    <p className="product-description">
                        Excellent condition iPhone 15.
                        The phone is well maintained and
                        works perfectly.
                    </p>


                    <div className="product-info-item">
                        <span>Category</span>
                        <strong>Mobile</strong>
                    </div>

                    <div className="product-info-item">
                        <span>Condition</span>
                        <strong>Excellent</strong>
                    </div>


                    <button className="details-cart-button">
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProductDetails;