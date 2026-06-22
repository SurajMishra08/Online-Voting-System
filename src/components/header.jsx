import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function HeaderSection() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Results", path: "/results" },
  ];

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-4">
      <div className="container-fluid">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand fw-bold fs-3 text-dark d-flex align-items-center gap-2 text-decoration-none"
        >
          <span style={{ fontSize: "30px" }}>✣</span>
          VoteSecure
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          {/* Center Navigation */}
          <ul className="navbar-nav mx-auto gap-lg-5 align-items-lg-center flex-column flex-lg-row">
            {navItems.map((item) => (
              <li className="nav-item w-100 mb-2 mb-lg-0" key={item.name}>
                <Link
                  to={item.path}
                  className={`btn fw-semibold w-100 ${
                    location.pathname === item.path
                      ? "btn-primary text-white rounded-3"
                      : "btn-outline-dark rounded-3"
                  }`}
                  onClick={() => {
                    // Close menu after click
                    const navbar = document.getElementById("navbarNav");
                    if (navbar?.classList.contains("show")) {
                      navbar.classList.remove("show");
                    }
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex gap-3 mt-3 mt-lg-0">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary rounded-pill px-4 fw-semibold"
                >
                  Log in
                </Link>

                <Link
                  to="/signup"
                  className="btn btn-primary rounded-pill px-4 fw-semibold"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="btn btn-danger rounded-pill px-4 fw-semibold"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
