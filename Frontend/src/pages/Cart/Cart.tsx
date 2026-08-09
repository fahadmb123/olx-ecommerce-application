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
    const [subtotal,setSubtotal] = useState(0)

    
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
    useEffect(() => {
         const summary = async ()=>{
            const subtotal = products?.reduce((acc, curr) => {
                return acc + (curr.productId.price || 0);
            }, 0) ?? 0;
            setSubtotal(subtotal)
        }
        summary()
    }, [products]);




    return (
        <div className="cart-page">

            {loading && <Loader />}
            <main className="cart-container">

                <div className="cart-header">
                    <h1>My Cart</h1>
                    {products?.length == 0 && (<h1>No products</h1>)}
                    <span>{products?.length === 0 ? "No" : products?.length} Items</span>
                    
                </div>
                

                <div className="cart-content">

                    
                    <section className="cart-items">

                       {products?.map((product)=>(
                            <Card setProducts={setProducts} key={product.productId._id} product={product}/>
                        ))}
                       

                    </section>
                    


                    
                    <aside className="cart-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Items</span>
                            <span>{products?.length}</span>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toLocaleString("en-IN")}</span>
                        </div>

                        <div className="summary-line"></div>

                        <div className="total-row">
                            <span>Total</span>
                            <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
                        </div>

                        <NavLink
                            to={`/checkout?cart=${true}`}
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