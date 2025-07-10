import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p className=' text-green-800'>Parvez Carpets is one of a superior range of rugs and carpets, which set up in 1989
for manufacture of exclusive handmade carpets to a discerning export market.</p><p className=' text-green-800'>With a rich experience, Parvez Carpets has consolidated its position as a leading
player in the rugs and carpets market through dynamic measures. We have dedicated state-of-the
art infrastructure for most of the production processes as well as a wide network of independent
facilities spread across different textile centres.</p><p className=' text-green-800'>Parvez Carpets is dedicated to delivering quality products and adhere to stringent quality control measures through superior quality, innovative designs and satisfying consumers.</p>
              <p></p>
              <b className='text-gray-600'>Our Mision</b>
              <p className='text-green-800'>At Parvez Carpets, our mission is to weave timeless elegance into every space through handcrafted rugs that blend heritage, innovation, and artistry. We strive to deliver exceptional quality, customized designs, and enduring value to homes and businesses worldwide.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b className=' text-gray-600'>Exceptional Craftsmanship:</b>
            <p className=' text-green-800'>Each rug is handmade with precision by skilled artisans, ensuring premium quality and timeless beauty.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b className=' text-gray-600'>Custom Design Solutions:</b>
            <p className=' text-green-800'>We offer personalized rug designs tailored to your space, taste, and requirements — from homes to luxury hotels.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b className=' text-gray-600'>Global Trust & Experience:</b>
            <p className=' text-green-800'>With over 30 years in the industry and presence in international markets, we are a trusted name in fine carpets.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
