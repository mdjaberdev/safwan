import React from "react";
import Header from "../../layouts/Header";
import Banner from "../../layouts/Banner";
import Service from "../../layouts/Service";
import About from "@/layouts/About";
import Projects from "@/layouts/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Service/>
      <About/>
      <Projects/>
    </>
  );
};

export default Home;
