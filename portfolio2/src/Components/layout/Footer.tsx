import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-full bg-slate-300 ">
      <div className="h-auto mx-auto  grid grid-flow-col 
      sm:flex-row px-24 justify-between ">

        <div className="flex items-center mb-4 sm:mb-0">
          <Image src="/logo.jpg" alt="footerlogo" height={50} width={50} 
          className="rounded-full" />
          <h1 className="font-serif text-2xl text-black font-bold py-2 px-4">Footer</h1>
        </div>
  
        <div className="flex justify-center">
          <Link href="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank" className=''>
            <Image src="Image/facebook-svg.svg" alt="facebook" height={35} width={60} className="cursor-pointer rounded-full" />
          </Link>
          <Link href="https://www.youtube.com/" target="_blank" className='py-2.5 px-3'>
            <Image src="Image/youtube.svg" alt="youtube" height={35} width={45} className="cursor-pointer rounded-full" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" className='py-3.5'>
            <Image src="/Image/instagram-svg.svg" alt="instagram"  width={35} height={28} 
            className="cursor-pointer rounded-full" />
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Footer;
