type Project = {
    title:string,
    description:string,
    tech:string[],
    live:null|string,
    githubLink:string
}

const projects:Project[] = [
    {title:"PostIt - A FullStack Blogging App Using NextJs",
    description:"Developed a blogging platform where users view the blogs posted by other users.\nUsers can authenticate to post, edit and delete their blogs.",
    tech:["NextJs", "React", "TypeScript", "TailwingCSS", "PostgreSQL","Prisma"],
    live:null,
    githubLink:'https://github.com/aamani98/post-it'
    },
    {title:"NewsApp - A FullStack Web Application",
    description:"Build an app where users can read the latest news and bookmark the news articles to read later.",
    tech:["React", "JavaScript", "MaterialUI", "SpringBoot", "Java", "MySQL", "MongoDB"],
    live:null,
    githubLink:'https://github.com/aamani98/NewsApp---Frontend---Angular'
    },
]

export default projects;