import React, { useEffect } from "react";
import { FaGit, FaEdit, FaRocketchat, FaUsers } from "react-icons/fa";
import AOS from "aos";

const AdditionalTechnologies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-950 via-blue-500 ">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Additional Technologies & Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Skill 1: Git */}
          <div
            className="relative p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-full flex justify-center items-center shadow-lg transition-transform transform hover:scale-110 duration-300 ease-in-out">
                <FaGit className="text-white text-3xl" />
              </div>
            </div>
            <h3 className="font-semibold text-xl text-center text-blue-800">Git</h3>
            <p className="text-gray-600 text-center mt-3">
              Master version control using Git to manage and collaborate on code efficiently.
            </p>
          </div>

          {/* Skill 2: Editing */}
          <div
            className="relative p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-full flex justify-center items-center shadow-lg transition-transform transform hover:scale-110 duration-300 ease-in-out">
                <FaEdit className="text-white text-3xl" />
              </div>
            </div>
            <h3 className="font-semibold text-xl text-center text-blue-800">Editing</h3>
            <p className="text-gray-600 text-center mt-3">
              Enhance videos with seamless transitions, dynamic effects, and crisp audio. Transform photos with precise exposure, color balance, and sharpness for stunning visuals.
            </p>
          </div>

          {/* Skill 3: Quick Learning */}
          <div
            className="relative p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-full flex justify-center items-center shadow-lg transition-transform transform hover:scale-110 duration-300 ease-in-out">
                <FaRocketchat className="text-white text-3xl" />
              </div>
            </div>
            <h3 className="font-semibold text-xl text-center text-blue-800">Quick Learning</h3>
            <p className="text-gray-600 text-center mt-3">
              Rapidly adapting to new tools and technologies to stay ahead of the curve.
            </p>
          </div>

          {/* Skill 4: Teamwork */}
          <div
            className="relative p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-full flex justify-center items-center shadow-lg transition-transform transform hover:scale-110 duration-300 ease-in-out">
                <FaUsers className="text-white text-3xl" />
              </div>
            </div>
            <h3 className="font-semibold text-xl text-center text-blue-800">Teamwork</h3>
            <p className="text-gray-600 text-center mt-3">
              Collaborating effectively with teams to solve problems and achieve goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalTechnologies;
