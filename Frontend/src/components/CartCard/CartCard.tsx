import "./CartCard.css";
import type { CartCardType } from "../../types/product/productTypes";
import {  useRemCart } from "../../hooks/productHook";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/auth/authTypes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface CardProps {
    product: CartCardType;
    setProducts: React.Dispatch<
        React.SetStateAction<CartCardType[] | null>
    >;
}

function Card({ product,setProducts }: CardProps) {

    const remCart = useRemCart()
    const navigate = useNavigate()
    

    const handleRemove = async ()=>{
        try{
           
            const data = await remCart(product.productId._id)
            navigate("/cart")

            setProducts(prev =>
                prev?.filter(
                    item => item.productId._id !== product.productId._id
                ) ?? null
            )

            toast.success(data.message)
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

                    {product.productId.solled && (
                        <div className="sold-badge">
                            SOLD OUT
                        </div>
                    )}
                    
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

    

                <button onClick={()=>handleRemove()} className="remove-button">
                    Remove
                </button>

            </div>

        </div>
    );
}

export default Card;