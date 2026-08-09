import "./CartCard.css";
import type { CartCardType } from "../../types/product/productTypes";
import { useState } from "react";
import { useIncCart } from "../../hooks/productHook";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/auth/authTypes";
import { toast } from "react-toastify";

interface CardProps {
    product: CartCardType;
}

function Card({ product }: CardProps) {
    const [count, setCount] = useState(product.count);
    const [stock, setStock] = useState(product.productId.quantity);
    const incCart = useIncCart()
    const handleInc = async ()=>{
        try{
            const data = await incCart(product.productId._id)
            setStock(data.quantity)
            setCount(data.count)
        }catch (error){
            const err = error as AxiosError<ErrorResponse>
            toast.error(err.response?.data.message)
        }
    }
    const handleDec = async ()=>{
        try{
            const data = await incCart(product.productId._id)
            setStock(data.quantity)
            setCount(data.count)
        }catch (error){
            const err = error as AxiosError<ErrorResponse>
            toast.error(err.response?.data.message)
        }
    }
    return (
        <div className="cart-item">

            <img
                src={product.productId.image}
                alt={product.productId.title}
            />

            <div className="cart-item-details">

                <div className="product-title-row">
                    <h2>
                        {product.productId.title
                            .split(" ")
                            .map(
                                word =>
                                    word.charAt(0).toUpperCase() +
                                    word.slice(1).toLowerCase()
                            )
                            .join(" ")}
                    </h2>

                    {product.productId.solled ? (
                        <div className="sold-badge">
                            SOLD OUT
                        </div>
                        ) : stock === 0 ? (
                        <span className="stock-badge sold-out">
                            Out Of Stock
                        </span>
                        ) : stock <= 5 ? (
                        <span className="stock-badge">
                            {stock} Left
                        </span>
                    ) : null}
                    
                </div>

                <p className="category">
                    {product.productId.category
                        .split(" ")
                        .map(
                            word =>
                                word.charAt(0).toUpperCase() +
                                word.slice(1).toLowerCase()
                        )
                        .join(" ")}
                </p>

                <h3>
                    ₹{product.productId.price.toLocaleString("en-IN")}
                </h3>

                {!product.productId.solled && product.productId.quantity !== 0 ? (<div className="quantity">

                    <button onClick={()=>handleDec()}>-</button>

                    <span>{count}</span>

                    <button onClick={()=>handleInc()}> +</button>

                </div>):null}

                <button className="remove-button">
                    Remove
                </button>

            </div>

        </div>
    );
}

export default Card;