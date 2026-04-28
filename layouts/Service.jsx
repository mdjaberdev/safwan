import Container from "@/components/common/Container";
import Servicecmmn from "@/components/common/Servicecmmn";
import React from "react";
import sOne from "../public/serviceOne.png";
import sTwo from "../public/serviceTwo.png";
import sThree from "../public/serviceThree.png";

const Service = () => {
  return (
    <section className="mt-55 mb-30">
      <Container>
        <div className="text-center">
          <div className="flex items-center gap-x-3 justify-center">
            {/* icon */}
            <div className="">
              <div className="flex items-center">
                <div className="w-10 h-px bg-secondary"></div>
                <div className="w-1.5 h-1.5 bg-secondary rounded-full -ml-1"></div>
              </div>
            </div>
            <h4 className="text-xl text-secondary font-medium font-vollkorn uppercase">
              MY SERVICES
            </h4>
          </div>
          <h3 className="text-[50px] text-primary font-medium font-vollkorn leading-15 lg:px-75">
            Provide Wide Range of Digital Services
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-5 justify-between mt-10">
          <Servicecmmn
            img={sOne}
            title={"Ui/Ux Design"}
            dec={
              "Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."
            }
          />
          {/* Two  */}
          <Servicecmmn
            img={sTwo}
            title={"Mobile App Design"}
            dec={
              "Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."
            }
          />
          {/* Three  */}
          <Servicecmmn
            img={sThree}
            title={"Web Design"}
            dec={
              "Dolor repellendus tempo ribus aue quibusdam offi ciis debitis rerum na aibus minima veniam."
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Service;
