import skills from '@/lib/skills';

const Skills = () => {
    return <section className="text-center pt-[90px] pb-[60px]" id="skills">
        <h1 className="font-bold text-dark text-6xl pb-[90px]">
            Skills
        </h1>
        <div className='flex flex-wrap justify-center items-center gap-y-10 gap-x-24 sm:mx-[30px] md:mx-[90px]'>
            {skills.map(skill => (<div key={skill.title} className='flex flex-col items-center justify-center'>
                <skill.icon size={40} />
                <p>{skill.title}</p>
            </div>))}
        </div>
       
    </section>
}

export default Skills;