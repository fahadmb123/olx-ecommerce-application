import { useNavigate } from "react-router-dom"
import type { cardType } from "../../types/product/productTypes"
import "./Card.css"


function Card ({sell,product}:cardType){
    const navigate = useNavigate()

    const onEdit = (id:string)=>{
        navigate(`/addedit/${id}`)
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
                            <button className="cart">Delete</button>
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