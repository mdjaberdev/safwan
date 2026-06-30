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
    <section className="bg-[#F9F4F1] pt-16 md:pt-20 lg:pt-30.25 pb-12 md:pb-16 lg:pb-17.5 mb-16 lg:mb-30">
      <div className="text-center px-4">
        <div className="flex items-center justify-center gap-x-3">
          <div className="flex items-center">
            <div className="w-10 h-px bg-secondary"></div>
            <div className="w-1.5 h-1.5 bg-secondary rounded-full -ml-1"></div>
          </div>

          <h4 className="text-lg md:text-xl text-secondary font-medium font-vollkorn">
            Client Testimonial
          </h4>
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-[50px] font-medium font-vollkorn text-primary">
          Feedback From Client
        </h3>
      </div>

      <Container className="mt-8 lg:mt-10 px-4 lg:px-0">
        <Swiper
          className="pb-12 lg:pb-20"
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-7.5 pb-14 lg:pb-20">
              {/* Card 1 */}
              <div className="w-full lg:w-142.5">
                <div className="w-full lg:w-142.5 h-1.75 bg-secondary"></div>

                <div className="p-5 lg:p-7.5 bg-white">
                  <p className="text-sm md:text-base text-primary font-jost leading-6.5 w-full lg:w-119">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and this typesetting industry.
                  </p>
                </div>

                <div className="flex items-center gap-4 px-5 md:px-8 lg:px-15 py-4.5">
                  <Image
                    src={client}
                    alt=""
                    className="w-16 h-16 lg:w-auto lg:h-auto"
                  />

                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold font-vollkorn text-primary">
                      Michale Doie
                    </h4>

                    <p className="text-sm text-primary font-jost">
                      Product Designer
                    </p>

                    <Image src={start} alt="" className="mt-2 w-20 lg:w-auto" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full lg:w-142.5">
                <div className="w-full lg:w-142.5 h-1.75 bg-secondary"></div>

                <div className="p-5 lg:p-7.5 bg-white">
                  <p className="text-sm md:text-base text-primary font-jost leading-6.5 w-full lg:w-119">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and this typesetting industry.
                  </p>
                </div>

                <div className="flex items-center gap-4 px-5 md:px-8 lg:px-15 py-4.5">
                  <Image
                    src={client}
                    alt=""
                    className="w-16 h-16 lg:w-auto lg:h-auto"
                  />

                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold font-vollkorn text-primary">
                      Adam Smith
                    </h4>

                    <p className="text-sm text-primary font-jost">Designer</p>

                    <Image src={start} alt="" className="mt-2 w-20 lg:w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-7.5 pb-14 lg:pb-20">
              {/* Card 1 */}
              <div className="w-full lg:w-142.5">
                <div className="w-full lg:w-142.5 h-1.75 bg-secondary"></div>

                <div className="p-5 lg:p-7.5 bg-white">
                  <p className="text-sm md:text-base text-primary font-jost leading-6.5 w-full lg:w-119">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and this typesetting industry.
                  </p>
                </div>

                <div className="flex items-center gap-4 px-5 md:px-8 lg:px-15 py-4.5">
                  <Image
                    src={client}
                    alt=""
                    className="w-16 h-16 lg:w-auto lg:h-auto"
                  />

                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold font-vollkorn text-primary">
                      Michale Doie
                    </h4>

                    <p className="text-sm text-primary font-jost">
                      Product Designer
                    </p>

                    <Image src={start} alt="" className="mt-2 w-20 lg:w-auto" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full lg:w-142.5">
                <div className="w-full lg:w-142.5 h-1.75 bg-secondary"></div>

                <div className="p-5 lg:p-7.5 bg-white">
                  <p className="text-sm md:text-base text-primary font-jost leading-6.5 w-full lg:w-119">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and this typesetting industry.
                  </p>
                </div>

                <div className="flex items-center gap-4 px-5 md:px-8 lg:px-15 py-4.5">
                  <Image
                    src={client}
                    alt=""
                    className="w-16 h-16 lg:w-auto lg:h-auto"
                  />

                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold font-vollkorn text-primary">
                      Adam Smith
                    </h4>

                    <p className="text-sm text-primary font-jost">Designer</p>

                    <Image src={start} alt="" className="mt-2 w-20 lg:w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-7.5">
              {/* Card 1 */}
              <div className="w-full lg:w-[570px]">
                <div className="w-full lg:w-[570px] h-[7px] bg-secondary"></div>

                <div className="p-5 lg:p-[30px] bg-white">
                  <p className="text-sm md:text-base text-primary font-jost leading-[26px] w-full lg:w-[476px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and this typesetting industry.
                  </p>
                </div>

                <div className="flex items-center gap-4 px-5 md:px-8 lg:px-[60px] py-[18px]">
                  <Image
                    src={client}
                    alt=""
                    className="w-16 h-16 lg:w-auto lg:h-auto"
                  />

                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold font-vollkorn text-primary">
                      Michale Doie
                    </h4>

                    <p className="text-sm text-primary font-jost">
                      Product Designer
                    </p>

                    <Image src={start} alt="" className="mt-2 w-20 lg:w-auto" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full lg:w-[570px]">
                <div className="w-full lg:w-[570px] h-[7px] bg-secondary"></div>

                <div className="p-5 lg:p-[30px] bg-white">
                  <p className="text-sm md:text-base text-primary font-jost leading-[26px] w-full lg:w-[476px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and this typesetting industry.
                  </p>
                </div>

                <div className="flex items-center gap-4 px-5 md:px-8 lg:px-[60px] py-[18px]">
                  <Image
                    src={client}
                    alt=""
                    className="w-16 h-16 lg:w-auto lg:h-auto"
                  />

                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold font-vollkorn text-primary">
                      Adam Smith
                    </h4>

                    <p className="text-sm text-primary font-jost">Designer</p>

                    <Image src={start} alt="" className="mt-2 w-20 lg:w-auto" />
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
