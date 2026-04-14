"use client";
import Container from "@/components/common/Container";
import Recentprojects from "@/components/common/Recentprojects";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button from "@/components/common/Button";

const Projects = () => {
     const prevRef = useRef(null);
     const nextRef = useRef(null);
  return (
    <section className="mb-[120px]">
      <Container>
        <div className="">
          <div className="">
            <div className="flex items-center gap-x-3">
              {/* icon */}
              <div className="">
                <div className="flex items-center">
                  <div className="w-10 h-px bg-secondary"></div>
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full -ml-1"></div>
                </div>
              </div>
              <h4 className="text-xl text-secondary font-medium font-vollkorn uppercase">
                Recent Projects
              </h4>
            </div>
            <div className="flex justify-between items-start">
              <div className="">
                {" "}
                <h3 className="text-primary text-[50px] font-medium font-vollkorn leading-[60px]">
                  My Recent Projects
                </h3>
              </div>
              {/* Custom Buttons */}
              <div className="">
                <div className="flex gap-x-5">
                  <button
                    ref={prevRef}
                    className="p-3  hover:bg-secondary  hover:text-white border border-[#00413D]/10"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    ref={nextRef}
                    className="p-3  hover:bg-secondary  hover:text-white border border-[#00413D]/10"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 ">
            <Swiper
              modules={[Navigation]}
              spaceBetween={1}
              slidesPerView={3}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              <SwiperSlide>
                {" "}
                <Recentprojects
                  proName={"Analytics, UI-Ux"}
                  title={"Branding & Digital Video Campaign For George’s Cafe"}
                  dec={
                    "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
                  }
                />
              </SwiperSlide>

              <SwiperSlide>
                {" "}
                <Recentprojects
                  proName={"Analytics, UI-Ux"}
                  title={"Branding & Digital Video Campaign For George’s Cafe"}
                  dec={
                    "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
                  }
                />
              </SwiperSlide>

              <SwiperSlide>
                {" "}
                <Recentprojects
                  proName={"Analytics, UI-Ux"}
                  title={"Branding & Digital Video Campaign For George’s Cafe"}
                  dec={
                    "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Recentprojects
                  proName={"Analytics, UI-Ux"}
                  title={"Branding & Digital Video Campaign For George’s Cafe"}
                  dec={
                    "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="text-center mt-[60px]">
          <Button btnText={"Explore More"} />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
