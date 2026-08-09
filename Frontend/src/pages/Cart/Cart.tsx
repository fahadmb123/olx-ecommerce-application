import { NavLink } from "react-router-dom";
import "./Cart.css";
import Card from "../../components/CartCard/CartCard";
import { useEffect, useState } from "react";
import { useGetCartProducts } from "../../hooks/productHook";
import type { CartCardType } from "../../types/product/productTypes";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/auth/authTypes";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";


function Cart() {
    const getProducts = useGetCartProducts()
    const [products,setProducts] = useState<CartCardType[] | null>(null)
    const [loading,setLoading] = useState(false)


    
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                setLoading(true)     
                const result = await getProducts()
                setProducts(result.data)
                
            } catch (error) {
                const err = error as AxiosError<ErrorResponse>
                toast.error(err.response?.data.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    },[])

    return (
        <div className="cart-page">

            {loading && <Loader />}
            <main className="cart-container">

                <div className="cart-header">
                    <h1>My Cart</h1>
                    <span>3 Items</span>
                </div>


                <div className="cart-content">

                    
                    <section className="cart-items">

                       {products?.map((product)=>(
                            <Card product={product}/>
                        ))}
                       

                    </section>


                    
                    <aside className="cart-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Items</span>
                            <span>4</span>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹88,000</span>
                        </div>

                        <div className="summary-line"></div>

                        <div className="total-row">
                            <span>Total</span>
                            <strong>₹88,000</strong>
                        </div>

                        <NavLink
                            to="/checkout"
                            className="checkout-button"
                        >
                            Proceed to Checkout
                        </NavLink>

                    </aside>

                </div>

            </main>

        </div>
    );
}

export default Cart;