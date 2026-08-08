import "./Card.css"


function Card ({sell}:{sell?:boolean}){
    return (
        <>
            <div className="card">
                <img src="https://picsum.photos/300/220?1" />
                <div className="details">
                    <h2>₹45,000</h2>

                    <h3>iPhone 15</h3>

                    <p>Category : Mobile</p>

                    <p>Excellent condition.</p>

                    {sell && (
                        <div className="buttons">
                            <button className="view">Edit</button>
                            <button className="cart">Delete</button>
                        </div>
                    )}
                    {!sell && (
                        <div className="buttons">
                            <button className="view">View</button>
                            <button className="cart">Add Cart</button>
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}

export default Card