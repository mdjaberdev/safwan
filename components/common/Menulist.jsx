import Link from 'next/link';
import React from 'react'

const Menulist = ({menuTxt, className}) => {
  return (
    <nav>
      <li className={`${className}`}>
        <Link href={"/"}>{menuTxt}</Link>
      </li>
    </nav>
  );
}

export default Menulist
