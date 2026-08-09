import "./Home.css"
import Card from "../../components/Card/Card"
import type { SellAction, sellUseReducerInitialState } from "../../types/product/productTypes"
import { useEffect, useReducer, useState } from "react"
import { useGetProducts } from "../../hooks/productHook"
import { toast } from "react-toastify"
import type { AxiosError } from "axios"
import type { ErrorResponse } from "../../types/auth/authTypes"
import Loader from "../../components/Loader/Loader"






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




function Home () {
    const [state,dispatch] = useReducer(reducer,initialState)
    const getProducts = useGetProducts()
    const [loading,setLoading] = useState<boolean>(false)

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                dispatch({type:"loading",payload:true})
                        
                const data = await getProducts(state.page,9)
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
    },[getProducts,state.page])

    const handleViewMore = () => {
        dispatch({type:"page",payload:state.page+1})
    };
    return (
        <>
        {loading && <Loader />}
            <section className="filter-section">

                <select>
                    <option>All Categories</option>
                    <option>Mobiles</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Vehicles</option>
                </select>

                <button>Apply</button>

            </section>

            <div className="heading">
                <h2>Fresh Recommendations</h2>
            </div>

            

            <section className="products">

                {state.products.map((product)=>(
                    <Card key={product._id} product={product} setLoading={setLoading}/>
                ))}

            </section>
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
        </>
    )
}

export default Home