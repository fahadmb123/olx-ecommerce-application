import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormData } from '../../validation/authSchema'
import type { loginUserType } from '../../types/auth/authTypes'
import { toast } from 'react-toastify'
import { useAppDispatch,useAppSelector } from '../../hooks/dispatchHook'
import { loginThunk } from '../../features/auth/authThunk'
import Loader from '../../components/Loader/Loader'


function Login() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {register,handleSubmit,formState:{errors}} = useForm<LoginFormData>({
            resolver : zodResolver(loginSchema),mode : "onChange"
    })
    const auth = useAppSelector((state)=>state.auth)

    const onSubmit = async (data:loginUserType)=>{
        try {
            const result:{message:string,success:boolean} = await dispatch(loginThunk(data)).unwrap()
            toast.success(result.message)
            navigate("/")
        } catch (error) {
            toast.error(error as string);
        }
    }
    return (
        <>
            <div className="container">
                {auth.loading && (<Loader />)}
                <div className="left">
                    <h1>Welcome Back</h1>
                    <p>Buy and sell products with ease.</p>
                </div>

                <div className="right">

                    <h2>Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input  {...register("email")}
                            type="email"
                            placeholder="Email Address"
                        />
                        {errors.email && (<p className="errorMessage">{errors.email?.message}</p>)}

                        <input {...register("password")}
                            type="password"
                            placeholder="Password"
                        />
                        {errors.password && (<p className="errorMessage">{errors.password?.message}</p>)}

                        <button>
                            Login
                        </button>

                    </form>

                    <p>
                        Don't have an account?
                        <Link to="/signup">Sign Up</Link>
                    </p>

                </div>

            </div>

        </>
  )
}

export default Login
