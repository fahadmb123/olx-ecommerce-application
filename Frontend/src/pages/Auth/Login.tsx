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

        <div className="auth-page">

            {auth.loading && <Loader />}

            <div className="auth-container">
                <div className="auth-left">
                    <h1>Welcome To</h1>
                    <h1>OLX</h1>
                </div>


                <div className="auth-right">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Email Address"
                        />
                        {errors.email && (<p className="auth-error">{errors.email.message}</p>
                        )}



                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                        />
                        {errors.password && (<p className="auth-error">{errors.password.message}</p>)}

                        <button type="submit">
                            Login
                        </button>

                    </form>
                    <p>
                        Don't have an account?
                        <Link to="/signup">{" "}Sign Up</Link>
                    </p>


                </div>

            </div>

        </div>

    );
}

export default Login
