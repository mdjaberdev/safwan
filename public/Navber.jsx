import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Image from 'next/image'
import React from 'react'
import Logo from '../public/logo.png'
import ListItem from '@/components/ListItem'
import Link from 'next/link'


export default function Navber() {
  return (
    <nav className='py-5'>
      <Container>
        <Flex className='justify-between items-center'>
          <div>
            <Image src={Logo} alt='LOgo'/>
          </div>
          <div>
            <ul className='flex gap-x-12 '>
              <Link href='/'><ListItem text="Home"/></Link>
              <Link href='/page'><ListItem text="Pages"/></Link>
              <Link href='/service'><ListItem text="Services"/></Link>
              <Link href=''><ListItem text="Product"/></Link>
              <Link href='/sajib/contact'><ListItem text="Contact"/></Link>
              
              
              
              
             



           
              
            </ul>
          </div>
          <div>
            <button className='py-4 px-10 bg-primary'>Download</button>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}
