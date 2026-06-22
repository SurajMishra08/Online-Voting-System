import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function ElectionResults() {
  const navigate = useNavigate();

  const elections = [
    {
      title: "Prime Minister Election 2026",
      voters: "15,420",
    },
    {
      title: "Pradhan Election",
      voters: "8,930",
    },
    {
      title: "Student Council Election",
      voters: "13,490",
    },
  ];


  const handleViewResults = (title) => {
    navigate("/results");
  };

  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "#f5f5f5",
        minHeight: "70vh",
      }}
    >
      <div className="container">
        {/* Heading */}
        <h2
          className="fw-bold mb-1"
          style={{
            fontSize: "36px",
          }}
        >
          Election Results
        </h2>

        <p
          className="mb-4"
          style={{
            fontSize: "18px",
            color: "#333",
          }}
        >
          View results for completed and ongoing elections
        </p>

        {/* Cards */}
        {elections.map((item, index) => (
          <div
            key={index}
            className="mb-4 px-4 py-4 d-flex justify-content-between align-items-center"
            style={{
              background: "#efeff5",
              borderRadius: "18px",
              border: "1px solid #888",
              boxShadow: "0 3px 6px rgba(0,0,0,0.08)",
            }}
          >
            {/* Left */}
            <div>
              <h3
                className="fw-bold mb-1"
                style={{
                  fontSize: "22px",
                }}
              >
                {item.title}
              </h3>

              <p
                className="mb-0 fw-semibold"
                style={{
                  fontSize: "16px",
                }}
              >
                {item.voters} total voters
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => handleViewResults(item.title)}
              className="btn fw-bold px-3 py-2"
              style={{
                background: "#fff",
                borderRadius: "12px",
                border: "none",
                fontSize: "15px",
              }}
            >
              View Results →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
