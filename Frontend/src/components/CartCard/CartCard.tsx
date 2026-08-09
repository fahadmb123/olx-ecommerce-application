import "./CartCard.css"
import type { CartCardType } from "../../types/product/productTypes"


function Card ({product}:CartCardType){
    console.log(product)
    return (
        <>
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
        </>
    )
}

export default Card