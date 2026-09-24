import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>Project Hub</h2>
        <span>WORKSPACE</span>
      </div>

      <nav>

        <NavLink to="/dashboard" className="nav-item">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/projects" className="nav-item">
          📁 Projects
        </NavLink>

        <NavLink to="/profile" className="nav-item">
          👤 Profile
        </NavLink>

        <NavLink to="/settings" className="nav-item">
          ⚙️ Settings
        </NavLink>

      </nav>

    </aside>
  );
} 