import React from "react";
import Header from "../../layouts/Header";
import Banner from "../../layouts/Banner";
import Service from "../../layouts/Service";
import About from "@/layouts/About";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service/>
      <About/>
    </div>
  );
};

export default Home;
