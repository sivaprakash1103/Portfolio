import React from 'react';

const AboutMe = () => {
  const experiences = [
    {
      title: "Masters in Information Technology",
      institution: "Bishop Heber College",
      duration: "2022 - 2024",
      score: "7.35 CGPA",
    },
    {
      title: "Bachelor Degree in Information Technology",
      institution: "National College",
      duration: "2019 - 2022",
      score: "8.23 CGPA",
    },
    {
      title: "HSC",
      institution: "St. James Hr. Sec. School, Palakurichy",
      duration: "2018 - 2019",
      score: "60%",
    },
    {
      title: "SSLC",
      institution: "St. James Hr. Sec. School, Palakurichy",
      duration: "2015 - 2016",
      score: "82%",
    },
  ];

  return (
    <section id="Aboutme" className="py-16  text-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
        <div className='my-4  '>
          <h3 className='text-center text-2xl font-bold'>Experience</h3>
          <p className='text-center text-xl text-gray-300 font-semibold'> working 6 Months in Dextrasys Technologies As a Web Developer</p>
            </div>
        <div className="relative border-l-4 border-gray-700 mt-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 pl-8 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-6 top-0 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full ring-4 ring-gray-900">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="mt-2">
                <span className="font-medium">Institution:</span> {exp.institution}
              </p>
              <p className="mt-1">
                <span className="font-medium">Duration:</span> {exp.duration}
              </p>
              <p className="mt-1">
                <span className="font-medium">Score:</span> {exp.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
