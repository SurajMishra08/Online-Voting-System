import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// Import logos
import bjpLogo from "../assets/bjpLogo.jpeg";
import incLogo from "../assets/incLogo.jpeg";
import aapLogo from "../assets/aapLogo.jpeg";
import tmcLogo from "../assets/tmcLogo.jpeg";
import notaLogo from "../assets/notaLogo.jpeg";

const candidates = [
  {
    id: "A",
    name: "Candidate A",
    party: "Bharatiya Janata Party (BJP)",
    state: "Gujarat",
    desc: "Focused on development, digital India, and strong governance",
    tags: ["Economy", "Infrastructure", "Digital India"],
    logo: bjpLogo,
  },
  {
    id: "B",
    name: "Candidate B",
    party: "Indian National Congress (INC)",
    state: "Uttar Pradesh",
    desc: "Focused on social justice, employment, and welfare governance",
    tags: ["Employment", "Education", "Welfare"],
    logo: incLogo,
  },
  {
    id: "C",
    name: "Candidate C",
    party: "Aam Aadmi Party (AAP)",
    state: "Delhi",
    desc: "Focused on education, healthcare, and transparent governance",
    tags: ["Education", "Healthcare", "Transparency"],
    logo: aapLogo,
  },
  {
    id: "D",
    name: "Candidate D",
    party: "Trinamool Congress (TMC)",
    state: "West Bengal",
    desc: "Focused on regional development and women empowerment",
    tags: ["Women Empowerment"],
    logo: tmcLogo,
  },
  {
    id: "NOTA",
    name: "None of the Above (NOTA)",
    party: "No Party",
    state: "India",
    desc: "Choose this option if you do not support any candidate for vote",
    tags: ["Neutral Choice", "Voter Right"],
    logo: notaLogo,
  },
];

export default function ElectionPage1() {
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    alert(`You voted for ${selected}`);

    
    navigate("/dashboard");
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold">Prime Minister Election 2026</h2>

      <p className="text-muted mb-5">
        Select your preferred candidate and submit your vote
      </p>

      <div className="row">
        {candidates.map((c) => (
          <div className="col-md-6 col-lg-4 mb-4" key={c.id}>
            <div
              className={`card shadow-sm candidate-card ${
                selected === c.id ? "selected" : ""
              }`}
              onClick={() => setSelected(c.id)}
              style={{
                cursor: "pointer",
                border:
                  selected === c.id
                    ? "2px solid #0d6efd"
                    : "1px solid #dee2e6",
                transition: "0.3s",
              }}
            >
              <div className="card-body text-center">
                <img
                  src={c.logo}
                  alt="logo"
                  height="70"
                  className="mb-3"
                />

                <h5>{c.name}</h5>

                <p className="fw-semibold">{c.party}</p>

                <p>📍 {c.state}</p>

                <p className="small">{c.desc}</p>

                <div>
                  {c.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge bg-light text-dark me-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-primary px-5"
          disabled={!selected}
          onClick={handleSubmit}
        >
          Submit Vote
        </button>
      </div>
    </div>
  );
}