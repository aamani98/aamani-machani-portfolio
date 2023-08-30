import Link from "next/link";
import {ImGithub, ImLinkedin} from "react-icons/im"

const SideBar = () => {
    return <div className="w-[90px] h-[calc(100vh-90px)] bg-dark py-[90px] flex-col items-center justify-between hidden md:flex">
        <div className="text-white text-sm font-semibold uppercase -rotate-90 pr-14">Frontend Developer</div>
        <ul className="space-y-6">
            <li>
                <Link href="/">
                    <ImGithub size={24} color="white" />
                </Link>
            </li>
            <li>
                <Link href="/">
                    <ImLinkedin size={24} color="white" />
                </Link>
            </li>
        </ul>
    </div>
}

export default SideBar;