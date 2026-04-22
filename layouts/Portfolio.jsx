"use client"
import Container from "@/components/common/Container";
import { useEffect, useRef } from "react";

const Portfolio = () => {
  const containerRef = useRef(null); 
useEffect(() => {
  import("mixitup").then((mixitup) => {
    const mixer = mixitup.default(containerRef.current, {
      animation: {
        duration: 400,
      },
      selectors: {
        target: ".mix",
      },
    });
  });
}, []);
  return (
    <section className="mb-30">
      <div className="text-center">
        <div className="flex items-center justify-center gap-x-3">
          {/* icon */}
          <div className="">
            <div className="flex items-center">
              <div className="w-10 h-px bg-secondary"></div>
              <div className="w-1.5 h-1.5 bg-secondary rounded-full -ml-1"></div>
            </div>
          </div>
          <h4 className="text-xl text-secondary font-medium font-vollkorn">
            My Portfolio
          </h4>
        </div>
        <h3 className="text-primary text-[50px] font-medium font-vollkorn leading-15">
          My Work Example
        </h3>
        <div className="text-primary text-base font-vollkorn flex gap-x-6.5 justify-center mt-6">
          <button data-filter="all" className="btnProparty allBtn">
            All
          </button>
          <button data-filter=".branding" className="btnProparty ">
            Branding
          </button>
          <button data-filter=".photography" className="btnProparty ">
            Photography
          </button>
          <button data-filter=".fashion" className="btnProparty ">
            Fashion
          </button>
          <button data-filter=".product" className="btnProparty ">
            Product
          </button>
        </div>
      </div>
      <Container>
        <div className="flex gap-x-7.5 mt-10" ref={containerRef}>
          <div className="group mix branding">
            <div className="w-[570px] h-[450px] bg-[#C4C4C4] group-hover:bg-primary duration-300"></div>
            <div className="py-[22px] px-[18px] bg-primary group-hover:bg-[#C4C4C4] duration-300 ">
              <h4 className="text-white text-2xl font-semibold font-vollkorn group-hover:text-primary">
                Motion Graphics
              </h4>
              <p className="text-white text-base font-jost group-hover:text-primary">
                Website
              </p>
            </div>
          </div>
          <div className="group mix product">
            <div className="w-[570px] h-[450px] bg-[#C4C4C4] group-hover:bg-primary duration-300"></div>
            <div className="py-[22px] px-[18px] bg-primary group-hover:bg-[#C4C4C4] duration-300 ">
              <h4 className="text-white text-2xl font-semibold font-vollkorn group-hover:text-primary">
                Motion Graphics
              </h4>
              <p className="text-white text-base font-jost group-hover:text-primary">
                Website
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-7.5 mt-7.5">
          <div className="group mix photography">
            <div className="w-[570px] h-[450px] bg-[#C4C4C4] group-hover:bg-primary duration-300"></div>
            <div className="py-[22px] px-[18px] bg-primary group-hover:bg-[#C4C4C4] duration-300 ">
              <h4 className="text-white text-2xl font-semibold font-vollkorn group-hover:text-primary">
                Motion Graphics
              </h4>
              <p className="text-white text-base font-jost group-hover:text-primary">
                Website
              </p>
            </div>
          </div>
          <div className="group mix fashion">
            <div className="w-[570px] h-[450px] bg-[#C4C4C4] group-hover:bg-primary duration-300"></div>
            <div className="py-[22px] px-[18px] bg-primary group-hover:bg-[#C4C4C4] duration-300 ">
              <h4 className="text-white text-2xl font-semibold font-vollkorn group-hover:text-primary">
                Motion Graphics
              </h4>
              <p className="text-white text-base font-jost group-hover:text-primary">
                Website
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
