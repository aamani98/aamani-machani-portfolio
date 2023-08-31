import About from '@/components/About'
import Intro from '@/components/Intro';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
const Home = () => {
  return (
    <main className="md:ml-[90px] md:w-[calc(100%-90px)] w-full px-[30px] sm:px[60px] md:px-[90px]">
      <Intro />
      <About />
      <Skills/>
      <Projects />
      <Experience />    
    </main>
  )
}

export default Home;