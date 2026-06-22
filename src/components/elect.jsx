import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaUsers } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const activeElections = [
    {
      title: "Prime Minister Election",
      subtitle: "Elect your next Prime Minister",
      date: "15 April 2026 to 22 April 2026",
      voters: "15,987",
    },
    {
      title: "Pradhan Election",
      subtitle: "Choose your next city's Pradhan",
      date: "10 April 2026 to 17 April 2026",
      voters: "12,560",
    },
  ];

  const pastElections = [
    {
      title: "Student Council Election",
      subtitle: "University student council election",
      date: "15 February 2026 to 22 February 2026",
      voters: "23,987",
    },
  ];

  // Vote Button Function
  function handleVote(title) {
    console.log("Voting for:", title);
    navigate("/pole");
  }

  // Result Button Function
  function handleResult(title) {
    console.log("Viewing results for:", title);
    navigate("/results");
  }

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold hero3">Welcome back, Voters!</h2>
          <br />
          <p className="text-muted hero3">
            Participate in active elections and view your voting history
          </p>
        </div>
      </div>

      {/* Stats */}
      {/* <div className="row g-3 cardd mb-4">

        <div className="col-md-4 px-4">
          <div className="stat-card blue d-flex card1 justify-content-between align-items-center">
            <div style={{ height: "100px" }}>
              <h5>Active Elections</h5>
              <h2 className="pt-2 ps-5">2</h2>
            </div>
            <FaCheckCircle size={32} />
          </div>
        </div>

        <div className="col-md-4 px-4">
          <div className="stat-card green d-flex card2 justify-content-between align-items-center">
            <div style={{ height: "100px" }}>
              <h5>Vote Cast</h5>
              <h2 className="pt-2 ps-5">1</h2>
            </div>
            <FaCheckCircle size={32} />
          </div>
        </div>

        <div className="col-md-4 px-4">
          <div className="stat-card pink d-flex card3 justify-content-between align-items-center">
            <div style={{ height: "100px" }}>
              <h5>Participation Rate</h5>
              <h2 className="pt-2 ps-5">33%</h2>
            </div>
            <FaUsers size={32} />
          </div>
        </div>

      </div> */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="stat-card green-card card1 d-flex justify-content-between align-items-center">
            <div>
              <p className="Tvotes">Active Elections</p>
              <h3>2</h3>
            </div>
            <FaCheckCircle size={32} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card purple-card card2 d-flex justify-content-between align-items-center">
            <div>
              <p className="Tvotes">Vote Cast</p>
              <h3>1</h3>
            </div>
            <FaCheckCircle size={32} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card blue-card card3 d-flex justify-content-between align-items-center">
            <div>
              <p className="Tvotes">Participation Rate</p>
              <h3>33%</h3>
            </div>
            <FaUsers size={30} />
          </div>
        </div>
      </div>

      {/* Active Elections */}
      <h4 className="mb-3 text-muted1 my-3">Active Elections</h4>

      <div className="row g-4 m-2 w-100">
        {activeElections.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="election-card">
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold">{item.title}</h6>
                <span className="badge bg-success">Active</span>
              </div>

              <p className="text-muted">{item.subtitle}</p>
              <p>📅 {item.date}</p>
              <p>👥 {item.voters} registered voters</p>

              <button
                className="btn vote-btn w-100"
                onClick={() => handleVote(item.title)}
              >
                Vote Now →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Past Elections */}
      <h4 className="my-5 text-muted1">Past Elections</h4>

      <div className="row w-100 ms-2">
        {pastElections.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="election-card past">
              <h6 className="fw-bold">{item.title}</h6>

              <p className="text-muted">{item.subtitle}</p>

              <p>📅 {item.date}</p>
              <p>👥 {item.voters} registered voters</p>

              <button
                className="btn result-btn w-100"
                onClick={() => handleResult(item.title)}
              >
                View Results →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
