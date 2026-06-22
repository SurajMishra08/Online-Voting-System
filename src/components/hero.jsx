import React from "react";
import HeroSection from "./Hero1";
import WhyChoose from "./hero2";
import HowItWorks from "./hero3";
import WhyChooseVoteSecure from "./hero4";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChoose />
      <HowItWorks />
      <WhyChooseVoteSecure />
    </>
  );
}