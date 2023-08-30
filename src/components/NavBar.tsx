import Link from "next/link";

const NavBar = () => {
    return (
        <div className="h-[90px] w-full bg-dark flex justify-between items-center text-white z-10">
            <Link href="/">
                <div className="h-[90px] w-[90px] bg-orange flex justify-center items-center font-semibold text-4xl group cursor-pointer">
                    <span  className="group-hover:scale-125 transition-all ease-in duration-300 ">A</span>
                </div>
            </Link>
            <div className="justify-center items-center hidden md:flex">
                <ul className="flex justify-center items-center space-x-10 text-m font-semibold">
                    <li>
                        <span className="inline-block bg-orange mr-2 rounded-full w-[7px] h-[7px] "></span>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="/">Projects</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <Link href="#contact">
                <div className="h-[90px] w-[90px] bg-dark md:bg-orange flex items-center justify-center group cursor-pointer">
                    <div className="group-hover:scale-125 transition-all ease-in duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                </div>
            </Link>
        </div>
    )   
}

export default NavBar;

