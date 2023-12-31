import Image from "next/image";
import {BsQuote} from "react-icons/bs";
import myPic from "../../public/myphoto.png"

const About = () => {
    return <section id="about" className="flex flex-col items-center justify-between pb-[60px]">
    <div className="w-[170px] h-[240px] bg-subtle flex justify-center items-end pb-[25px] rounded-b-[200px] mb-[90px]">
      <div className="flex justify-center items-center h-[130px] w-[130px] bg-white rounded-full">
        <Image width={130} height={130} alt="Profile Image" src={myPic} className="rounded-full" />
      </div>
    </div>
    <div className="flex flex-col items-center lg:w-[70%] px-1 text-center space-y-8 w-full">
      <h2 className="text-dark font-bold text-4xl">
        Hi! My name is Aamani,  <br /> I&apos;m Frontend Developer based in India
      </h2>
      <div className="w-[40px] h-[40px] bg-orange rounded-full flex justify-center items-center">
        <BsQuote color="white" size={24} />
      </div>
      <p className="text-dark text-lg">
        {`I am a passionate and dedicated software developer with a strong focus on frontend development. I have 2.5 years of experience in building web applications using technologies like React, React Native, NextJs, TypeScript etc.`}
      </p>
    </div>
  </section>
}

export default About;