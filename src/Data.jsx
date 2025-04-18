import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/python.svg';
import skillsImg4 from './assets/file-type-cpp3.svg';
import skillsImg5 from './assets/icons8-c.svg';

import skillsImg6 from './assets/sql-database-generic.svg';
import skillsImg7 from './assets/django.svg';
import skillsImg8 from './assets/mysql-original-wordmark.svg';
import skillsImg9 from './assets/mongodb-original-wordmark.svg';
import skillsImg10 from './assets/icons8-git.svg';
import skillsImg11 from './assets/vs-code.svg';
import skillsImg12 from './assets/javascript-logo.svg';

import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';

export const links = [
    {
      name: 'Home',
      icon: <FaHome className='nav-icon' />,
      path: '/',
    },
  
    {
      name: 'About',
      icon: <FaUser className='nav-icon' />,
      path: '/about',
    },
  
    {
      name: 'Projects',
      icon: <FaFolderOpen className='nav-icon' />,
      path: '/portfolio',
    },
  
    {
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav-icon' />,
      path: '/contact',
    },
];

export const personalInfo = [
  {
    title: 'Name : ',
    description: 'Malay Bhunia',
  },

  {
    title: 'Degree : ',
    description: 'B.Tech CSE',
  },

  {
    title: 'Birthday : ',
    description: '03 Jun 2004',
  },

  {
    title: 'Age : ',
    description: '20 Years',
  },

  {
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    title: 'State : ',
    description: 'West Bengal',
  },

  {
    title: 'Phone : ',
    description: '+91 8101032364',
  },

  {
    title: 'Email : ',
    description: 'mbhunia098@gmail.com',
  },

  {
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    title: 'Langages : ',
    description: 'Bangali, Hindi, English',
  },
];

export const stats = [
  {
    no: '0+',
    title: 'Years of <br /> Experience',
  },

  {
    no: '4+',
    title: 'Completed <br /> Projects',
  },

  {
    no: '5+',
    title: 'Happy <br /> Customers',
  },

  {
    no: '0+',
    title: ' Awards <br /> Won',
  },
];

export const skill = [
  {
    id: 5,
    img: skillsImg5,
    title: 'C',
    level: 'Advanced',
    category: 'developer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'C++',
    level: 'Advanced',
    category: 'developer',
  },
  
  {
    id: 3,
    img: skillsImg3,
    title: 'Python',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Basic',
    category: 'developer',
  },

  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Basic',
    category: 'developer',
  },

  {
    id: 6,
    img: skillsImg6,
    title: 'SQL',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 7,
    img: skillsImg7,
    title: 'Django',
    level: 'Basic',
    category: 'developer',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'MySQL',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 9,
    img: skillsImg9,
    title: 'MongoDB',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 10,
    img: skillsImg10,
    title: 'Git & Github',
    level: 'Basic',
    category: 'designer',
  },

  {
    id: 11,
    img: skillsImg11,
    title: 'VS Code',
    level: 'Intermediate',
    category: 'designer',
  }

];

export const resume = [

  {
    id: 1,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2022 - PRESENT',
    title: 'B.Tech CSE Degree <span> Swami Vivekananda University </span>',
    desc: 'First Year 75% Marks. AND Second Year 73% Marks.'                                     
  },

  {
    id: 2,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2020 - 2022',
    title: 'Higher Secondary Exam. <span> Tikrapara A. M. High School </span>',
    desc: 'Secured 92% Marks.',
  },

  {
    id: 3,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2014 - 2020',
    title: 'Secondary Exam. <span> Brajakishorepur D. G. High School </span>',
    desc: 'Secured 52% Marks.',
  },

  {
    id: 4,
    category: 'experience',
    icon: <RiGraduationCapFill />,
    year: 'PRESENT',
    title: 'Freshers </span>',
  },
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'Natural Language & Voice Calculator',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg3],
    link: 'https://github.com/MalayBhunia/Smart_Calculator',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Database Management System',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4],
    link: '',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Voice Assistant',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2,skillsImg12,skillsImg3],
    link: 'https://github.com/MalayBhunia/Jarvis',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'PORTFOLIO',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg12],
    link: 'https://malaybhunia.github.io/Portfolio1/',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Solar System',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2],
    link: 'https://malaybhunia.github.io/Solar-System/',
  },
];

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];

