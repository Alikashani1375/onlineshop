import React from "react";
import { Routes, Route } from "react-router-dom";
import TopMenu from "./TopMenu";
import Hero from "./Hero";
import Brands from "./Brands";
import Categories from "./Categories";
import Whychoose from "./Whychoose";
import Products from "./Products";

const Home = () => {
  return (
    <div className="w-100">
      <Hero />
      <Brands />
      <Categories />
      <Whychoose />
      <Products />
    </div>
  );
};

export default Home;
