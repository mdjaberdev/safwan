import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";
import getIn from '../public/geiIn.png'
import Button from "@/components/common/Button";

const Getintuch = () => {
  return (
    <section className="mb-[120px]">
      <Container>
        <div className="flex flex-column lg:flex-row items-center gap-x-7.5">
          <div className="">
            <Image src={getIn} alt="" />
          </div>
          <div className="">
            <div className="flex items-center gap-x-3">
              {/* icon */}
              <div className="">
                <div className="flex items-center">
                  <div className="w-10 h-px bg-secondary"></div>
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full -ml-1"></div>
                </div>
              </div>
              <h4 className="text-xl text-secondary font-medium font-vollkorn">
                Get In Touch
              </h4>
            </div>
            <h3 className="text-primary text-[50px] font-medium font-vollkorn">
              Feel Free to Contact
            </h3>
            <div className="flex gap-x-[70px] mt-[40px]">
              <div className="">
                <label className="text-[#00413D]/70 text-lg font-jost">
                  Enter Name
                </label>
                <div className="">
                  <input
                    className="outline-none border-b w-[300px] border-[#00413D]/10"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="">
                <label className="text-[#00413D]/70 text-lg font-jost">
                  Enter Email
                </label>
                <div className="">
                  <input
                    className="outline-none border-b w-[300px] border-[#00413D]/10"
                    type="email"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-x-[70px] my-[55px]">
              <div className="">
                <label className="text-[#00413D]/70 text-lg font-jost">
                  Phone
                </label>
                <div className="">
                  <input
                    className="outline-none border-b w-[300px] border-[#00413D]/10"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="">
                <label className="text-[#00413D]/70 text-lg font-jost">
                  Subject
                </label>
                <div className="">
                  <input
                    className="outline-none border-b w-[300px] border-[#00413D]/10"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="mb-[50px]">
              <label className="text-[#00413D]/70 text-lg font-jost">
                Subject
              </label>
              <div className="">
                <input
                  className="outline-none border-b w-full border-[#00413D]/10"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <Button btnText={"Contact Us"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Getintuch;
