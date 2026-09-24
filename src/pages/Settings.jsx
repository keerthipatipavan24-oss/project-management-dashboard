import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Settings.css"; 

export default function Settings() {

  const navigate = useNavigate();

  function handleLogout() {

    localStorage.removeItem("isLoggedIn");

    navigate("/");
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <header className="page-header">

          <div>
            <h1>Settings</h1>

            <p>
              Manage your account settings.
            </p>
          </div>

        </header>

        <section className="content-box">

          <h2>Security</h2>

          <p>
            Update your account password.
          </p>

          <button
            className="primary-button"
            onClick={() =>
              navigate("/change-password")
            }
          >
            Change Password
          </button>

        </section>

        <section className="content-box">

          <h2>Account</h2>

          <p>
            Sign out from this account.
          </p>

          <button
            className="danger-button"
            onClick={handleLogout}
          >
            Logout
          </button>

        </section>

      </main>

    </div>
  );
} 