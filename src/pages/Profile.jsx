import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Toast from "../components/Toast";
import "./Profile.css"; 

export default function Profile() {

  const [user, setUser] = useState(
    JSON.parse(
      localStorage.getItem("user")
    )
  );

  const [editing, setEditing] =
    useState(false);

  const [name, setName] =
    useState(user?.name || "");

  const [email, setEmail] =
    useState(user?.email || "");

  const [toast, setToast] = useState({
    message: "",
    type: ""
  });


  function showToast(message, type) {

    setToast({
      message,
      type
    });

    setTimeout(() => {

      setToast({
        message: "",
        type: ""
      });

    }, 3000);
  }


  function handleSave(e) {

    e.preventDefault();


    if (!name.trim()) {

      showToast(
        "Name is required",
        "error"
      );

      return;
    }


    if (!email.includes("@")) {

      showToast(
        "Enter a valid email",
        "error"
      );

      return;
    }


    const updatedUser = {
      ...user,
      name,
      email
    };


    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );


    setUser(updatedUser);

    setEditing(false);


    showToast(
      "Profile updated successfully!",
      "success"
    );
  }


  return (

    <div className="app-layout">

      <Toast
        message={toast.message}
        type={toast.type}
      />


      <Sidebar />


      <main className="main-content">


        <header className="page-header">

          <div>

            <h1>
              Profile
            </h1>

            <p>
              Manage your profile information.
            </p>

          </div>

        </header>


        <section className="content-box">


          {!editing ? (

            <>

              <div className="profile-info">


                <div>

                  <span>
                    Name
                  </span>

                  <strong>
                    {user?.name}
                  </strong>

                </div>


                <div>

                  <span>
                    Email
                  </span>

                  <strong>
                    {user?.email}
                  </strong>

                </div>


              </div>


              <button
                className="primary-button small"
                onClick={() =>
                  setEditing(true)
                }
              >
                Edit Profile
              </button>

            </>

          ) : (


            <form
              onSubmit={handleSave}
            >


              <label>
                Name
              </label>


              <input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />


              <label>
                Email
              </label>


              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />


              <div className="button-row">


                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    setEditing(false)
                  }
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="primary-button"
                >
                  Save
                </button>


              </div>


            </form>

          )}

        </section>

      </main>

    </div>
  );
} 