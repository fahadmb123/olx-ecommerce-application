import "./Home.css"



function Home () {
    return (
        <>
            <section className="filter-section">

                <select>
                    <option>All Categories</option>
                    <option>Mobiles</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Vehicles</option>
                </select>

                <button>Apply</button>

            </section>

            <div className="heading">
                <h2>Fresh Recommendations</h2>
            </div>

            

            <section className="products">

                <div className="card">

                    <img src="https://picsum.photos/300/220?1" />

                    <div className="details">
                        <h2>₹45,000</h2>

                        <h3>iPhone 15</h3>

                        <p>Category : Mobile</p>

                        <p>Excellent condition.</p>

                        <div className="buttons">
                            <button className="view">View</button>
                            <button className="cart">Add Cart</button>
                        </div>

                    </div>

                </div>

                <div className="card">

                    <img src="https://picsum.photos/300/220?2" />

                    <div className="details">
                        <h2>₹18,000</h2>

                        <h3>Dell Laptop</h3>

                        <p>Category : Laptop</p>

                        <p>Core i5 10th Gen.</p>

                        <div className="buttons">
                            <button className="view">View</button>
                            <button className="cart">Add Cart</button>
                        </div>

                    </div>

                </div>

                <div className="card">

                    <img src="https://picsum.photos/300/220?3" />

                    <div className="details">
                        <h2>₹2,500</h2>

                        <h3>Office Chair</h3>

                        <p>Category : Furniture</p>

                        <p>Comfortable chair.</p>

                        <div className="buttons">
                            <button className="view">View</button>
                            <button className="cart">Add Cart</button>
                        </div>

                    </div>

                </div>

                <div className="card">

                    <img src="https://picsum.photos/300/220?4" />

                    <div className="details">
                        <h2>₹75,000</h2>

                        <h3>Royal Enfield</h3>

                        <p>Category : Vehicle</p>

                        <p>Excellent mileage.</p>

                        <div className="buttons">
                            <button className="view">View</button>
                            <button className="cart">Add Cart</button>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Home