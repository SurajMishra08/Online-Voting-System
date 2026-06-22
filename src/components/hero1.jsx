import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/online voting system illustration.jpeg";

function HeroSection() {
  return (
    <div className="container-fluid bg-light py-5">
      <div>
        <br />
        <br />
        <div className="row d-flex justify-content-center  mt-5 ms-5">
          {/* Left Content */}
          <div className="col-md-6 ps-5">
            <h2 className="fw-bold mb-3">Voting System</h2>

            <p className="text-muted fs-5">
              A Secure Voting System is an online platform that allows users to
              vote safely and easily from anywhere. It ensures privacy and
              accuracy using secure authentication and encryption. The system
              provides a simple interface and delivers fast, reliable results,
              making the voting process efficient and transparent.
            </p>

            <p className="fw-semibold mt-3 fs-5">
              “Your Vote, Your Voice — Anytime, Anywhere”
            </p>
          </div>

          {/* Right Image */}
          <div className="col-md-5 text-center ps-5 ms-5">
            <img
              src={img}
              alt="Voting"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* Bottom Features */}
        <div className="row border text-center mt-5 bottomfeatures">
          <div className="col-md-4">
            <p className="mt-3">• Secure</p>
          </div>
          <div className="col-md-4">
            <p className="mt-3">• Reliable</p>
          </div>
          <div className="col-md-4">
            <p className="mt-3">• Efficient</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
