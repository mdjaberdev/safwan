import React from 'react'
import { Jost } from 'next/font/google'
 
const jost = Jost({
   weight: '400',
  subsets: ['latin'],
})


export default function ListItem({className,text}) {
  return (
     <li className={`text-secondary text-lg font-normal  hover:text-primary duration-300 ${jost.className} ${className}`}>{text}</li>
  )
}
