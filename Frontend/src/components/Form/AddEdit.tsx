import { useForm } from "react-hook-form";
import "./AddEdit.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProductSchema, productSchema, type ProductFormData,type EditProductFormData } from "../../validation/productSchema";
import { useAddProduct, useEditProduct, useGetProduct } from "../../hooks/productHook";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../../types/auth/authTypes";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../types/product/productTypes";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

function AddEdit() {
    const {id} = useParams()
    const getProduct = useGetProduct()
    const navigate = useNavigate()
    const addProduct = useAddProduct()
    const editProduct = useEditProduct()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading,setLoading] = useState<boolean>(false)

    const schema = id ? editProductSchema : productSchema
    type FormSchemaData = EditProductFormData | ProductFormData
    const {watch,reset,register,handleSubmit,formState:{errors}} = useForm<FormSchemaData>({
        resolver : zodResolver(schema),mode : "onChange"
    })
    
    



    useEffect(() => {
        if (!id) return;

        const editData = async () => {
            try {
                setLoading(true)
                
                const data = await getProduct(id)
                setProduct(data.product)
                reset({
                    title: data.product.title,
                    description: data.product.description,
                    price: data.product.price,
                    category: data.product.category,
                });

            } catch (error) {
                const err = error as AxiosError<ErrorResponse>;
                toast.error(err.response?.data.message);
            } finally {
                setLoading(false)
            }
        };

        editData();

    }, [id, getProduct, reset])
    
    const onSubmit = async (data:ProductFormData | EditProductFormData)=>{
        try {
            setLoading(true)
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("description", data.description)
            formData.append("price", String(data.price))
            formData.append("category", String(data.category))
            
            if (data.image && data.image.length > 0) {
                formData.append("image", data.image[0])
            }

            let result
            if (id) {
                result = await editProduct(formData,id)
            }else {
                result = await addProduct(formData)
            }
            navigate("/sell", { replace: true })
            setLoading(false)
            toast.success(result.message)
        } catch (error) {
            const err = error as AxiosError<ErrorResponse>
            setLoading(false)
            toast.error(err.response?.data.message)
        }
            
    }
    const image = watch("image")
    return (
        
        <div className="add-edit-page">
            {loading && <Loader />}
            <div className="add-edit-card">

                <h1>{id? "Edit Your Product":"Sell Your Product"}</h1>

                <p className="add-edit-subtitle">
                    
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
                        <div className="image-preview">
                            {image?.[0] ? (
                                <img
                                    src={URL.createObjectURL(image[0])}
                                    alt="New product preview"
                                />
                            ) : product?.image ? (
                                <img
                                    src={product.image}
                                    alt={product.title}
                                />
                            ) : null}
                        </div>
                    </div>
                    {errors.image && (<p className="auth-error">{errors.image.message}</p>)}


                    <button
                        type="submit"
                        className="add-edit-submit"
                    >
                        {id? "Update":"Sell"}
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AddEdit;