import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useAddToCart, useGetProduct } from "../../hooks/productHook";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/auth/authTypes";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import type { Product } from "../../types/product/productTypes";

function ProductDetails() {
    const [loading,setLoading] = useState(false)
    const [product,setProduct] = useState<Product | null>(null)
    const addToCart = useAddToCart()
    const getProduct = useGetProduct()
    const {id} = useParams()
    
    const addCart = async () => {
        try {
            setLoading(true)
            const data = await addToCart(id as string)
            setLoading(false)
            toast.success(data.message)
        } catch (error) {
            const err = error as AxiosError<ErrorResponse>
            setLoading(false)
            toast.error(
                err.response?.data.message || "Something went wrong",{toastId: "checkout-error" }
            )
        }
    }

    useEffect(()=>{
        const work = async ()=>{
            try {
                setLoading(true)
                const data = await getProduct(id as string,true)
                
                setProduct(data.product)
                setLoading(false)
            } catch (error) {
                const err = error as AxiosError<ErrorResponse>
                setLoading(false)
                toast.error(
                    err.response?.data.message || "Something went wrong",{toastId: "checkout-error" }
                )
            }
        }
        work()
    },[getProduct,id])

    return (
        <div className="product-details-page">
            {loading && (<Loader/>)}
            <div className="product-details-card">

                
                <div className="product-image-section">
                    <img
                        src={product?.image}
                        alt={product?.title}
                    />
                </div>


               
                <div className="product-info">

                    <p className="product-category">
                        Category : {product?.category.split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")}
                    </p>

                    <h1>{product?.title.split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")}</h1>

                    <h2>₹{product?.price.toLocaleString("en-IN")}</h2>

                    <p className="product-description">
                        {product?.description}
                    </p>


                    <div className="product-info-item">
                        <span>Category</span>
                        <strong>Mobile</strong>
                    </div>

                  


                    <button onClick={()=>addCart()} className="details-cart-button">
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProductDetails;