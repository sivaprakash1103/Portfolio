import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header">
      <motion.div
        transition={{
          type: 'spring',
          stiffness: 150,
          delay: 0.6,
          duration: 0.5,
        }}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        className="container m-auto px-5 py-6 bg-gradient-to-r from-[#032030] to-[#205070]"
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-xl text-white">Prakash Portfolio</h1>

            
          </div>
          {/* Toggle button for mobile view */}
          <button
            aria-label={isOpen ? 'Close Navbar' : 'Open Navbar'}
            onClick={toggleNavbar}
            type="button"
            className="text-white focus:outline-none md:hidden"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        

        {/* Navbar items */}
        <motion.ul
          className={`flex flex-col md:flex-row gap-7 float-right ${
            isOpen ? 'block' : 'hidden'
          } md:flex`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <li>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white cursor-pointer transition duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Technologies"
              className="text-gray-400 hover:text-white cursor-pointer transition duration-200"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#Aboutme"
              className="text-gray-400 hover:text-white cursor-pointer transition duration-200"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#Contactme"
              className="text-gray-400 hover:text-white cursor-pointer transition duration-200"
            >
              Contact Me
            </a>
          </li>
        </motion.ul>
        </div>
      </motion.div>
      
    </header>
  );
};

export default Navbar;
