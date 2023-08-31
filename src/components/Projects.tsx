import Image from 'next/image';
import corpComment from '../../public/corpcomment.png';
import projects from '@/lib/projects';
import Link from 'next/link';

const Projects = () => {
    return <section className="text-center pt-[90px] pb-[60px]" id="projects">
        <h1 className="font-bold text-dark text-6xl pb-[90px]">
            Projects
        </h1>
        <div className="flex justify-start flex-col items-center space-y-10">
            {projects.map(project => <div  key={project.title}>
                <div className="border-2 rounded border-subtle w-full flex justify-between items-start p-10 bg-white gap-y-10 lg:gap-x-10 lg:flex-row flex-col-reverse lg:max-w-3xl max-w-xl">
                    <div className='space-y-8'>
                        <h2 className='text-dark font-semibold text-2xl'>{project.title}</h2>
                        <p className='text-dark font-light text-lg'>{project.description}</p>
                        <div className='flex justify-start items-start flex-wrap gap-x-3 gap-y-3'>
                            {project.tech.map(t => <p className='px-2 py-1 border-dark border-2 rounded-full' key={t}>{t}</p>
                            )}
                        </div>
                        <div className='flex lg:justify-start justify-center items-center space-x-5'>
                            <Link href={project.githubLink}>
                                <button className='px-[20px] py-[15px] border-none bg-dark text-white font-medium text-sm cursor-pointer'>Github</button>
                            </Link>
                            {project.live && <Link href={project.live}>
                                <button className='px-[20px] py-[15px] border-none bg-dark text-white font-medium text-sm cursor-pointer'>Live</button>
                            </Link>}
                        </div>
                    </div>
                    <div className='hidden sm:block max-h-[400px] overflow-hidden'>
                        <Image src={corpComment} alt="p-1" />
                    </div>
                </div>
            </div>)}
        </div>
    </section>
}

export default Projects;
