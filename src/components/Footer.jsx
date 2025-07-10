import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-green-800'>
            A leading manufacturer and exporter of a superior range of rugs and carpets, which set up in 1989 for manufacture of exclusive products hand made carpets to a discerning export market.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-green-800'>
  <Link to='/'><li className='cursor-pointer hover:text-green-800'>Home</li></Link>
  <Link to='/about'><li className='cursor-pointer hover:text-green-800'>About Us</li></Link>
  <Link to='/collection'><li className='cursor-pointer hover:text-green-800'>Shop More</li></Link>
</ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-green-800'>
                <li>+91 993-648-4049</li>
                <li>aftab@parvezcarpets.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center text-green-800'>Copyright 2024@parvezcarpets.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
