import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  PersonFill,
  EnvelopeFill,
  LockFill,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

export default function VoterSignupForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    voterId: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password check
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // Success message
    setMessage("Signup successful");

    // Redirect to Home Page after 1 second
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const inputWrap = {
    background: "#d8d1d1",
    height: "36px",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,.15)",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center p-4"
      style={{
        minHeight: "100vh",
        background: "#efeff4",
      }}
    >
      <div
        className="bg-white rounded-4 px-4 py-4 shadow"
        style={{
          width: "450px",
          maxWidth: "100%",
          boxShadow: "0 6px 10px rgba(0,0,0,.18)",
        }}
      >
        {/* Heading */}
        <div className="text-center mb-4">
          <h1
            className="fw-bold mb-1"
            style={{ fontSize: "26px" }}
          >
            Welcome, Voters!
          </h1>

          <p
            className="mb-0"
            style={{ fontSize: "18px" }}
          >
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="form-label fw-bold fs-5">
              Name
            </label>

            <div
              className="input-group overflow-hidden"
              style={inputWrap}
            >
              <span className="input-group-text border-0 bg-transparent ps-4">
                <PersonFill />
              </span>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control border-0 bg-transparent shadow-none"
                placeholder="Jhon Doe"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="form-label fw-bold fs-5">
              Email
            </label>

            <div
              className="input-group overflow-hidden"
              style={inputWrap}
            >
              <span className="input-group-text border-0 bg-transparent ps-4">
                <EnvelopeFill />
              </span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control border-0 bg-transparent shadow-none"
                placeholder="you@email.com"
                required
              />
            </div>
          </div>

      

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-bold fs-5">
              Password
            </label>

            <div
              className="input-group overflow-hidden"
              style={inputWrap}
            >
              <span className="input-group-text border-0 bg-transparent ps-4">
                <LockFill />
              </span>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="form-control border-0 bg-transparent shadow-none"
                placeholder="***********"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="form-label fw-bold fs-5">
              Confirm Password
            </label>

            <div
              className="input-group overflow-hidden"
              style={inputWrap}
            >
              <span className="input-group-text border-0 bg-transparent ps-4">
                <LockFill />
              </span>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="form-control border-0 bg-transparent shadow-none"
                placeholder="***********"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn w-100 fw-bold mb-4"
            style={{
              background:
                "linear-gradient(to right,#3aa0f3,#5a79d8)",
              color: "#000",
              height: "34px",
            }}
          >
            Sign up
          </button>
        </form>

        {/* Login Link */}
        <div
          className="text-center fw-semibold"
          style={{ fontSize: "18px" }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-decoration-none fw-bold"
            style={{ color: "#5a79d8" }}
          >
            Log In
          </Link>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`text-center mt-3 ${
              message.includes("successful")
                ? "text-success"
                : "text-danger"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}