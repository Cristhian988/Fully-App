import React from 'react'
import Image from 'next/image'

interface ButtonProps {
    type: 'button' | 'submit';
    size?: 'sm' | 'lg';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

export default function Button({ type, size, title, icon, variant, full }: ButtonProps) {
    const sizeClass = size === 'sm' ? 'px-6 py-2' : 'px-7 py-2.5';
  return (
    <button type={type}
    className={`flex items-center justify-center gap-2 rounded-full border ${variant} ${full && 'w-full'} ${sizeClass}`}
    >
    {icon && <Image src={icon} alt="icon" width={24} height={24} />}
    <label className="font-medium whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}
