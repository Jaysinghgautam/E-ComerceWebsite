 import React from 'react'
import assets from '../assets/assets'
 
function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      
      {/* Hero Left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          
          {/* Bestseller */}
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          
          {/* Heading */}
          <h1 className=" prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
          
          {/* Shop Now */}
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right side */}
      <div className="w-full sm:w-1/2">
        <img className="w-full" src="https://res.cloudinary.com/drc0gwhz9/image/upload/v1788608106/pexels-karola-g-6954962_tg3agt.jpg" alt="Hero" />
      </div>
    </div>
  )
}
 
export default Hero
