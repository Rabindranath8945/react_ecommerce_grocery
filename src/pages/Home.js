import React from "react";
import Banner from "../components/Banner";
import Offer from "../components/Offer";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <section className="home">
        <Banner />
        <Features />
        <Offer />
        <Offer />
        <Banner />
      </section>
    </>
  );
};

export default Home;
