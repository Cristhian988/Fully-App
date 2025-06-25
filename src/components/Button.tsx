import React from 'react'
import Image from 'next/image'

interface ButtonProps {
    type: 'button' | 'submit';
    size?: 'sm' | 'lg';
    title: string;
    icon?: string;
    variant: 'btn_dark_green';
}

export default function Button({ type, size, title, icon, variant }: ButtonProps) {
    const sizeClass = size === 'sm' ? 'px-4 py-2' : 'px-6 py-3';
  return (
    <button type={type}
    className={`flex items-center justify-center gap-2 rounded-full border ${variant} ${sizeClass}`}
    >
    {icon && <Image src={icon} alt="icon" width={24} height={24} />}
    <label className="font-medium whitespace-nowrap">{title}</label>
    </button>
  )
}
