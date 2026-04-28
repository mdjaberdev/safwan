import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Servicecmmn = ({ img, title, dec }) => {
  return (
    <div className="py-12.5 px-8.75 bg-white shadow-[8px_8px_20px_3px_rgba(57,57,57,0.13)] w-92.5">
      <Image src={img} alt="Ui/Ux Design" height={68} width={68} />
      <h4 className="text-primary text-2xl font-extrabold font-vollkorn mt-6.5">
        {title}
      </h4>
      <p className="text-primary text-base font-jost w-61.25 leading-6 mt-3.75">
        {dec}
      </p>
      <div className="mt-7.5 cursor-pointer hover:text-secondary duration-200 inline-flex">
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default Servicecmmn;
