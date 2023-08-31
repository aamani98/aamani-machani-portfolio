import { IconType } from 'react-icons';
import {FaGraduationCap} from 'react-icons/fa';
import {MdOutlineWork} from 'react-icons/md';
type Experience = {
    location:string,
    title:string,
    year:number,
    description:string,
    organization:string,
    icon:IconType;
}

const experiences : Experience[] = [
    {
        location:"Tirupati, Andhra Pradesh",
        title:"Bachelore of Technology (CSE)",
        year:2020,
        organization:'Sri Venkateswara University College Of Engineering',
        description:"Graduated with a 4 year degree in computer science and engineering",
        icon:FaGraduationCap
    },
    {
        location:"Remote",
        title:"MERN Stack Intern",
        year:2020,
        organization:'MeaVita Technologies Pvt Ltd',
        description:"Graduated with a 4 year degree in computer science and engineering",
        icon:MdOutlineWork
    },
    {
        location:"Banglore, Karnataka",
        title:"Associate System Engineer",
        year:2021,
        organization:"IBM India Pvt Ltd",
        description:"Graduated with a 4 year degree in computer science and engineering",
        icon:MdOutlineWork
    },
    {
        location:"Chennai, Tamil Nadu",
        title:"Frontend Developer",
        year:2022,
        organization:"Stockarea",
        description:"Graduated with a 4 year degree in computer science and engineering",
        icon:MdOutlineWork
    },
    {
        location:"Banglore, Karanataka",
        title:"Software Engineer",
        year:2023,
        organization:"TietoEvry India Pvt Ltd",
        description:"Graduated with a 4 year degree in computer science and engineering",
        icon:MdOutlineWork
    }
] 

export default experiences;