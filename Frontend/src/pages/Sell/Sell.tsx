import "./Sell.css";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card"
import { useEffect, useReducer } from "react";
import { useGetAllUserProducts } from "../../hooks/productHook";
import type { sellUseReducerInitialState,SellAction } from "../../types/product/productTypes";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/auth/authTypes";



const initialState:sellUseReducerInitialState = {
    products:[],
    loading : false,
    hasMore : false,
    page:1
}
const reducer = (state:sellUseReducerInitialState,action:SellAction) =>{
    switch(action.type){
        case "products":
            return {
                ...state,
                products:
                    state.page === 1
                        ? action.payload
                        : [...state.products, ...action.payload]
            }
        case "loading":
            return {
                ...state,
                loading : action.payload
            }
        case "page":
            return {
                ...state,
                page : action.payload
            }
        case "hasMore":
            return {
                ...state,
                hasMore : action.payload
            }
        default:
            return state
    }
}




function Sell() {
    const navigate = useNavigate()
    const [state,dispatch] = useReducer(reducer,initialState)
    const getAllUserProducts = useGetAllUserProducts()
   


    
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                dispatch({type:"loading",payload:true})
                        
                const data = await getAllUserProducts(state.page,9)
                dispatch({type:"products",payload:data.products})
                dispatch({type:"hasMore",payload:data.hasMore})
                
            } catch (error) {
                const err = error as AxiosError<ErrorResponse>
                toast.error(err.response?.data.message)
            } finally {
                dispatch({type:"loading",payload:false})
            }
        }
        fetchProducts()
    },[getAllUserProducts,state.page])

    const handleViewMore = () => {
        dispatch({type:"page",payload:state.page+1})
    };
    return (
        <main className="sell-container">

            <section className="my-listings">

                <div className="listings-header">
                    <div>
                        <h2>My Listings</h2>
                        <span>{state.products.length} Products</span>
                    </div>

                    <button
                        className="sell-product-button"
                        onClick={() => navigate("/addedit")}
                    >
                        + Sell Product
                    </button>
                </div>


                <div className="listing-grid">
                    {state.products.map((product)=>(
                        <Card sell={true} key={product._id} product={product}/>
                    ))}
                </div>
                {state.hasMore && (
                    <div className="view-more-container">
                        <button
                            className="view-more-button"
                            onClick={handleViewMore}
                            disabled={state.loading}
                        >
                            {state.loading ? "Loading..." : "View More"}
                        </button>
                    </div>
                )}
            </section>

        </main>
    );
}

export default Sell;