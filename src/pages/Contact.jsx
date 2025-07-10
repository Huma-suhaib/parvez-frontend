import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Manufacturing Unit</p>
          <p className=' text-gray-500'>Dulamdaspur, Sarroi, <br /> Dist.Bhadohi-221401, Uttar pradesh, India</p>
          <p className=' text-gray-500'>Tel: (+91) 991-985-7207 <br /> Email: aftab@parvezcarpets.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at PC</p>
          <p className=' text-gray-500'>Send your resume on the above email address.</p>
          <a href="https://job-finder-app-stwz.onrender.com" target="_blank" rel="noopener noreferrer">
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 my-20'>Explore Jobs</button>
          </a>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
