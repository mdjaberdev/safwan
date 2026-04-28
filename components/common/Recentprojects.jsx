import Image from 'next/image'
import React from 'react'
import recent from '../../public/recentProjects.png'
import { FaArrowRight } from "react-icons/fa6";

const Recentprojects = ({proName, title, dec}) => {
  return (
    <div className="shadow-[8px_8px_20px_3px_rgba(147,147,147,0.13)] bg-white">
      <Image src={recent} alt=''/>
      <div className="py-7.5 pl-7.5">
        <h5 className="text-secondary text-base font-medium font-vollkorn">
        {proName}
        </h5>
        <h4 className="text-primary text-2xl font-medium font-vollkorn w-[304px] leading-7.5">
         {title}
        </h4>
        <p className="text-primary text-base font-jost w-[320px] leading-6 mt-2.5">
         {dec}
        </p>
        <div className="inline-flex items-center gap-x-1.5 mt-6 text-primary text-lg font-medium font-jost cursor-pointer hover:text-secondary duration-150t">
          <button className='cursor-pointer'>View Case Studies </button>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Recentprojects
