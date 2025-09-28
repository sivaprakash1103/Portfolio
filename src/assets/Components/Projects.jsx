import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import project1 from '../project1.png';
import project2 from '../project2.png';
import project3 from '../project3.png';
import project4 from '../project4.png';
import project5 from '../project5.png';
import project6 from '../project6.png';
import project7 from '../project7.png';
import project8 from '../project8.png';
import project9 from '../project9.png';
import project11 from '../project11.png';
import project12 from '../project12.png';
import project13 from '../project13.png';

const projects = [
  {
    id: 1,
    title: "Chatbot for College Enquiry",
    description: "This project aims to guide students who have completed school and provide information about the college.",
    imgSrc: project1,
    livePreview: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Website for ISRO",
    description: "A simple website for ISRO created using only HTML and CSS.",
    imgSrc: project3,
    livePreview: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Portfolio",
    description: "This project showcases my skills and serves as a platform to present myself to potential recruiters.",
    imgSrc: project5,
    livePreview: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Digital Timer",
    description: "A digital timer application developed using ReactJS.",
    imgSrc: project6,
    livePreview: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Todo List",
    description: "A Todo List application developed using the MERN stack technology.",
    imgSrc: project7,
    livePreview: "#",
    githubLink: "#"
  },
  {
    id: 7,
    title: "Health Care DashBoard",
    description: "A Health Care DashBoard application developed using the HTML CSS javaScript React Js tailwindcss technology.",
    imgSrc: project8,
    livePreview: "#",
    githubLink: "#"
  },

  {
    id: 8,
    title: "Quotes manager",
    description: "A Quotes manager application developed using the MERNSTACK Technology.",
    imgSrc: project9,
    livePreview: "#",
    githubLink: "#"
  },

  {
    id: 9,
    title: "Gif Quotes",
    description: "A Gif Quotes  application developed using the  Reactjs+Typescript Technology.",
    imgSrc: project11,
    livePreview: "#",
    githubLink: "#"
  },
  {
    id: 10,
    title: "Time Tracker",
    description: "A Time tracker application developed using the  Reactjs+Typescript Technology.",
    imgSrc: project12,
    livePreview: "#",
    githubLink: "#"
  },
  {
    id: 11,
    title: "Weather App",
    description: "A Weather application developed using the  Reactjs Technology.",
    imgSrc: project13,
    livePreview: "#",
    githubLink: "#"
  },
  



];

const Projects = () => {
  return (
    <div className= "container mx-auto px-6 py-16" id="projects">
      <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            </div>
            {/* Buttons */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <a
                href={project.livePreview}
                className="py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Live Preview
              </a>
              <a
                href={project.githubLink}
                className="py-2 px-4 text-sm font-medium text-white border-2 border-white rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
