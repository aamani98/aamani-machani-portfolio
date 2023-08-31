
import Link from "next/link";
import {ImGithub, ImLinkedin} from "react-icons/im";
import {IoMdMail}from "react-icons/io";

const Footer = () => {
    return <footer className="bg-dark w-full py-[30px] pt-[60px] px-[30px] md:px-[90px] text-subtle md:ml-[90px] md:w-[calc(100%-90px)] mt-[90px]">
       <div className=" md:flex md:items-start md:justify-between ">
            <div className="md:w-[40%] w-full mb-8 text-center md:text-left">
                <h2 className="uppercase font-semibold">Aamani Machani</h2>
                <p className="mt-4">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div className="flex flex-col items-center md:items-start justify-start mb-8">
                <h2 className="uppercase font-semibold">Social</h2>
                <div className="flex justify-center items-start mt-4 gap-6">
                    <Link href="https://github.com/aamani98" target="_blank"><ImGithub size={24} color="white" /></Link>
                    <Link href="https://www.linkedin.com/in/aamani-machani-3977a5183" target="_blank"><ImLinkedin size={24} color="white" /></Link>
                    <Link href="mailto:aamanimachani@gmail.com" target="_blank"><IoMdMail size={24} color="white" /></Link>
                </div>
            </div>
       </div>
       <div className="text-center pt-[30px] border-t-2 border-subtle">
            <p className="text-xs">{`© Copyright ${new Date().getFullYear()}. Made by `}<Link href="/" className="font-semibold underline cursor-pointer">Aamani Machani</Link></p>
       </div>
</footer>
}

export default Footer;