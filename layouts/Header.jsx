import React from "react";
import Container from "../components/common/Container";
import Image from "next/image";
import logo from "../public/logo.png";
import Menulist from "../components/common/Menulist";
import Button from "../components/common/Button";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex flex-col lg:flex-row gap-y-10 items-center justify-center lg:justify-between">
          <div className="py-7.5">
            <Image src={logo} alt="LOgo" height={40} width={122} />
          </div>
          <nav>
            <ul className="flex flex-col lg:flex-row gap-y-10 gap-x-[43px] items-center text-primary text-lg font-jost">
              <Menulist
                className={"hover:text-secondary duration-150"}
                menuTxt={"Home"}
              />
              <Menulist
                className={"hover:text-secondary duration-150"}
                menuTxt={"Pages"}
              />
              <Menulist
                className={"hover:text-secondary duration-150"}
                menuTxt={"Services"}
              />
              <Menulist
                className={"hover:text-secondary duration-150"}
                menuTxt={"Blog"}
              />
              <Menulist
                className={"hover:text-secondary duration-150"}
                menuTxt={"Contact"}
              />
            </ul>
          </nav>
          <Button btnText={"Download CV"} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
