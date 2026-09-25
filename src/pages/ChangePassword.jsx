import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./ChangePassword.css";

export default function ChangePassword() {

  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handlePasswordChange(e) {

    e.preventDefault();

    setError("");
    setMessage("");

    if (currentPassword !== user?.password) {
      setError("Current password is incorrect");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const updatedUser = {
      ...user,
      password: newPassword
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setMessage("Password changed successfully!");
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="change-password-content">

        <header className="change-password-header">

          <h1>Change Password</h1>

          <p>
            Update your account password.
          </p>

        </header>

        <section className="change-password-card">

          <h2>Change Password</h2>

          <form
            className="change-password-form"
            onSubmit={handlePasswordChange}
          >

            <label>
              Current Password
            </label>

            <input
              type="password"
              value={currentPassword}
              onChange={(e) =>
                setCurrentPassword(e.target.value)
              }
              placeholder="Enter current password"
            />

            <label>
              New Password
            </label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(e.target.value)
              }
              placeholder="Enter new password"
            />

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="Confirm new password"
            />

            {error && (
              <p className="change-password-error">
                {error}
              </p>
            )}

            {message && (
              <p className="change-password-success">
                {message}
              </p>
            )}

            <div className="change-password-buttons">

              <button
                type="button"
                className="change-password-cancel"
                onClick={() => navigate("/settings")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="change-password-submit"
              >
                Change Password
              </button>

            </div>

          </form>

        </section>

      </main>

    </div>
  );
} 