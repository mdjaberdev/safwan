import Blog from "@/components/common/Blog";
import Container from "@/components/common/Container";
import React from "react";

const Letestblog = () => {
  return (
    <section className="mb-30">
      <Container>
        <div className="flex items-center justify-center gap-x-3 ">
          {/* icon */}
          <div className="">
            <div className="flex items-center">
              <div className="w-10 h-px bg-secondary"></div>
              <div className="w-1.5 h-1.5 bg-secondary rounded-full -ml-1"></div>
            </div>
          </div>
          <h4 className="text-xl text-secondary font-medium font-vollkorn">
            Letest Blogs
          </h4>
        </div>
        <h3 className="text-primary text-[50px] font-medium font-vollkorn text-center">
          Blog & Articles
        </h3>
        <div className="flex flex-col lg:flex-row gap-x-7.5">
          <Blog
            blogger={"By David William"}
            blogName={"Quis autem vea eum iure reprehenderit."}
          />
          <Blog
            blogger={"By Will Doie"}
            blogName={"Reprehenderit in vouta velit esse cillum."}
          />
          <Blog
            blogger={"By Adam Smith"}
            blogName={"Soluta nobis ose aligen optio cumue."}
          />
        </div>
      </Container>
    </section>
  );
};

export default Letestblog;
