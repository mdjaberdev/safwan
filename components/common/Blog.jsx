import Image from "next/image";
import React from "react";
import blog from "../../public/blog.png";
import { FaArrowRight } from "react-icons/fa6";

const Blog = ({ blogger, blogName }) => {
  return (
    <div>
      <Image src={blog} alt="" className="w-full" />
      <div className="py-5 px-7.5 shadow-[8px_8px_20px_3px_rgba(147,147,147,0.13)] bg-white">
        <div className="flex justify-between">
          <h5 className="text-secondary text-sm font-jost">{blogger}</h5>
          <h6 className="text-primary text-sm font-jost">Mar 8, 2022</h6>
        </div>
        <h4 className="text-primary text-2xl font-medium font-vollkorn w-70.25 leading-7.5 py-2.75">
          {blogName}
        </h4>
        <p className="text-primary text-base font-jost w-81.25 leading-6">
          Dolor repellendus temporibus autem rerum quibusdam officiis debitis
          nece.
        </p>
        <button className="text-primary text-lg font-medium font-jost flex items-center gap-x-1 mt-6 hover:text-secondary duration-200 cursor-pointer">
          Read More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Blog;
