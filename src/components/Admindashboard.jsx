import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ElectionPage from "./election";
import ElectionManager from "./candidate";
import ElectionResults from "./vresults";

/* Reusable Stat Card */
const StatCard = ({ title, value, icon, bgColor, valueColor }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div
        className="shadow-sm"
        style={{
          background: bgColor,
          borderRadius: "18px",
          padding: "18px 20px",
          minHeight: "105px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6
              className="fw-bold mb-3"
              style={{ fontSize: "18px", color: "#111" }}
            >
              {title}
            </h6>

            <h4
              className="fw-bold m-0"
              style={{
                color: valueColor,
                fontSize: "30px",
              }}
            >
              {value}
            </h4>
          </div>

          <div style={{ fontSize: "34px" }}>{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Elections");

  const tabs = ["Elections", "Candidates", "Results"];

  return (
    <div
      className="container py-5"
      style={{
        background: "#f7f7f7",
        borderRadius: "14px",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1
            className="fw-bold mb-2"
            style={{
              fontSize:"48",
              color: "#000",
            }}
          >
            Admin Dashboard
          </h1>

          <p
            className="m-0"
            style={{
              fontSize: "18",
              color: "#222",
            }}
          >
            Manage elections, candidates, and view results
          </p>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="dashboard"
          style={{
            width: "90px",
            height: "90px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Stats */}
      <div className="row g-4 mb-5">
        <StatCard
          title="Total Elections"
          value="3"
          icon="🗳️"
          bgColor="#f6d8f6"
          valueColor="#db87d9"
        />

        <StatCard
          title="Active Elections"
          value="2"
          icon="☑️"
          bgColor="#cfe8ff"
          valueColor="#4a68d8"
        />

        <StatCard
          title="Total Candidates"
          value="4"
          icon="👤"
          bgColor="#dff0b9"
          valueColor="#f0c300"
        />

        <StatCard
          title="Total Voters"
          value="27,790"
          icon="👥"
          bgColor="#f2c7f8"
          valueColor="#8f1a8c"
        />
      </div>

      {/* Tabs */}
      <div
        className="d-flex gap-3 flex-wrap"
        style={{
          background: "#d9e4ee",
          padding: "14px",
          borderRadius: "24px",
          width: "fit-content",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="btn fw-bold border-0"
            style={{
              minWidth: "180px",
              height: "50",
              borderRadius: "18px",
              fontSize: "22px",
              background:
                activeTab === tab ? "#ffffff" : "transparent",
              color: "#111",
              boxShadow:
                activeTab === tab
                  ? "0 2px 6px rgba(0,0,0,0.08)"
                  : "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "Elections" && <ElectionPage />}
        {activeTab === "Candidates" && <ElectionManager />}
        {activeTab === "Results" && <ElectionResults />}
      </div>
    </div>
  );
}