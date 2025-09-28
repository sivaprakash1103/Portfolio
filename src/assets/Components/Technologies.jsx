import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 , once: true });
  }, []);

  const skills = [
    { name: "HTML", level: "Advanced", width: "100%" },
    { name: "CSS", level: "Advanced", width: "100%" },
    { name: "JavaScript", level: "Advanced", width: "80%" },
    { name: "Bootstrap, Tailwind CSS, Material UI", level: "Advanced", width: "80%" },
    { name: "React JS", level: "Beginner", width: "60%" },
    { name: "Java", level: "OOP", width: "60%" },
    { name: "UI Development", level: "Basics", width: "65%" },
    { name: "MySQL", level: "Basics", width: "70%" }
  ];

  return (
    <section id="Technologies" className="mt-12 flex flex-col sm:flex-row">
      <div className="container mx-auto px-4 py-10">
        <h2 className="font-bold text-4xl text-center mb-8" data-aos="fade-up">Technologies</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="mt-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <p className="text-gray-500">{skill.level}</p>
              </div>
              <div className="w-full bg-gray-300 rounded-md h-2 mt-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-md" style={{ width: skill.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
