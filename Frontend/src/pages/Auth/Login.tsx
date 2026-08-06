import './Auth.css'




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
                        <a href="signup.html">Sign Up</a>
                    </p>

                </div>

            </div>

        </>
  )
}

export default Login
