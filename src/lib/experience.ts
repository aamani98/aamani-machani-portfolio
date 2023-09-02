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
        description:`• Developed authentication system using Express, MySql, and JWT and integrated with frontend with proper validation checks and responses.\n• Created responsive and interactive user interfaces using React, HTML, CSS, and JavaScript.`,
        icon:MdOutlineWork
    },
    {
        location:"Banglore, Karnataka",
        title:"Associate System Engineer",
        year:2021,
        organization:"IBM India Pvt Ltd",
        description:`• Developed responsive web designs using HTML, CSS, JavaScript, and MaterialUI.\n• Created reusable components that can be utilized throughout the application using React, and Redux.\n• Integrated backend RESTful APIs to make the application dynamic.\n• Unit test development using JavaScript using Jest.`,
        icon:MdOutlineWork
    },
    {
        location:"Chennai, Tamil Nadu",
        title:"Frontend Developer",
        year:2022,
        organization:"Stockarea",
        description:`• Developed dynamic and responsive admin platform using ReactJs, Redux Toolkit, TypeScript, Styled-Components.\n• Built two mobile native applications using React Native, Redux, Expo, and TypeScript and published them on PlayStore.\n• Partnered with back-end engineers to integrate Node.js REST APIs.\n• Increased user interactivity by 80% by implementing real-time push notifications.`,
        icon:MdOutlineWork
    },
    {
        location:"Banglore, Karanataka",
        title:"Software Engineer",
        year:2023,
        organization:"TietoEvry India Pvt Ltd",
        description:`• Create reusable React Components that can be utilized throughout the Application.\n• Increased 50% unit test coverage for a React web product by Jest framework.`,
        icon:MdOutlineWork
    }
] 

export default experiences;