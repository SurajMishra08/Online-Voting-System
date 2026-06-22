import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLock, FaChartLine, FaUsers, FaCheckCircle } from "react-icons/fa";

function WhyChoose() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Why Choose Online Voting?</h2>
        <p className="text-muted">
          Built with cutting-edge technology to ensure every vote counts
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-sm h-100 card-style bg-blue">
            <FaLock className="icon mb-3" />
            <h4 className="fw-bold">Secure & Encrypted</h4>
            <p>
              Military-grade encryption ensures your vote remains confidential
              and tamper-proof.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-sm h-100 card-style bg-yellow">
            <FaChartLine className="icon mb-3" />
            <h4 className="fw-bold">Real-time Results</h4>
            <p>
              Watch election results update live as votes are cast across the
              platform.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-sm h-100 card-style bg-pink">
            <FaUsers className="icon mb-3" />
            <h4 className="fw-bold">Accessible to All</h4>
            <p>
              Vote from anywhere, anytime. Making democracy accessible for
              everyone.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-sm h-100 card-style bg-green">
            <FaCheckCircle className="icon mb-3" />
            <h4 className="fw-bold">Transparent Analytics</h4>
            <p>
              Complete transparency with detailed analytics and audit trails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
