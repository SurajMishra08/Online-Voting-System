import React from "react";

if (
  typeof document !== "undefined" &&
  !document.getElementById("feature-card-style")
) {
  const style = document.createElement("style");
  style.id = "feature-card-style";
  style.innerHTML = `.feature-card:hover{transform:translateY(-10px);box-shadow:0 18px 35px rgba(0,0,0,.12);}`;
  document.head.appendChild(style);
}
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ShieldCheck,
  GraphUpArrow,
  People,
  BarChart,
} from "react-bootstrap-icons";

export default function WhyChooseVoteSecure() {
  const cards = [
    {
      title: "Secure & Encrypted",
      text: "Military-grade encryption ensures your vote remains confidential and tamper-proof.",
      bg: "#e8f1ff",
      border: "#d1e1ff",
      iconBg: "#f7fbff",
      icon: <ShieldCheck size={30} color="#2f6df6" />,
    },
    {
      title: "Real-time Results",
      text: "Watch election results update live as votes are cast across the platform.",
      bg: "#f3eaff",
      border: "#ead8ff",
      iconBg: "#faf7ff",
      icon: <GraphUpArrow size={30} color="#8a2be2" />,
    },
    {
      title: "Accessible to All",
      text: "Vote from anywhere, anytime. Making democracy accessible for everyone.",
      bg: "#e7fff0",
      border: "#c9f3d8",
      iconBg: "#f7fff9",
      icon: <People size={30} color="#19a74a" />,
    },
    {
      title: "Transparent Analytics",
      text: "Complete transparency with detailed analytics and audit trails.",
      bg: "#fff4df",
      border: "#f7e1b7",
      iconBg: "#fffaf0",
      icon: <BarChart size={30} color="#e86b10" />,
    },
  ];

  return (
    <section
      style={{
        background: "#f6f7fb",
        minHeight: "100vh",
        padding: "70px 0 90px",
      }}
    >
      <div className="container-fluid px-4 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose VoteSecure?</h2>
          <p className="mx-auto mt-3 mb-0">
            Built with cutting-edge technology to ensure every vote counts
          </p>
        </div>

        <div className="row g-4 mt-4">
          {cards.map((card, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="h-100 rounded-4 p-4 feature-card"
                style={{
                  background: card.bg,
                  border: `1px solid ${card.border}`,
                  minHeight: "310px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-4 mb-4"
                  style={{
                    width: "62px",
                    height: "62px",
                    background: card.iconBg,
                  }}
                >
                  {card.icon}
                </div>

                <h3
                  className="fw-bold mb-4"
                  style={{ fontSize: "24px", color: "#111827" }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    color: "#4b5563",
                    lineHeight: "1.65",
                  }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
