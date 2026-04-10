import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import React from 'react'

const Banner = () => {
  return (
    <section>
      <div className="bg-[url('../public/banner.png')] bg-center bg-cover bg-no-repeat py-20 lg:py-52.75 mt-10 lg:mt-0 text-center lg:text-start">
        <Container>
          <h2 className="text-6xl lg:text-[100px] text-white font-bold font-vollkorn leading-tight">
            Hello!
          </h2>
          <h1 className="text-6xl lg:text-[100px] text-white font-bold font-vollkorn leading-tight">
            I’m Zarror Nibors
          </h1>
          <p className="text-xl text-white/50  font-jost lg:w-[690px] leading-7.5 mt-[14px] mb-[50px]">
            I’am freelance <span className="text-white">UI/UX Desogner</span>{" "}
            based in Indonesia who loves to craft attractive design experiences
            for the web.
          </p>
          <Button btnText={"Contact Me"} />
        </Container>
      </div>
    </section>
  );
}

export default Banner
