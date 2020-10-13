import React from "react";
import ClientBaners from "../ClientBaners/ClientBaners";
import Header from "../Header/Header";
import HeaderMain from "../HeaderMain/HeaderMain";
import Services from "../Services/Services";
import WorksSample from "../WorksSample/WorksSample";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Header></Header>
      <HeaderMain></HeaderMain>
      <ClientBaners></ClientBaners>
      <Services></Services>
      <WorksSample></WorksSample>
    </div>
  );
};

export default Home;
