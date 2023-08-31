type Project = {
    title:string,
    description:string,
    tech:string[],
    live:null|string,
    githubLink:string
}

const projects:Project[] = [
    {title:"PostIt - A FullStack Blogging App Using NextJs",
    description:"jhdsb dis sd sdij isj si sid sid ci cisdic sidc isdc s dcw jc awe cwie ciwe cwi ecioweci wec woeic owedcow ic owcf owieasc osc idsc sdc ",
    tech:["NextJs", "React", "TypeScript", "TailwingCSS", "PostgreSQL","Prisma"],
    live:null,
    githubLink:'https://github.com/aamani98/post-it'
    },
    {title:"NewsApp - A FullStack Web Application",
    description:"jhdsb dis sd sdij isj si sid sid ci cisdic sidc isdc s dcw jc awe cwie ciwe cwi ecioweci wec woeic owedcow ic owcf owieasc osc idsc sdc ",
    tech:["React", "JavaScript", "MaterialUI", "SpringBoot", "Java", "MySQL", "MongoDB"],
    live:null,
    githubLink:'https://github.com/aamani98/NewsApp---Frontend---Angular'
    },
]

export default projects;