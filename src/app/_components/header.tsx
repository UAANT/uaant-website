// src/app/_components/header.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { MAIN_MENU } from "@/lib/constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-4 flex justify-between items-center max-w-6xl mx-auto text-accent-1">
      {/* Logo and title */}
      <h1 className="text-3xl font-bold">
        <Link href="/">
          <span className="cursor-pointer hover:text-gray-700">UAANT</span>
        </Link>
      </h1>

      {/* Navigation Menus */}
      <nav className="hidden md:flex flex-grow items-center justify-center space-x-4">
        {/* Desktop Navigation Links */}
        {MAIN_MENU.map((item, index) => (
          <Link href={item.link} key={index}>
            <span className="cursor-pointer">{item.title}</span>
          </Link>
        ))}
      </nav>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link href="#donate"><span className="bg-accent-1 hover:bg-blue-600 px-4 py-2 transition duration-300 text-white cursor-pointer">Donate Now</span></Link>
        <Link href="#volunteer"><span className="bg-accent-2 hover:bg-yellow-600 px-4 py-2 transition duration-300 text-accent-1 cursor-pointer">Volunteer</span></Link>
      </div>

      {/* Mobile Navigation Button */}
      <button  className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black px-3 py-2 rounded-md text-black cursor-pointer" aria-expanded={isMobileMenuOpen} 
          aria-label="Toggle mobile menu" onClick={handleToggleMenu}>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`absolute p-8 top-0 right-0 bg-white shadow-md z-10 space-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        {/* Close button */}
        <button onClick={handleToggleMenu} className="self-end">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Mobile Navigation Links */}
        {MAIN_MENU.map((item, index) => (
          <Link href={item.link} key={index}>
            <span className="block p-2">{item.title}</span>
          </Link>
        ))}
        <Link href="#donate"><span className="block my-2 bg-accent-1 hover:bg-blue-600 px-4 py-2 transition duration-300 text-white text-center">Donate Now</span></Link>
        <Link href="#volunteer"><span className="block bg-accent-2 hover:bg-yellow-600 px-4 py-2 transition duration-300 text-accent-1 text-center">Volunteer</span></Link>
      </div>


    </header>
  );
};

export default Header;
