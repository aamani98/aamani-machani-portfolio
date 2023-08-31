import Link from "next/link";
import {ImGithub, ImLinkedin} from "react-icons/im";
import {IoMdMail} from "react-icons/io";

const SideBar = () => {
    return <div className="w-[90px] h-[calc(100vh-90px)] bg-dark py-[90px] flex-col items-center justify-between hidden md:flex">
        <div className="text-white text-sm font-semibold uppercase -rotate-90 pr-14">Frontend Developer</div>
        <ul className="space-y-6">
            <li>
                <Link href="https://github.com/aamani98" target="_blank">
                    <ImGithub size={24} color="white" />
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/aamani-machani-3977a5183" target="_blank">
                    <ImLinkedin size={24} color="white" />
                </Link>
            </li>
            <li>
                <Link href="mailto:aamanimachani@gmail.com" target="_blank">
                    <IoMdMail size={24} color="white" />
                </Link>
            </li>
            
        </ul>
    </div>
}

export default SideBar;