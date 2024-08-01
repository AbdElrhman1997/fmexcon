import React from "react";
import Services from "../WhatIsEvent/WhatIsEvent";
import Blog from "../DigitalTransformation/DigitalTransformation";
import CoOperation from "../CoOperation/CoOperation";
import WhyThisEvent from "../WhyThisEvent/WhyThisEvent";
import SponserMinister from "../SponserMinister/SponserMinister";
import Creativity from "../Creativity/Creativity";
import Sponser from "../Sponser/Sponser";
import "./Home.css";

const Home = () => {
  return (
    <>
      <head>
        <title>الرئيسية</title>
      </head>
      <section className="home">
        <section
          className="homeSec relative flex flex-col justify-center"
          data-aos="fade-top"
          data-aos-delay="700"
        ></section>
        <SponserMinister />
        <Services />
        <Blog />
        <CoOperation />
        <Creativity />
        <WhyThisEvent />
        <Sponser />
      </section>
    </>
  );
};

export default Home;
