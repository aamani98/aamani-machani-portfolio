import { IconType } from 'react-icons';
import {ImHtmlFive,ImCss3} from 'react-icons/im';
import {IoLogoJavascript} from 'react-icons/io';
import {FaJava,FaReact,FaNodeJs,FaDocker} from "react-icons/fa";
import {SiTypescript,SiNextdotjs,SiRedux,SiJest,SiExpress,SiPrisma,SiMysql,SiMongodb} from 'react-icons/si';
import {BiLogoPostgresql} from "react-icons/bi";




type Skill = {
    title:string,
    icon:IconType;
    color:string;
}

type Skills = Skill[];

const skills:Skills =  [{
    title:"HTML",
    icon:ImHtmlFive,
    color:""
},{
    title:"CSS",
    icon:ImCss3,
    color:""
},{
    title:"JavaScript",
    icon:IoLogoJavascript,
    color:""
},{
    title:"TypeScript",
    icon:SiTypescript,
    color:""
},{
    title:"React",
    icon:FaReact,
    color:""
},{
    title:"Next.js",
    icon:SiNextdotjs,
    color:""
},{
    title:"React Native",
    icon:FaReact,
    color:""
},{
    title:"Redux Toolkit",
    icon:SiRedux,
    color:""
},{
    title:"Jest",
    icon:SiJest,
    color:""
},{
    title:"NodeJs",
    icon:FaNodeJs,
    color:""
},{
    title:"Express",
    icon:SiExpress,
    color:""
},{
    title:"Prisma",
    icon:SiPrisma,
    color:""
},{
    title:"MongoDB",
    icon:SiMongodb,
    color:""
},{
    title:"MySQL",
    icon:SiMysql,
    color:""
},{
    title:"PostgreSQL",
    icon:BiLogoPostgresql,
    color:""
},{
    title:"Java",
    icon:FaJava,
    color:""
},{
    title:"Docker",
    icon:FaDocker,
    color:""
}]

export default skills;