"use client"
import Link from "next/link";
import { useState } from "react";
import {IoClose,IoMenu} from "react-icons/io5";
import{FiMail} from "react-icons/fi"
import navItems from "@/lib/navItems";

const NavBar = () => {
    const [open,setOpen] = useState(false);
    const handleNav = () => setOpen(prv => !prv);
    return (
        <nav className="relative">
            <div className="h-[90px] w-full bg-dark flex justify-between items-center text-white z-10">
                <Link href="/">
                    <div className="h-[90px] w-[90px] bg-orange flex justify-center items-center font-semibold text-4xl group cursor-pointer">
                        <span  className="group-hover:scale-125 transition-all ease-in duration-300 ">A</span>
                    </div>
                </Link>
                <div className="justify-center items-center hidden md:flex">
                    <ul className="flex justify-center items-center space-x-10 text-m font-semibold">
                        {navItems.map(item => <li key={item.title}><Link href={item.href}>{item.title}</Link></li>)}
                    </ul>
                </div>
                <div className="flex justify-end items-center">
                    <div className="h-[90px] w-[90px] bg-dark md:hidden flex items-center justify-center group cursor-pointer" onClick={handleNav}>
                        <div className="group-hover:scale-125 transition-all ease-in duration-300">
                            {open ? <IoClose size={24} />
                            :<IoMenu size={24}/>}
                        </div>
                    </div>
                    <Link href="mailto:aamanimachani@gmail.com" target="_blank">
                        <div className="h-[90px] w-[90px] bg-orange hidden md:flex items-center justify-center group cursor-pointer">
                            <div className="group-hover:scale-125 transition-all ease-in duration-300">
                                <FiMail size={24} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={`absolute md:hidden flex justify-center items-start pt-8 text-center top-[90px] ease-in duration-700 bg-dark w-full h-[calc(100vh-90px)] ${open ? "left-0"  : "left-[-100%]"}`}>
                <ul className="text-m font-semibold text-white">
                    {navItems.map(item => <li key={item.title} className="py-3" onClick={handleNav}><Link href={item.href}>{item.title}</Link></li>)}
                </ul>
            </div>
        </nav>
    )   
}

export default NavBar;

