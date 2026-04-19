import Container from '@/components/common/Container'
import Image from 'next/image'
import React from 'react'
import logo from '../public/footerLogo.png'
import Menulist from '@/components/common/Menulist'
import { TbBrandShopee } from "react-icons/tb";
import { FaInstagram, FaBehance } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-primary pt-[80px] pb-[30px]">
      <Container className={""}>
        <div className="border-b border-white pb-20">
          <div className="">
            <Image src={logo} alt="" className="mx-auto" />
          </div>

          <ul className="flex flex-col lg:flex-row gap-y-10 gap-x-[43px]  items-center text-white text-lg font-jost justify-center mt-[60px]">
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
          <div className="flex gap-x-5 justify-center mt-[50px]">
            <div className="p-2 bg-secondary text-white rounded-full cursor-pointer">
              <TbBrandShopee />
            </div>
            <div className="p-2 bg-secondary text-white rounded-full cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-2 bg-secondary text-white rounded-full cursor-pointer">
              <FaBehance />
            </div>
          </div>
        </div>
        <p className='text-white text-[12px] font-jost text-center mt-[20px]'>Copyright © 2023 Design By Estiak. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer
