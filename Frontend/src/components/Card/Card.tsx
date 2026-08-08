import type { cardType } from "../../types/product/productTypes"
import "./Card.css"


function Card ({sell,product}:cardType){
    return (
        <>
            <div className="card">
                <img src={product.image} />
                <div className="details">
                    <h2>₹{product.price.toLocaleString("en-IN")}</h2>

                    <h3>{product.title.split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")}</h3>

                    <p>Category : {product.category.split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")}</p>

                    <p>{product.description}</p>

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