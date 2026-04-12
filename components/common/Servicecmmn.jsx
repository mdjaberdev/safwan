import Image from 'next/image';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Servicecmmn = ({img, title, dec }) => {
  return (
    <div className="py-[50px] px-[35px] bg-white shadow-[8px_8px_20px_3px_rgba(57,57,57,0.13)] w-[370px]">
      <Image src={img} alt="Ui/Ux Design" height={68} width={68} />
      <h4 className="text-primary text-2xl font-extrabold font-vollkorn mt-[26px]">
      {title}
      </h4>
      <p className="text-primary text-base font-jost w-[245px] leading-[24px] mt-[15px]">
       {dec}
      </p>
      <div className="mt-7.5 cursor-pointer hover:text-secondary duration-200">
        <FaArrowRightLong />
      </div>
    </div>
  );
}

export default Servicecmmn
