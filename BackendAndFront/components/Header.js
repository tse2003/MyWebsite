"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu visibility

    // Toggle the mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="text-white mt-[-10px] flex justify-between items-center px-4 py-3 sm:px-6 md:px-8 lg:px-12">
            {/* Logo */}
            <Image src="/logo.png" width={150} height={150} alt="logo" className="flex-shrink-0" />
            
            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex space-x-4 mt-5">
                <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Эхлэл</a>
                <a href="/comingsoon" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Тун удахгүй</a>
                <a href="/hutulbur" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Цагийн хуваарь</a>
                <a href="/uilchilgee" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Үйлчилгээ</a>
                <a href="/bonus" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Бонус карт</a>
            </div>

            {/* Action Button (Desktop) */}
            <div className="hidden md:block mt-5">
                <a type="button" href="/login" className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
                    Кино захиалах
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Only visible when `menuOpen` is true) */}
            {menuOpen && (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 mt-12 flex flex-col space-y-4 z-50">
        <a 
            href="/" 
            className="text-lg font-semibold hover:text-gray-300 transition-all duration-300" 
            onClick={() => setMenuOpen(false)}>
            Эхлэл
        </a>
        <a 
            href="/comingsoon" 
            className="text-lg font-semibold hover:text-gray-300 transition-all duration-300" 
            onClick={() => setMenuOpen(false)}>
            Тун удахгүй
        </a>
        <a 
            href="/hutulbur" 
            className="text-lg font-semibold hover:text-gray-300 transition-all duration-300" 
            onClick={() => setMenuOpen(false)}>
            Цагийн хуваарь
        </a>
        <a 
            href="/uilchilgee" 
            className="text-lg font-semibold hover:text-gray-300 transition-all duration-300" 
            onClick={() => setMenuOpen(false)}>
            Үйлчилгээ
        </a>
        <a 
            href="/bonus" 
            className="text-lg font-semibold hover:text-gray-300 transition-all duration-300" 
            onClick={() => setMenuOpen(false)}>
            Бонус карт
        </a>
        <a 
            href="/login" 
            className="text-lg font-semibold bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 px-5 py-2.5 rounded-lg hover:bg-gradient-to-br transition-all duration-300" 
            onClick={() => setMenuOpen(false)}>
            Кино захиалах
        </a>
    </div>
)}

        </div>
    );
}
