import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  EnvelopeFill,
  PersonFill,
  LockFill,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

export default function VoterLoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    voterId: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    setSubmitted(true);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div
      style={{
        background: "#efeff4",
        minHeight: "100vh",
      }}
      className="d-flex align-items-center justify-content-center p-3"
    >
      <div
        className="bg-white rounded-4 shadow px-4 py-4"
        style={{
          width: "460px",
          maxWidth: "100%",
          boxShadow: "0 6px 10px rgba(0,0,0,0.18)",
        }}
      >
        {/* Heading */}
        <div className="text-center mb-4">
          <h1
            className="fw-bold mb-1"
            style={{ fontSize: "28px" }}
          >
            Welcome Back, Voters!
          </h1>

          <p
            className="mb-0 text-dark"
            style={{ fontSize: "18px" }}
          >
            Enter your credentials to access your account
          </p>
        </div>

    
        <form onSubmit={handleSubmit}>
        
          <div className="mb-4">
            <label
              className="form-label fw-bold"
              style={{ fontSize: "20px" }}
            >
              Email
            </label>

            <div
              className="input-group rounded-pill overflow-hidden"
              style={{
                background: "#d6d0d0",
                height: "44px",
              }}
            >
              <span className="input-group-text border-0 bg-transparent ps-4">
                <EnvelopeFill />
              </span>

              <input
                type="email"
                name="email"
                className="form-control border-0 bg-transparent shadow-none"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <div className="mb-5">
            <label
              className="form-label fw-bold"
              style={{ fontSize: "20px" }}
            >
              Password
            </label>

            <div
              className="input-group rounded-pill overflow-hidden"
              style={{
                background: "#d6d0d0",
                height: "44px",
              }}
            >
              <span className="input-group-text border-0 bg-transparent ps-4">
                <LockFill />
              </span>

              <input
                type="password"
                name="password"
                className="form-control border-0 bg-transparent shadow-none"
                placeholder="***********"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold mb-4"
            style={{
              background:
                "linear-gradient(to right,#3aa0f3,#5a79d8)",
              color: "#000",
              height: "38px",
              borderRadius: "4px",
            }}
          >
            Login
          </button>
        </form>

        <div
          className="text-center fw-semibold"
          style={{ fontSize: "18px" }}
        >
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-decoration-none fw-bold"
            style={{ color: "#5a79d8" }}
          >
            Sign up
          </Link>
        </div>

        {submitted && (
          <div className="text-success text-center mt-3">
            Login successful
          </div>
        )}
      </div>
    </div>
  );
}