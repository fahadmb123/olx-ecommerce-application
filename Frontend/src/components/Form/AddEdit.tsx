import { useForm } from "react-hook-form";
import "./AddEdit.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, type ProductFormData } from "../../validation/productSchema";

function AddEdit() {

    const {register,handleSubmit,formState:{errors}} = useForm<ProductFormData>({
        resolver : zodResolver(productSchema),mode : "onChange"
    })

    const onSubmit = async (data:any)=>{
        try {
            console.log("Error")
        } catch (error) {
            console.log("Error",error)
        }
            
    }
    return (
        <div className="add-edit-page">

            <div className="add-edit-card">

                <h1>Sell Your Product</h1>

                <p className="add-edit-subtitle">
                    Add your product and start selling.
                </p>

                <form className="add-edit-form">

                    <div className="add-edit-form-group">
                        <label>Product Title</label>

                        <input
                            type="text"
                            placeholder="Enter product title"
                        />
                    </div>


                    <div className="add-edit-form-group">
                        <label>Description</label>

                        <textarea
                            placeholder="Describe your product"
                            rows={5}
                        />
                    </div>


                    <div className="add-edit-form-row">

                        <div className="add-edit-form-group">
                            <label>Price</label>

                            <input
                                type="number"
                                placeholder="Enter price"
                            />
                        </div>


                        <div className="add-edit-form-group">
                            <label>Category</label>

                            <select defaultValue="">
                                <option value="" disabled>
                                    Select Category
                                </option>

                                <option value="Mobile">
                                    Mobile
                                </option>

                                <option value="Laptop">
                                    Laptop
                                </option>

                                <option value="Electronics">
                                    Electronics
                                </option>

                                <option value="Furniture">
                                    Furniture
                                </option>

                                <option value="Vehicle">
                                    Vehicle
                                </option>
                            </select>
                        </div>

                    </div>


                    <div className="add-edit-form-group">
                        <label>Product Image</label>

                        <input
                            type="file"
                            accept="image/*"
                        />
                    </div>


                    <button
                        type="submit"
                        className="add-edit-submit"
                    >
                        Sell Product
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AddEdit;