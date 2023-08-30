import experiences from "@/lib/experience";

const Experience = () => {
    return <section className="text-center pt-[90px] pb-[60px]" id="experience">
    <h1 className="font-bold text-dark text-6xl pb-[90px]">
        Experience
    </h1>
    <div className="before:content-('') before:h-[100%] before:absolute before:top-0 before:left-[20px] before:md:left-[50%] before:w-[4px] before:bg-subtle before:block relative sm:mx-[30px] md:mx-[90px]">
        {experiences.map(experience => (<div key={experience.organization}>{experience.title}</div>))}
    </div>
    </section>
}

export default Experience;
