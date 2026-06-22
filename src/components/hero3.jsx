import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HowItWorks() {
  return (
    <div
      className="container py-5 text-center"
      style={{ backgroundColor: "white" }}
    >
      {/* Heading */}
      <h2 className="fw-bold ">How It Works?</h2>
      <p className="text-muted mb-5">
        Four simple steps to participate in democracy
      </p>

      {/* Steps */}
      <div className="row g-5">
        {/* Step 1 */}
        <div className="col-md-6">
          <div className="step-box">
            <div className="circle">1</div>
            <h4>Create Account</h4>
            <p>Sign up with your email and verify your identity securely.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="col-md-6">
          <div className="step-box">
            <div className="circle">2</div>
            <h4>Browse Elections</h4>
            <p>
              View all active elections available in your region or
              organization.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="col-md-6">
          <div className="step-box">
            <div className="circle">3</div>
            <h4>Cast Your Vote</h4>
            <p>Review candidates and submit your vote with a single click.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="col-md-6">
          <div className="step-box">
            <div className="circle">4</div>
            <h4>View Results</h4>
            <p>Track results in real-time and see the final outcome.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
