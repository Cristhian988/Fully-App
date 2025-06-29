import React from 'react'
import Button from './Button'
import Image from 'next/image'
export default function GetApp() {
  return (
    <div className='flex items-center justify-center w-full flex-col pb-24'>
      <div className="max-w-[1440px] mx-auto relative flex w-full flex-col justify-between gap-32 overflow-hidden bg-pattern bg-center bg-cover bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-4xl">
        <div className="flex w-full flex-1 flex-col items-start justify-center gap-12 z-20">
          <h2 className="text-4xl font-bold leading-[120%] xl:text-6xl xl:max-w-[320px]">Get the app</h2>
          <p className='text-base font-medium text-gray-300'>Available on the App Store and Google Play</p>
          <div className="flex flex-col w-full gap-5 whitespace-nowrap xl:flex-row">
        <Button type="button" title="Download App" icon="/apple.svg" variant="btn_white" full/>
        <Button type="button" title="Play Store" icon="/android.svg" variant="btn_dark_green_outline" full/>
        </div>
        </div>
        
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </div>
  )
}
