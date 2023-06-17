import React from "react";
import Banner from "../components/Banner";
import Offer from "../components/Offer";
import Features from "../components/Features";
import ListProductFirst from "../components/ListProductFirst";
import ListProductSecond from "../components/ListProductSecond";
import ListProductThird from "../components/ListProductThird";
import ListProductForth from "../components/ListProductForth";

const Home = () => {
  return (
    <>
      <section className="home">
        <Banner />
        <Features />
        <Offer />
        <ListProductFirst
          sectionHeading="Candies & Chocolates"
          pageLink="/products"
        />
        <ListProductSecond
          sectionHeading="Cakes, Brownies & Cupcakes"
          pageLink="/products"
        />
        <ListProductThird
          sectionHeading="Cookies, Crackers, Biscuits & Rolls"
          pageLink="/products"
        />
        <ListProductForth
          sectionHeading="Patties, Burger & Pizzas"
          pageLink="/products"
        />
      </section>
    </>
  );
};

export default Home;
