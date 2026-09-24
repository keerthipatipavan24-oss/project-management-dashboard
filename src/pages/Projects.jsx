import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Projects.css";

export default function Projects() {

  const [search, setSearch] =
    useState("");

  const projects = [
    "Authentication Dashboard",
    "E-Commerce Website",
    "Employee Management System",
    "Task Management App",
  ];

  const filteredProjects =
    projects.filter((project) =>
      project
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <header className="page-header">

          <div>
            <h1>Projects</h1>
            <p>
              Search and manage projects.
            </p>
          </div>

        </header>


        <section className="content-box">

          <input
            className="search-input"
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />


          <div className="project-list">

            {filteredProjects.length > 0 ? (

              filteredProjects.map(
                (project) => (

                  <div
                    className="project-item"
                    key={project}
                  >
                    <h3>{project}</h3>

                    <span>
                      Active
                    </span>
                  </div>

                )
              )

            ) : (

              <div className="empty-state">
                <h3>
                  No projects found
                </h3>

                <p>
                  Try another search.
                </p>
              </div>

            )}

          </div>

        </section>

      </main>

    </div>
  );
} 