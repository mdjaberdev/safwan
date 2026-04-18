import Container from '@/components/common/Container'
import Image from 'next/image'
import React from 'react'
import aboutOne from '../public/aboutOne.png'
import aboutTwo from "../public/aboutTwo.png";
import Button from '@/components/common/Button';

const About = () => {
  return (
    <section className="mb-[120px]">
      <Container>
        <div className="flex items-center gap-x-7.5">
          <div className="w-[570px]">
            <div className="flex gap-7.5">
              <Image src={aboutOne} alt="aboutOne" />
              <div className="flex flex-col gap-7.5">
                <Image src={aboutTwo} alt="aboutTwo" />
                <Image src={aboutTwo} alt="aboutTwo" />
              </div>
            </div>
          </div>
          <div className=" w-[570px]">
            <div className="flex items-center gap-x-3 ">
              {/* icon */}
              <div className="">
                <div className="flex items-center">
                  <div className="w-10 h-px bg-secondary"></div>
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full -ml-1"></div>
                </div>
              </div>
              <h4 className="text-xl text-secondary font-medium font-vollkorn uppercase">
                About Me
              </h4>
            </div>
            <h3 className="text-primary text-[50px] font-medium font-vollkorn leading-[56px]">
              I Enjoy Solving Problems With Scalable Solutions
            </h3>
            <p className="text-primary text-base font-jost leading-[26px]">
              Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
              aeci velit, sed quia non numquam eius modi tempora incidunt lao
              magnam aliquam quaerat voluptatem reprehenderit.
            </p>
            <p className="pt-10 text-primary text-base font-jost leading-6.5">
              Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
              reprehenderit non numquam eius.
            </p>
            <Button className={"mt-12.75"} btnText={"Download CV"} />
          </div>
        </div>
        <div className="mt-20 flex justify-between">
          <div className="   text-center">
            <div className="border-5 border-red-500 rounded-full p-10">
              <h5>70%</h5>
            </div>
            <h4>Graphic Design</h4>
          </div>
          <div className="   text-center">
            <div className="border-5 border-red-500 rounded-full p-10">
              <h5>70%</h5>
            </div>
            <h4>Graphic Design</h4>
          </div>
          <div className="   text-center">
            <div className="border-5 border-red-500 rounded-full p-10">
              <h5>70%</h5>
            </div>
            <h4>Graphic Design</h4>
          </div>
          <div className="   text-center">
            <div className="border-5 border-red-500 rounded-full p-10">
              <h5>70%</h5>
            </div>
            <h4>Graphic Design</h4>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About
