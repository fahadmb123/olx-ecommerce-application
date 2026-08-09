import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import "./Checkout.css";
import { useEffect, useState } from "react";
import type { CartCardType } from "../../types/product/productTypes";
import { useGetCheckoutCartProducts, usePlaceCartProducts } from "../../hooks/productHook";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/auth/authTypes";
import { toast } from "react-toastify";



function Checkout() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const productId = searchParams.get("productId");
    const [products,setProducts] = useState<CartCardType[] | null>(null)
    const getCheckoutCartProducts = useGetCheckoutCartProducts()
    const [subtotal,setSubtotal] = useState(0)
    const placeCartProducts = usePlaceCartProducts()


    useEffect(() => {
        const work = async () => {
            try {
                if (!productId) {
                    const result = await getCheckoutCartProducts()
                    setProducts(result.data)
                }
            } catch (error) {
                const err = error as AxiosError<ErrorResponse>
                toast.error(
                    err.response?.data.message || "Something went wrong",{toastId: "checkout-error" }
                )
                navigate(productId ? "/details" : "/cart")
            }
        }

        work()
    }, [navigate, productId, getCheckoutCartProducts])

    useEffect(() => {
         const summary = async ()=>{
            const subtotal = products?.reduce((acc, curr) => {
                return acc + (curr.productId.price || 0);
            }, 0) ?? 0;
            setSubtotal(subtotal)
        }
        summary()
    }, [products])


    const handlePlaceOrder = async ()=>{
        try {
            if (!productId) {
                const result = await placeCartProducts()
            }
        } catch (error) {
            const err = error as AxiosError<ErrorResponse>
            toast.error(
                err.response?.data.message || "Something went wrong",{toastId: "checkout-error" }
            )
            navigate(productId ? "/details" : "/cart")
        }
    }
    return (
        <div className="checkout-page">

            {/* Main */}
            <main className="checkout-container">

                <h1>Checkout</h1>

                <div className="checkout-content">

                    
                    <section className="checkout-products">

                        <h2>Your Products</h2>

                       {products?.map((product)=>(
                            <div className="checkout-item">

                                <img
                                    src={product.productId.image}
                                    alt={product.productId.title}
                                />

                                <div className="checkout-item-details">

                                    <h3>{product.productId.title
                                        .split(" ")
                                        .map(
                                            word =>
                                                word.charAt(0).toUpperCase() +
                                                word.slice(1).toLowerCase()
                                        )
                                        .join(" ")}
                                    </h3>

                                    <p>{product.productId.category
                                        .split(" ")
                                        .map(
                                            word =>
                                                word.charAt(0).toUpperCase() +
                                                word.slice(1).toLowerCase()
                                        )
                                        .join(" ")}
                                    </p>
                                </div>

                                <strong>₹{product.productId.price.toLocaleString("en-IN")}</strong>

                            </div>
                       ))}

                    </section>


                  
                    <aside className="checkout-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Products</span>
                            <span>{products?.length}</span>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toLocaleString("en-IN")}</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>Free</span>
                        </div>

                        <div className="summary-line"></div>

                        <div className="total-row">
                            <span>Total</span>
                            <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
                        </div>

                        <button onClick={()=>handlePlaceOrder()} className="place-order-button">
                            Place Order
                        </button>

                        <NavLink
                            to="/cart"
                            className="back-cart"
                        >
                            Back to Cart
                        </NavLink>

                    </aside>

                </div>

            </main>

        </div>
    );
}

export default Checkout;