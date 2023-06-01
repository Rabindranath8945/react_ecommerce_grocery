import React from "react";
import Banner from "../components/Banner";
import Offer from "../components/Offer";
import Features from "../components/Features";
import ListProduct from "../components/ListProduct";

const Home = () => {
  return (
    <>
      <section className="home">
        <Banner />
        <Features />
        <Offer />
        <ListProduct />
      </section>
    </>
  );
};

export default Home;
