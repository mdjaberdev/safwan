import React from "react";

const Portfolio = () => {
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
          <button className="hover:after:bg-secondary after:w-0 hover:after:w-full after:h-px relative after:absolute after:bottom-0 after:left-0 after:duration-300 after:transition-all">
            All
          </button>
          <button className="hover:after:bg-secondary after:w-0 hover:after:w-full after:h-px relative after:absolute after:bottom-0 after:left-0 after:duration-300 after:transition-all">
            Branding
          </button>
          <button className="hover:after:bg-secondary after:w-0 hover:after:w-full after:h-px relative after:absolute after:bottom-0 after:left-0 after:duration-300 after:transition-all">
            Photography
          </button>
          <button className="hover:after:bg-secondary after:w-0 hover:after:w-full after:h-px relative after:absolute after:bottom-0 after:left-0 after:duration-300 after:transition-all">
            Fashion
          </button>
          <button className="hover:after:bg-secondary after:w-0 hover:after:w-full after:h-px relative after:absolute after:bottom-0 after:left-0 after:duration-300 after:transition-all">
            Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
