"use client";
import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";
import client from "../public/client.png";
import start from "../public/Star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testmonial = () => {
  return (
    <section className="bg-[#F9F4F1] pt-30.25 pb-17.5 mb-30">
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
            Client Testimonial
          </h4>
        </div>
        <h3 className="text-primary text-[50px] font-medium font-vollkorn">
          Feedback From Client
        </h3>
      </div>
      <Container className={"mt-10"}>
        <Swiper
          className=" mb-20"
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex gap-x-7.5 pb-20">
              <div className="w-142.5">
                <div className="w-142.5 h-1.75 bg-secondary"></div>
                <div className="p-7.5 bg-white">
                  <p className="text-primary text-base font-jost w-119 leading-6.5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and this typesetting industry.
                  </p>
                </div>
                <div className="flex gap-x-7.5 items-center px-15 py-4.5">
                  <Image src={client} alt="" />
                  <div className="">
                    <h4 className="text-primary text-xl font-semibold font-vollkorn">
                      Michale Doie
                    </h4>
                    <p className="text-primary text-sm font-jost">
                      Product Designer
                    </p>
                    <Image src={start} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-142.5">
                <div className="w-142.5 h-1.75 bg-secondary"></div>
                <div className="p-7.5 bg-white">
                  <p className="text-primary text-base font-jost w-119 leading-6.5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and this typesetting industry.
                  </p>
                </div>
                <div className="flex gap-x-7.5 items-center px-15 py-4.5">
                  <Image src={client} alt="" />
                  <div className="">
                    <h4 className="text-primary text-xl font-semibold font-vollkorn">
                      Adam Smith
                    </h4>
                    <p className="text-primary text-sm font-jost">Designer</p>
                    <Image src={start} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-x-7.5">
              <div className="w-142.5">
                <div className="w-142.5 h-1.75 bg-secondary"></div>
                <div className="p-7.5 bg-white">
                  <p className="text-primary text-base font-jost w-119 leading-6.5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and this typesetting industry.
                  </p>
                </div>
                <div className="flex gap-x-7.5 items-center px-15 py-4.5">
                  <Image src={client} alt="" />
                  <div className="">
                    <h4 className="text-primary text-xl font-semibold font-vollkorn">
                      Michale Doie
                    </h4>
                    <p className="text-primary text-sm font-jost">
                      Product Designer
                    </p>
                    <Image src={start} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-142.5">
                <div className="w-142.5 h-1.75 bg-secondary"></div>
                <div className="p-7.5 bg-white">
                  <p className="text-primary text-base font-jost w-119 leading-6.5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and this typesetting industry.
                  </p>
                </div>
                <div className="flex gap-x-7.5 items-center px-15 py-4.5">
                  <Image src={client} alt="" />
                  <div className="">
                    <h4 className="text-primary text-xl font-semibold font-vollkorn">
                      Adam Smith
                    </h4>
                    <p className="text-primary text-sm font-jost">Designer</p>
                    <Image src={start} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-x-7.5">
              <div className="w-[570px]">
                <div className="w-[570px] h-[7px] bg-secondary"></div>
                <div className="p-[30px] bg-white">
                  <p className="text-primary text-base font-jost w-[476px] leading-[26px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and this typesetting industry.
                  </p>
                </div>
                <div className="flex gap-x-7.5 items-center px-[60px] py-[18px]">
                  <Image src={client} alt="" />
                  <div className="">
                    <h4 className="text-primary text-xl font-semibold font-vollkorn">
                      Michale Doie
                    </h4>
                    <p className="text-primary text-sm font-jost">
                      Product Designer
                    </p>
                    <Image src={start} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-[570px]">
                <div className="w-[570px] h-[7px] bg-secondary"></div>
                <div className="p-[30px] bg-white">
                  <p className="text-primary text-base font-jost w-[476px] leading-[26px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and this typesetting industry.
                  </p>
                </div>
                <div className="flex gap-x-7.5 items-center px-[60px] py-[18px]">
                  <Image src={client} alt="" />
                  <div className="">
                    <h4 className="text-primary text-xl font-semibold font-vollkorn">
                      Adam Smith
                    </h4>
                    <p className="text-primary text-sm font-jost">Designer</p>
                    <Image src={start} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Testmonial;
