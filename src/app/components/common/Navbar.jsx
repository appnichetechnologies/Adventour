import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar()
{
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <header className="fixed w-[100dvw] h-auto backdrop-blur-sm backdrop-opacity-80 text-black">
                <nav className="flex justify-between items-center p-6">
                    <div id="logo">
                        <p className="text-[--text-dark] cursor-pointer font-bold text-2xl">
                            Adventour
                            <span className="text-[--primary-color]">.</span>
                        </p>
                    </div>
                    <div id="Nav Links" className="hidden md:flex gap-6">
                        <a href="/" className="px-2 hover:text-[--primary-color] transition-colors duration-500">
                            Home
                        </a>
                        <a href="/#destinations" className="px-2 hover:text-[--primary-color] transition-colors duration-500">
                            Destinations
                        </a>
                        <a href="/#gallery" className="px-2 hover:text-[--primary-color] transition-colors duration-500">
                            Gallery
                        </a>
                        <a href="/#subscribe" className="px-2 hover:text-[--primary-color] transition-colors duration-500">
                            Subscribe
                        </a>
                    </div>
                    <div id="profile" className='hidden md:block'>
                        <button className="bg-[--button-color] rounded-3xl font-semibold text-white px-4 py-2">
                            Contact us
                        </button>
                    </div>

                    {/* Mobile Navigation Icon */}
                    <div onClick={handleNav} className='text-black md:hidden z-200 w-auto object-right'>
                        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </div>
                </nav>

            </header>
            
            <ul
                onClick={handleNav}
                className={
                    nav
                        ? 'z-10 bg-[#000000] fixed flex-row md:hidden left-0 top-0 w-[100dvw] h-[100dvh] border-b border-white ease-in-out duration-500'
                        : 'z-10 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                <div className='md:hidden flex flex-row w-[100dvw] h-[20dvh] justify-between p-6'>

                    <div id="logo">
                        <p className="text-white cursor-pointer font-bold text-2xl">
                            Adventour
                            <span className="text-[--primary-color]">.</span>
                        </p>
                    </div>

                    {/* Mobile Navigation Icon */}
                    <div className='absolute left-[80%]'>
                        <div onClick={handleNav} className=' text-white md:hidden z-200 w-auto object-right'>
                            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-[10dvh]'>
                    {/* Mobile Navigation Items */}
                        <a
                            className='p-4 border-b w-full duration-300 cursor-pointer border-gray-600'
                            href='/'

                        >
                            <div className='hover:bg-white text-white hover:rounded-xl px-4 py-2 duration-300 hover:text-black'>
                                Home
                            </div>
                        </a>
                        <a
                            className='p-4 border-b w-full duration-300 cursor-pointer border-gray-600'
                            href='/#destinations'

                        >
                            <div className='hover:bg-white text-white hover:rounded-xl px-4 py-2 duration-300 hover:text-black'>
                                Destinations
                            </div>
                        </a>
                        <a
                            className='p-4 border-b w-full duration-300 cursor-pointer border-gray-600'
                            href='/#gallery'

                        >
                            <div className='hover:bg-white text-white hover:rounded-xl px-4 py-2 duration-300 hover:text-black'>
                                Gallery
                            </div>
                        </a>
                        <a
                            className='p-4 border-b w-full duration-300 cursor-pointer border-gray-600'
                            href='/#subscribe'

                        >
                            <div className='hover:bg-white text-white hover:rounded-xl px-4 py-2 duration-300 hover:text-black'>
                                Subscribe
                            </div>
                        </a>
                </div>

            </ul>
        </>
        
        
    );
}