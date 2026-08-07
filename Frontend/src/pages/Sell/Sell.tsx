import "./Sell.css";

function Sell() {
    return (
        <div className="sell-page">

            


            
            <main className="sell-container">

                
                <section className="sell-form-section">

                    <h1>Sell Your Product</h1>
                    <p className="subtitle">
                        Add your product and start selling.
                    </p>

                    <form className="sell-form">

                        <div className="form-group">
                            <label>Product Title</label>
                            <input
                                type="text"
                                placeholder="Enter product title"
                            />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                placeholder="Describe your product"
                                rows={5}
                            />
                        </div>

                        <div className="form-row">

                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    placeholder="Enter price"
                                />
                            </div>

                            <div className="form-group">
                                <label>Category</label>

                                <select>
                                    <option value="">
                                        Select Category
                                    </option>

                                    <option value="Mobile">
                                        Mobile
                                    </option>

                                    <option value="Laptop">
                                        Laptop
                                    </option>

                                    <option value="Electronics">
                                        Electronics
                                    </option>

                                    <option value="Furniture">
                                        Furniture
                                    </option>

                                    <option value="Vehicle">
                                        Vehicle
                                    </option>
                                </select>
                            </div>

                        </div>


                        <div className="form-group">
                            <label>Image URL</label>

                            <input
                                type="url"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>


                        <button
                            type="submit"
                            className="sell-button"
                        >
                            Sell Product
                        </button>

                    </form>

                </section>


               
                <section className="my-listings">

                    <div className="listings-header">
                        <h2>My Listings</h2>

                        <span>3 Products</span>
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

        </div>
    );
}

export default Sell;