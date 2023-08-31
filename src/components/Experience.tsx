import experiences from "@/lib/experience";

const Experience = () => {
    return <section className="text-center pt-[90px] pb-[60px]" id="experience">
                <h1 className="font-bold text-dark text-6xl pb-[90px]">
                    Experience
                </h1>
                <div className="before:content-('') before:h-[100%] before:absolute before:top-0 before:left-[30px] before:lg:left-[50%] before:w-[4px] before:bg-subtle before:block relative sm:mx-[30px] space-y-10">
                    {experiences.map(experience => <div className="relative group lg:flex lg:even:flex-row-reverse" key={experience.title}>
                        <div className="absolute w-[60px] h-[60px] bg-white border-2 rounded-full border-subtle flex justify-center items-center top-0 lg:left-[50%] lg:ml-[-30px]">
                            <experience.icon size={24} color="#202124" />
                        </div>
                        <div className="relative bg-white border-2 rounded-lg border-subtle lg:ml-0 ml-[80px] lg:w-[44%] space-y-2 text-left py-3 px-6 ">
                            <div className="absolute top-[16px] right-[100%] lg:group-even:right-[100%]  lg:group-odd:rotate-180 lg:group-odd:left-[100%] border-transparent border-[10px] border-r-[10px] border-r-subtle"></div>
                            <h2>{experience.title}</h2>
                            <p>{experience.organization}</p>
                            <p>{experience.location}</p>
                            <p>{experience.description}</p>
                            <p className="lg:absolute lg:w-[100%] lg:group-odd:left-[calc(130%)] lg:top-[8px] lg:group-even:right-[calc(130%)] lg:group-even:text-right">2020</p>
                        </div>
                    </div>)}
                </div>
            </section>
}

export default Experience;
