import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { IoMdCloudDownload } from 'react-icons/io';
import Profile from '../Profile.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-cyan-800 to-blue-900 text-white py-40 my-5">
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6"
      >
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Hello, I'm <span className="text-indigo-300">Siva Prakash</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-4 text-3xl md:text-4xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            Front-end Developer...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            Passionate and detail-oriented Frontend Developer, equipped with foundational knowledge in Front-end Technologies.
          </motion.p>

          

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2, duration: 1 }}
  className="flex flex-col gap-6 mt-10 justify-center lg:flex-row lg:justify-start"
>
<motion.a
    whileHover={{ scale: 1.1, textShadow: '0 0 8px rgb(255,255,255)' }}
    transition={{ type: 'spring', stiffness: 300 }}
    href="mailto:prakashorton6@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500"
  >
    <div className="flex items-center gap-2">
      <FaWhatsapp className="w-5 h-5" />
      Contact Me
    </div>
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.1, textShadow: '0 0 8px rgb(255,255,255)' }}
    transition={{ type: 'spring', stiffness: 300 }}
    href="https://www.linkedin.com/in/siva-prakash-a62572282/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500"
  >
    <div className="flex items-center gap-2">
      <FaLinkedin className="w-5 h-5" />
      Connect on LinkedIn
    </div>
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.1, textShadow: '0 0 8px rgb(255,255,255)' }}
    transition={{ type: 'spring', stiffness: 300 }}
    href="https://drive.google.com/file/d/1hc2ficFUNpOGq3AnQ8VLK-BpL7US6-PB/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-2 rounded-full bg-green-600 hover:bg-green-500"
  >
    <div className="flex items-center gap-2">
      <IoMdCloudDownload className="w-5 h-5" />
      Download CV
    </div>
  </motion.a>
</motion.div>
        </div>

        {/* Profile Image Section */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
            className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full shadow-2xl"
          >
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
