import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import project1 from './assets/project1.png';
import cocktails from './assets/drinksImage.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },

  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: project1,
    url: 'https://mytravel-tours.netlify.app/',
    github: 'https://github.com/nadia-elm',
    title: 'Travel Agency Website',
    text: 'The Travel Agency Website is a platform designed to showcase and promote tours to various cities and countries worldwide. Users can explore a wide range of travel destinations, view detailed tour itineraries and check pricing. ',
  },
  {
    id: nanoid(),
    img: cocktails,
    url: 'https://cocktails-from-around-the.netlify.app/',
    github: 'https://github.com/nadia-elm',
    title: 'Cocktails DB: A Mixology Masterpiece',
    text: 'Dive into the world of mixology with Cocktails DB, an interactive cocktail exploration experience!',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/nadia-elm',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
