import "./CartCard.css"
import type { CartCardType } from "../../types/product/productTypes"
import { useState } from "react";



interface CardProps {
    product: CartCardType;
}

function Card ({product}:CardProps){
    const [count,setCount] = useState(product.count)
    return (
        <>
            <div className="cart-item">

                <img
                    src="https://picsum.photos/200/200?1"
                    alt="iPhone 15"
                />

                <div className="cart-item-details">

                    <h2>{product.productId.title.split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")}</h2>

                    <p className="category">
                        {product.productId.category.split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")}
                    </p>

                    <h3>₹{product.productId.price.toLocaleString("en-IN")}</h3>

                    <div className="quantity">

                        <button>-</button>

                        <span>{count}</span>

                        <button>+</button>

                    </div>

                </div>

                <button className="remove-button">
                    Remove
                </button>

            </div>
        </>
    )
}

export default Card