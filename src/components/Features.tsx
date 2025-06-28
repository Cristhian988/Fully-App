import React from 'react'
import Image from 'next/image'
import { FEATURES } from '@/constants'

interface FeaturesItemProps {
  title: string;
  description: string;
  icon: string;
}

export default function Features() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-feature bg-center bg-no-repeat py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-0 w-full relative flex justify-end">
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image src="/phone.png" alt="phone" width={440} height={1000} className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex 3xl:left-20" />
        </div>
        <div className='flex flex-col w-full lg:w-[60%] z-20'>
          <div className='relative'>
            <Image src="/camp.svg" alt="camp" width={50} height={50} className='absolute -left-1.5 -top-8 w-10 lg:w-12' />
            <h2 className='text-4xl font-bold leading-[120%] xl:text-6xl xl:max-w-[390px]'>Our Features</h2>
          </div>
          <ul className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 lg:mt-20 lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeaturesItem key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const FeaturesItem = ({ title, description, icon }: FeaturesItemProps) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className="rounded-full p-4 lg:p-7 bg-green-600">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="text-2xl font-bold leading-[120%] xl:text-4xl mt-5 capitalize">{title}</h2>
      <p className="text-base font-medium text-gray-500 lg:text-lg mt-5 bg-gray-100 lg:mt-7 lg:bg-none">{description}</p>
    </li>
  )
}
