"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto relative z-30 py-4 px-8">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="flex items-center justify-center">
            <Link
              href={link.href}
              className="font-medium text-gray-500 hover:text-green-600 hover:scale-105 transition-all"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex items-center">
        <Button
          size="lg"
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="md:hidden flex items-center gap-4"
      >
        {open ? (
          <X className="w-7 h-7 text-gray-700 cursor-pointer" />
        ) : (
          <Menu className="w-7 h-7 text-gray-700 cursor-pointer" />
        )}
      </div>
      
       <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] right-0 w-80 h-screen bg-gray-100 shadow-xl pt-16 flex-col items-center gap-6 px-5 text-sm md:hidden transition-transform duration-300 ease-in-out `}
        >
          {NAV_LINKS.map((link, index) => (
            <div key={index}>
              <Link href={link.href} className="text-lg font-medium hover:text-green-600 hover:scale-105 transition-all">
                {link.label}
              </Link>
            </div>
          ))}
          <Button
            size="sm"
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
    </nav>
  );
}
