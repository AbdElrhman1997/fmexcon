import React from "react";
import Services from "../Services/Services";
import Blog from "../Blog/Blog";
import Awards from "../Awards/Awards";
import Pricing from "../Pricing/Pricing";
import Featured from "../Featured/Featured";
import Locations from "../Locations/Locations";
import test from "../../Images/home.png";
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
        >
          {/* <img src={test} className="home-image" alt="home-image" /> */}
          {/* <div
            className=" rounded-md p-2 w-32 btn lg:block md:block hidden"
            style={{ backgroundhColor: "#44ADD2" }}
            onClick={() => {}}
          >
            <p className=" text-white font-bold">العربية</p>
          </div>
          <div
            className=" rounded-md p-2 w-32 btn lg:block md:block hidden"
            style={{ backgroundColor: "#44ADD2" }}
            onClick={() => {}}
          >
            <p className=" text-white font-bold">العربية</p>
          </div> */}
        </section>
        <Services />
        <Blog />
        <Awards />
        <Locations />
        <Featured />
        <Pricing />
      </section>
    </>
  );
};

export default Home;
