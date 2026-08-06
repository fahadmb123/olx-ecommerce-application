import "./Auth.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { SignupFormData } from "../../validation/authSchema";
import { signupSchema } from "../../validation/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupThunk } from "../../features/auth/authThunk";
import type { User } from "../../types/auth/authTypes";
import { useAppDispatch } from "../../hooks/dispatchHook";

function Signup() {

    const dispatch = useAppDispatch()
    const {register,handleSubmit,formState:{errors}} = useForm<SignupFormData>({
        resolver : zodResolver(signupSchema),mode : "onChange"
    })

    const onSubmit = (data:User)=>{
        dispatch(signupThunk(data))
    }
    return (
        <div className="container">
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

                <input {...register("email")}
                    type="email"
                    placeholder="Email Address"
                />

                <input {...register("password")}
                    type="password"
                    placeholder="Password"
                />

                <input {...register("confirmPassword")}
                    type="password"
                    placeholder="Confirm Password"
                />

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