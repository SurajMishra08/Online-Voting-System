import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { FaCheckCircle, FaUsers, FaTrophy } from "react-icons/fa";
import bjpLogo from "../assets/bjpLogo.jpeg"; // adjust path
import incLogo from "../assets/incLogo.jpeg";
import aapLogo from "../assets/aapLogo.jpeg";
import tmcLogo from "../assets/tmcLogo.jpeg";
import notaLogo from "../assets/notaLogo.jpeg";



function ResultPage() {
  const navigate = useNavigate();
  const data = [
    {
      name: "Candidate A",
      party: "Bharatiya Janata Party (BJP)",
      votes: 4520,
      img: bjpLogo,
      color: "#6fa8dc",
    },
    {
      name: "Candidate B",
      party: "Indian National Congress (INC)",
      votes: 3890,
      img: incLogo,
      color: "#dce775",
    },
    {
      name: "Candidate C",
      party: "Aam Aadmi Party (AAP)",
      votes: 2150,
      img: aapLogo,
      color: "#ce93d8",
    },
    {
      name: "Candidate D",
      party: "Trinamool Congress (TMC)",
      votes: 1290,
      img: tmcLogo,
      color: "#aed581",
    },
    {
      name: "NOTA",
      party: "None of the Above",
      votes: 760,
      img: notaLogo,
      color: "#e1bee7",
    },
  ];

  const totalVotes = data.reduce((sum, c) => sum + c.votes, 0);

  const winner = data.reduce((max, c) =>
    c.votes > max.votes ? c : max
  );

  const winnerPercent = ((winner.votes / totalVotes) * 100).toFixed(1);

  return (
    <div className="container-fluid px-4 py-4 main-bg">

        {/* Back Button */}
      <button className="btn back-btn mb-3"  onClick={() => navigate("/dashboard")}>← Go back to Dashboard </button><br /><br /><br />

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Prime Minister Election 2026</h2>
          <p className="text-muted1">Final results and vote distribution</p>
        </div>
        <img src={bjpLogo} alt="vote" height="60" />
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="stat-card green-card card1 d-flex justify-content-between align-items-center">
            <div>
              <p className="Tvotes">Total Votes</p>
              <h3>11,850</h3>
            </div>
            <FaCheckCircle size={32} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card purple-card card2">
            <p className="Tvotes">Voter Turnout</p>
            <h3>76.8%</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card blue-card card3 d-flex justify-content-between align-items-center">
            <div>
              <p className="Tvotes">Candidates</p>
              <h3>4</h3>
            </div>
            <FaUsers size={30} />
          </div>
        </div>
      </div>

      {/* Winner Card */}
      <div className="winner-card p-4 d-flex justify-content-between align-items-center">
        <div>
          <div className="d-flex align-items-center mb-2">
            <FaTrophy className="trophy me-2" />
            <h3 className="fw-bold m-0">Election Winner</h3>
          </div>
          <p>Congratulations to the winner!</p>

          <h2 className="fw-bold mt-3">Candidate A</h2>
          <h5>Bhartiya Janta Party</h5>

          <div className="d-flex align-items-center mt-3 stats-line">
            <h5 className="me-3">4,520 Votes</h5>
            <span className="divider"></span>
            <h5 className="ms-3">38.2% of Total</h5>
          </div>
        </div>

        <div className="logo-circle">
          <img src={bjpLogo} alt="winner" />
        </div>
      </div>

      {/* Chart */}
      <h3 className="section-title mt-5">Vote Distribution</h3>
      <p className="section-sub mb-5">
        Visual representation of the election results
      </p>

      <div className="chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="votes" radius={[10, 10, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Results */}
      <h3 className="section-title mt-5">Detailed Result</h3>
      <p className="section-sub mb-5">
        Complete breakdown of votes per candidate
      </p>

      {data.map((c, i) => {
        const percent = ((c.votes / totalVotes) * 100).toFixed(1);

        return (
          <div className="candidate-card" key={i}>
            <div className="d-flex align-items-center" style={{height:"100px"}}>

              <img
                src={c.img}
                alt={c.name}
                className="candidate-img"
              />

              <div className="ms-3 flex-grow-1">
                <h5 className="mb-1">{c.name}</h5>
                <p className="party mb-2">{c.party}</p>

                <div className="progress-bar-custom">
                  <div
                    className="progress-fill"
                    style={{
                       width: `${percent}%`,
                        background: c.color,
                   }}
                  ></div>
                </div>
              </div>

              <div className="text-end">
                <strong>{c.votes.toLocaleString()} Votes</strong>
                <p className="percent mb-0">
                  {percent}% of Total
                </p>
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}

export default ResultPage;