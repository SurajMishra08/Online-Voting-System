import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./components/Admindashboard";
import "./App.css";
import HeroSection from "./components/hero1";
import ElectionManager from "./components/candidate";
import VoteSuccessPage from "./components/successful";
import HeaderSection from "./components/header";
import VoterLoginForm from "./components/login";
import VoterSignupForm from "./components/signup";
import VoteSecureFooter from "./components/footer";
import WhyChooseVoteSecure from "./components/hero4";
import WhyChoose from './components/hero2';
import HowItWorks from './components/hero3';
import ElectionPage from './components/election';
import ResultPage from './components/result';
import Dashboard from "./components/elect";
import ElectionPage1 from "./components/pole.jsx";
import ElectionResults from "./components/vresults.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
       <HeaderSection></HeaderSection>

           <Outlet/>


      <VoteSecureFooter></VoteSecureFooter>
    </>
  );
}

export default App;
