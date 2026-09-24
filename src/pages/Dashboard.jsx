import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        {/* Header */}
        <div className="page-header">
          <h1>Dashboard</h1>

          <p>
            Welcome back, {user?.name || "User"} 👋
          </p>
        </div>


        {/* Statistics */}
        <div className="cards">

          <div className="card">
            <span>Total Projects</span>
            <strong>12</strong>
            <small>All projects</small>
          </div>

          <div className="card">
            <span>Active Projects</span>
            <strong>7</strong>
            <small>Currently in progress</small>
          </div>

          <div className="card">
            <span>Completed</span>
            <strong>5</strong>
            <small>Successfully completed</small>
          </div>

          <div className="card">
            <span>Team Members</span>
            <strong>8</strong>
            <small>Working together</small>
          </div>

        </div>


        {/* Recent Projects */}
        <div className="content-box">

          <div className="section-header">
            <div>
              <h2>Recent Projects</h2>
              <p>
                Overview of your latest projects.
              </p>
            </div>

            <button className="primary-button small">
              View All
            </button>
          </div>


          <div className="project-list">

            <div className="project-item">
              <div>
                <h3>Authentication Dashboard</h3>
                <p>Frontend Development</p>
              </div>

              <span>Active</span>
            </div>


            <div className="project-item">
              <div>
                <h3>E-Commerce Website</h3>
                <p>React Application</p>
              </div>

              <span>Active</span>
            </div>


            <div className="project-item">
              <div>
                <h3>Employee Management System</h3>
                <p>Web Application</p>
              </div>

              <span>Completed</span>
            </div>


            <div className="project-item">
              <div>
                <h3>Task Management App</h3>
                <p>Project Management</p>
              </div>

              <span>Active</span>
            </div>

          </div>

        </div>


        {/* Activity */}
        <div className="content-box">

          <h2>Recent Activity</h2>

          <div className="activity-list">

            <div className="activity-item">
              <strong>Project updated</strong>
              <p>
                Authentication Dashboard was updated.
              </p>
              <small>10 minutes ago</small>
            </div>

            <div className="activity-item">
              <strong>Profile updated</strong>
              <p>
                Your profile information was updated.
              </p>
              <small>1 hour ago</small>
            </div>

            <div className="activity-item">
              <strong>New project created</strong>
              <p>
                Task Management App was created.
              </p>
              <small>Yesterday</small>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
} 