import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }
 
    if (!password) {
      setError("Password is required");
      return;
    }

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      setError("No registered account found");
      return;
    }

    if (
      email !== user.email ||
      password !== user.password
    ) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    if (rememberMe) {
      localStorage.setItem(
        "rememberMe",
        "true"
      );
    } else {
      localStorage.removeItem("rememberMe");
    }

    navigate("/dashboard");
  }

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Login</h1>

        <p>Welcome back! Please login.</p>

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Password</label>

          <div className="password-box">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          <div className="remember-row">

            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(
                    e.target.checked
                  )
                }
              />
              Remember Me
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-button"
          >
            Login
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
} 