import { useNavigate } from "react-router-dom"
import type { cardType } from "../../types/product/productTypes"
import "./Card.css"
import { useDeleteProduct } from "../../hooks/productHook"
import type { ErrorResponse } from "../../types/auth/authTypes"
import type { AxiosError } from "axios"
import { toast } from "react-toastify"



function Card ({sell,product,setLoading,dispatch}:cardType){
    const navigate = useNavigate()
    const deleteProduct = useDeleteProduct()
    const onEdit = (id:string)=>{
        navigate(`/addedit/${id}`)
    }


    const onDelete = async (id:string)=>{
        try {
            setLoading(true)
            const result = await deleteProduct(id)
            setLoading(false)
            dispatch?.({type:"deleteProduct",payload:id})
            toast.success(result.message)
        } catch (error){
            const err = error as AxiosError<ErrorResponse>
            setLoading(false)
            toast.error(err.response?.data.message)
        }
    }
    
    return (
        <>
            <div className="card">
                
                {product.solled && (
                    <div className="sold-badge">
                        SOLD
                    </div>
                )}
                <img src={product.image} />
                <div className="details">
                    <h2>₹{product.price.toLocaleString("en-IN")}</h2>

                    <h3>{product.title.split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")}</h3>

                    <p>Category : {product.category.split(" ")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")}</p>

                    <p>{product.description}</p>

                    {sell && (
                        <div className="buttons">
                            {!product.solled && (<button className="view" onClick={()=>onEdit(product._id)}>Edit</button>)}
                            <button onClick={()=>onDelete(product._id)} className="cart">Delete</button>
                        </div>
                    )}
                    {!sell && (
                        <div className="buttons">
                            <button className="view">View</button>
                            <button className="cart">Add Cart</button>
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}

export default Card