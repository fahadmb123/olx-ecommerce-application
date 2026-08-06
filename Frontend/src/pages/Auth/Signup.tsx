import "./Auth.css";
import { Link } from "react-router-dom";

function Signup() {


  return (
    <div className="container">
      <div className="left">
        <h1>Join the Marketplace</h1>
        <p>Create an account to buy and sell products.</p>
      </div>

      <div className="right">
        <h2>Create Account</h2>

        <form>
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button>Create Account</button>
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