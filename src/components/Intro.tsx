import {BsFillArrowDownCircleFill} from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
    return (
        <section className="h-[calc(100vh-90px)] flex flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-between">
                <div className="h-[130px] w-[1px] bg-subtle"></div>
                <span className="bg-orange w-[7px] h-[7px] rounded-full inline-block"></span>
            </div>
            <div className="flex flex-col items-center">
                <p className="uppercase text-sm font-semibold mb-[30px] text-dark tracking-wider duration-75">
                    Hello! My name is
                </p>
                <h1 className="text-dark text-6xl md:text-8xl font-semibold mb-[30px] duration-75">Aamani <br/> Machani</h1>
                <p className="uppercase text-sm font-semibold mb-[30px] text-dark tracking-wider duration-75">
                    Frontend Developer
                </p>
            </div>
            <div className="flex justify-center h-[240px] w-[170px] bg-subtle rounded-t-[200px] pt-[25px]">
                <div className="flex justify-center items-center h-[130px] w-[130px] relative">
                    <Image src="circle.svg" alt="circle" width={140} height={140}/>
                    <Link href="/" className="absolute border-[15px] border-solid border-white rounded-full h-[80px] w-[80px] flex justify-center items-center cursor-pointer">
                        <BsFillArrowDownCircleFill size={70} color="#202124" />
                    </Link>
                </div>
            </div>
      </section>
    )
}

export default Intro;