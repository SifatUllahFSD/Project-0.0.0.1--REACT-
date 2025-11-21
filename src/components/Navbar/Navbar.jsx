

import logo from '@images/logo.png'
import { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import ScrollSpy from 'react-scrollspy-navigation';

function Navbar() {
    const [menuShow, setMenuShow] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []) 

    return (
        <>
        <ScrollSpy activeClass="nav-active">
        <nav className={`pt-[25px] fixed top-0 left-0 w-full z-50 duration-500 transition-all ${isSticky ? 'bg-[rgba(149,157,231,0.96)] py-5' : 'bg-transparent md:pt-[57px] rounded-[50px]'}`}>
            <div className="container px-3 2xl:px-0">
                <div className="flex justify-between items-center">
                    
                   
                    <div className="md:w-1/5">
                        <a href="#">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>

                  
                    <div className="sm:block md:hidden">
                        <FaBars onClick={() => setMenuShow(true)} className="text-[30px] text-white cursor-pointer" />
                    </div>

                   
                    <div className={`mobile-device gap-5 duration-500 transition-all ease-in-out fixed top-0 right-0 h-full flex-col bg-[rgba(70,24,134,0.83)] md:hidden flex justify-center items-center rounded-[3px] ${menuShow ? 'w-[300px] opacity-100' : 'w-0 opacity-0'}`}>
                        <div className="absolute top-5 left-5 text-[30px] text-white">
                            <RiCloseFill onClick={() => setMenuShow(false)} className="text-[30px] text-white cursor-pointer" />
                        </div>
                        <a href="#banner">Home</a>
                        <a href="#about">About</a>
                        <a href="#service">Service</a>
                        <a href="#review">Review</a>
                        <a href="#work">Work</a>
                        <a href="#why">Why Us</a>
                        <a href="#footer">Contact</a>
                    </div>

                  
                    <div className="pl-[70px] lg:pl-0 w-3/5 hidden md:block">
                        <ul className="flex justify-center gap-[20px] lg:gap-[60px] text-white">
                            <li><a href="#banner">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#why">Why Us</a></li>
                            <li><a href="#review">Review</a></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>

                   
                    <div className="w-1/5 text-end hidden md:block">
                        <a href="#contact" className="text-[20px] text-white font-inter font-semibold leading-[26px] bg-[#6A4DF4] px-[16px] lg:px-[42px] py-[8px] lg:py-[15px] rounded-[10px]">Contact</a>
                    </div>

                </div>
            </div>
        </nav>
        </ScrollSpy>
        </>
    )
}

export default Navbar
