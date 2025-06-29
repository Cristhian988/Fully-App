import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export default function Footer() {
  return (
    <footer className='flex items-center justify-center mb-6'>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-0 w-full flex flex-col gap-14">
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <Link href="/" className='mb-10'>
              <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29} />
            </Link>
            <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1' >
              {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title} key={columns.title}>
                  <ul className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
                    {columns.links.map((link) => (
                      <Link href={link} key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
              
              <div className='flex flex-col gap-5'>
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link href={link.label} key={link.value} className='flex gap-4 md:flex-col lg:flex-row'>
                      <p className='whitespace-nowrap'>{link.label}:</p>
                      <p className='text-sm font-medium whitespace-nowrap'>{link.value}</p>
                    </Link>
                  ))}
                </FooterColumn>
              </div>
              
              <div className="flex flex-col gap-5">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="text-sm font-medium flex gap-5 text-gray-500">
                    {SOCIALS.links.map((link) => (
                      <Link href={link} key={link}>
                        <Image src={link} alt={link} width={24} height={24} />
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>
        <div className="border-t border-gray-200 pt-5">
          <p className='text-center text-sm font-medium text-gray-500 w-full'>© {new Date().getFullYear()} Hilink. All rights reserved.</p>
        </div>
        </div>
    </footer>
  )
}

export const FooterColumn = ({title, children}: FooterColumnProps) => {
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='font-medium text-gray-700'>{title}</h4>
      {children}
    </div>
  )
}
