"use client";

import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";
import aboutOne from "../public/aboutOne.png";
import aboutTwo from "../public/aboutTwo.png";
import Button from "@/components/common/Button";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { id:1, percent: 70, rotate: "rotate-[30deg]", title: "Graphic Design" },
    { id:2, percent: 85, rotate: "-rotate-[35deg]", title: "Web Development" },
    { id:3, percent: 60, rotate: "rotate-[65deg]", title: "Brand Design" },
    { id:4, percent: 40, rotate: "rotate-[130deg]", title: "Web Development" },
  ];

  return (
    <section className="mb-30">
      <Container>
        <div className="flex items-center gap-x-7.5">
          <div className="w-142.5">
            <div className="flex gap-7.5">
              <Image src={aboutOne} alt="aboutOne" />
              <div className="flex flex-col gap-7.5">
                <Image src={aboutTwo} alt="aboutTwo" />
                <Image src={aboutTwo} alt="aboutTwo" />
              </div>
            </div>
          </div>
          <div className="w-142.5">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center">
                <div className="w-10 h-px bg-secondary"></div>
                <div className="w-1.5 h-1.5 bg-secondary rounded-full -ml-1"></div>
              </div>
              <h4 className="text-xl text-secondary font-medium font-vollkorn uppercase">
                About Me
              </h4>
            </div>
            <h3 className="text-primary text-[50px] font-medium font-vollkorn leading-14">
              I Enjoy Solving Problems With Scalable Solutions
            </h3>
            <p className="text-primary text-base font-jost leading-6.5">
              Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
              aeci velit, sed quia non numquam eius modi tempora incidunt lao
              magnam aliquam quaerat voluptatem reprehenderit.
            </p>
            <Button className={"mt-12.75"} btnText={"Download CV"} />
          </div>
        </div>

        {/* Skill Circles Section */}
        <div className="mt-20 flex justify-between">
          {skills.map((item, id) => (
            <div
              key={id}
              className="shadow-[0_20px_100px_0_rgba(0,65,61,0.06)] bg-white py-7.5 px-8 text-center flex flex-col items-center"
            >
              <div className="relative h-41.75 w-41.75">
                <svg className={`h-full w-full ${item.rotate}`}>
                  <circle
                    cx="83.5"
                    cy="83.5"
                    r="75"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <motion.circle
                    cx="83.5"
                    cy="83.5"
                    r="75"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={471}
                    initial={{ strokeDashoffset: 471 }}
                    animate={{
                      strokeDashoffset: 471 - 471 * (item.percent / 100),
                    }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className="text-secondary"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex justify-center items-center">
                  <h5 className="text-[34px] text-secondary font-semibold font-vollkorn">
                    <CountUp start={0} end={item.percent} duration={3} />%
                  </h5>
                </div>
              </div>
              <h4 className="text-[26px] text-primary font-semibold font-vollkorn mt-6">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
