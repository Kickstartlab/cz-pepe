import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';



export default function Footer() {
  return (
    <div className="font-inter py-5">
      <footer data-aos="zoom-in" className='container mx-auto lg:px-20 font-inter px-5'>

        <div className="flex flex-col items-center justify-center gap-y-8 mx-auto">

          <h2 className='md:text-4xl text-2xl font-inter font-bold text-yellow-100'>
            Don't miss out, Stay updated
          </h2>

          <div className="py-1 pl-6 pr-1 lg:w-6/12 w-full lg:bg-yellow-100 lg:space-y-0 space-y-5 lg:flex items-center justify-between rounded-full">
            <input type="email" placeholder="Enter your email" id="email" required="" className="lg:p-0 p-5 lg:rounded-none rounded-full bg-yellow-100 focus:ring-0 focus:outline-none lg:w-7/12 w-full placeholder-black-50" />

            <button className='lg:px-12 px-5 lg:py-3 py-2 bg-gradient rounded-full text-white-100 uppercase font-semibold'>
              Subcribe
            </button>
          </div>

          <div className='text-center lg:w-1/2 flex mx-auto'>
            <p>
              Join us today and start earning 1% BUSD rewards with our Text to NFT AI Bot. Together, let's embrace the power of rewards and build a thriving community around our shared passion for digital art and innovation.
            </p>
          </div>

          <div className='flex justify-center gap-6 items-center lg:mt-0 mt-5'>

            <a href='/'>
              <img src={twitter} alt="Twitter" className='' />
            </a>

            <a href='https://t.me/Changpepezhaoge'>
              <img src={telegram} alt="Facebook" className='' />
            </a>

          </div>

        </div>

        <p className='pt-8 pb-6 text-center'>© {new Date().getFullYear()} All rights reserved by CZ PEPE.</p>
      </footer>
    </div>

  )
}
