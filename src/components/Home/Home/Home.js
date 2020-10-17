import React from "react";
import ClientBaners from "../ClientBaners/ClientBaners";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderMain from "../HeaderMain/HeaderMain";
import Services from "../Services/Services";
import WorksSample from "../WorksSample/WorksSample";
import "./Home.css";
const Home = () => {
  document.title = "Creative Agency";
  return (
    <div>
      <div className="home-container">
        <Header></Header>
        <HeaderMain></HeaderMain>
      </div>
      <ClientBaners></ClientBaners>
      <Services></Services>
      <WorksSample></WorksSample>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
