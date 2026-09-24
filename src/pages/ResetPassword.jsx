import { useState } from "react";
import {
  useNavigate,
} from "react-router-dom";
import "./ResetPassword.css";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] =
    useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!password) {
      setError("Password is required");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters"
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      setError("User not found");
      return;
    }

    user.password = password;

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    navigate("/");
  }

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Reset Password</h1>

        <p>
          Create your new password.
        </p>

        <form onSubmit={handleSubmit}>

          <label>
            New Password
          </label>

          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <label>
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
          />

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-button"
          >
            Reset Password
          </button>

        </form>

      </div>

    </div>
  );
} 