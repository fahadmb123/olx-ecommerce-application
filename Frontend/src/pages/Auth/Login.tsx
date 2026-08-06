import './Auth.css'
import { Link } from 'react-router-dom'



function Login() {
    return (
        <>
            <div className="container">

                <div className="left">
                    <h1>Welcome Back</h1>
                    <p>Buy and sell products with ease.</p>
                </div>

                <div className="right">

                    <h2>Login</h2>

                    <form>

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                        />

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
