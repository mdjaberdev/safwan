import React from "react";
import Header from "../../layouts/Header";
import Banner from "../../layouts/Banner";
import Service from "../../layouts/Service";
import About from "@/layouts/About";
import Projects from "@/layouts/Projects";
import Footer from "@/layouts/Footer";
import Portfolio from "@/layouts/Portfolio";
import Testmonial from "@/layouts/Testmonial";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Service/>
      <About/>
      <Projects/>
      <Portfolio/>
      <Testmonial/>
      <Footer/>
    </>
  );
};

export default Home;
