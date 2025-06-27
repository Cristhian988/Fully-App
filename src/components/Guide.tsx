import React from "react";
import Image from "next/image";

export default function Guide() {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="px-6 lg:px-20 xl:px-0 max-w-[1440px] mx-auto w-full pb-24">
        <Image src="/camp.svg" alt="guide" width={50} height={50} />
        <p className="uppercase text-xl font-medium -mt-1 mb-3 text-green-600">We are here for you</p>
        <div className="flex flex-wrap justify-between gap-6 lg:gap-12">
          <h2 className="text-4xl font-bold leading-[120%] xl:text-6xl xl:max-w-[390px]">Guide You To Easy Path</h2>
          <p className="text-base font-medium text-gray-500 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center max-w-[1440px] mx-auto w-full relative">
        <Image src="/boat.png" alt="boat" width={1440} height={580} className="w-full object-cover object-center xl:rounded-4xl" />
        
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image src="/meter.svg" alt="meter" width={28} height={28} className="w-auto h-full" />
          <div className="flex items-center justify-between flex-col">
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between w-full">
                <p className="font-medium text-[#A2A2A2]">Destination</p>
                <p className="font-bold text-[#30AF5B]">48 min</p>
              </div>
              <p className="text-lg font-bold mt-2">Aguas Calientes</p>
            </div>
            
            <div className="flex w-full flex-col">
                <p className="font-medium text-[#A2A2A2]">Start track</p>
                <p className="text-lg font-bold mt-2 whitespace-nowrap">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
