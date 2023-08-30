import Image from 'next/image';
import {BsQuote} from 'react-icons/bs';
import myPic from "../../public/myphoto.png"

const About = () => {
    return <section id="about" className="flex flex-col items-center justify-between pb-[60px]">
    <div className="w-[170px] h-[240px] bg-subtle flex justify-center items-end pb-[25px] rounded-b-[200px] mb-[90px]">
      <div className="flex justify-center items-center h-[130px] w-[130px] bg-white rounded-full">
        <Image width={130} height={130} alt='Profile Image' src={myPic} className='rounded-full' />
      </div>
    </div>
    <div className="flex flex-col items-center lg:w-[70%] px-1 text-center space-y-8 w-full">
      <h2 className="text-dark font-bold text-4xl">
        Hi! My name is Aamani,  <br /> I'm Frontend Developer based in India
      </h2>
      <div className='w-[40px] h-[40px] bg-orange rounded-full flex justify-center items-center '>
        <BsQuote color="white" size={24} />
      </div>
      <p className='text-dark text-lg'>
        I am a passionate and dedicated UI/UX designer with a strong focus on creating exceptional user experiences. I thrive on transforming complex ideas into intuitive and visually appealing designs. With a keen eye for detail and a user-centered approach, I strive to deliver impactful solutions that engage and delight users. Let's collaborate to bring your digital products to life!
      </p>
    </div>
  </section>
}

export default About;