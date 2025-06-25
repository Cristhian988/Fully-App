import React from 'react'
import Image from 'next/image'
import Button from './Button'

export default function Hero() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"/>
      
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute -left-1.5 -top-8 w-10 lg:w-12" />
        <h1 className='text-5xl font-bold leading-[120%] lg:text-7xl'>Find the best climbing spot</h1>
        <p className='text-lg text-gray-500 mt-6 xl:max-w-lg'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
        
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(0).map((_, index) => (
              <Image key={index} src="/star.svg" alt="star" width={24} height={24} />
            ))}
          </div>
          
          <p className="text-base font-medium text-gray-500 lg:text-lg">198k
            <span className="text-green-600 font-medium ml-1">Excellent Reviews</span>
          </p>
        </div>
        
        <div className="flex flex-col w-full gap-5 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green"/>
          <Button type="button" title="How we work?"
          icon='/play.svg' variant="btn_white_text"/>
        </div>
      </div>
      
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-64 flex flex-col gap-6 rounded-3xl bg-[#292C27] px-7 py-8">
          
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#A2A2A2]">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="font-semibold text-white">New York, USA</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-[#A2A2A2]">Distance</p>
              <p className="font-semibold text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-[#A2A2A2]">Elevation</p>
              <p className="font-semibold text-white">2.040 ft</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
