import { useForm } from "react-hook-form";
import "./AddEdit.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, type ProductFormData } from "../../validation/productSchema";
import { useAddProduct } from "../../hooks/productHook";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/auth/authTypes";



function AddEdit() {
    const addProduct = useAddProduct()
    const {register,handleSubmit,formState:{errors}} = useForm<ProductFormData>({
        resolver : zodResolver(productSchema),mode : "onChange"
    })

    const onSubmit = async (data:ProductFormData)=>{
        try {
            
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("description", data.description)
            formData.append("price", String(data.price))
            formData.append("category", String(data.category))
            formData.append("image", data.image[0])

            const result = await addProduct(formData)
            toast.success(result.message)
        } catch (error) {
            const err = error as AxiosError<ErrorResponse>
            toast.error(err.response?.data.message)
        }
            
    }
    return (
        <div className="add-edit-page">

            <div className="add-edit-card">

                <h1>Sell Your Product</h1>

                <p className="add-edit-subtitle">
                    Add your product and start selling.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="add-edit-form">

                    <div className="add-edit-form-group">
                        <label>Product Title</label>

                        <input {...register("title")}
                            type="text"
                            placeholder="Enter product title"
                        />
                        
                    </div>
                    {errors.title && (<p className="auth-error">{errors.title.message}</p>)}


                    <div className="add-edit-form-group">
                        <label>Description</label>

                        <textarea {...register("description")}
                            placeholder="Describe your product"
                            rows={5}
                        />
                    </div>
                    {errors.description && (<p className="auth-error">{errors.description.message}</p>)}


                    <div className="add-edit-form-row">

                        <div className="add-edit-form-group">
                            <label>Price</label>

                            <input {...register("price",{valueAsNumber:true})}
                                type="number"
                                placeholder="Enter price"
                            />
                        </div>
                        


                        <div className="add-edit-form-group">
                            <label>Category</label>

                            <select {...register("category")} defaultValue="">
                                <option selected value="Mobile">
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
                    {errors.price && (<p className="auth-error">{errors.price.message}</p>)}


                    <div className="add-edit-form-group">
                        <label>Product Image</label>

                        <input {...register("image")}
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                        />
                    </div>
                    {errors.image && (<p className="auth-error">{errors.image.message}</p>)}


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