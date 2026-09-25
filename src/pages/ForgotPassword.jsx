import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./ForgotPassword.css"; 

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user || email !== user.email) {
      setError("Email not found");
      return;
    }

    navigate("/reset-password");
  }

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Forgot Password</h1>

        <p>
          Enter your registered email.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-button"
          >
            Continue
          </button>

        </form>

        <Link to="/">
          Back to Login
        </Link>

      </div>

    </div>
  );
}  