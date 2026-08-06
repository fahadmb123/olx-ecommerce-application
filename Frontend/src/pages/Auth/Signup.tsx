import "./Auth.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { SignupFormData } from "../../validation/authSchema";
import { signupSchema } from "../../validation/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupThunk } from "../../features/auth/authThunk";
import type { User } from "../../types/auth/authTypes";
import { useAppDispatch, useAppSelector } from "../../hooks/dispatchHook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";



function Signup() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {register,handleSubmit,formState:{errors}} = useForm<SignupFormData>({
        resolver : zodResolver(signupSchema),mode : "onChange"
    })
    const auth = useAppSelector((state)=>state.auth)
   
    const onSubmit = async (data:User)=>{
        try {
            const result:{message:string,success:boolean} = await dispatch(signupThunk(data)).unwrap()
            toast.success(result.message)
            navigate("/login")
        } catch (error) {
            toast.error(error as string);
        }
            
    }


    return (
        
        <div className="container">
            {auth.loading && (<Loader />)}
            <div className="left">
                <h1>Join the Marketplace</h1>
                <p>Create an account to buy and sell products.</p>
            </div>

            <div className="right">
                <h2>Create Account</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input {...register("name")}
                        type="text"
                        placeholder="Full Name"
                    />
                    {errors.name && (<p className="errorMessage">{errors.name?.message}</p>)}

                    <input {...register("email")}
                        type="email"
                        placeholder="Email Address"
                    />
                    {errors.email && (<p className="errorMessage">{errors.email?.message}</p>)}

                    <input {...register("password")}
                        type="password"
                        placeholder="Password"
                    />
                    {errors.password && (<p className="errorMessage">{errors.password?.message}</p>)}

                    <input {...register("confirmPassword")}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && (<p className="errorMessage">{errors.confirmPassword?.message}</p>)}

                    <button type="submit">Create Account</button>
                </form>

                <p>
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;