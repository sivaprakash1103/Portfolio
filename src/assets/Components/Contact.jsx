import React from 'react';

const ContactForm = () => {
  return (
    <section id="Contactme" className="py-16 bg-gradient-to-r from-[#032030] to-[#205070]">
      <div className="container mx-auto px-6">
        <h2 className="font-bold text-4xl text-center text-white mb-12">Get in Touch</h2>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <div className="relative">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full p-4 mt-2 border  text-emerald-950 border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#205070]"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-lg  font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full p-4 mt-2 border  text-emerald-950 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#205070]"
              />
            </div>

            <div className="relative">
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                Mobile No
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Your Mobile Number"
                required
                className="w-full p-4 mt-2 border  text-emerald-950 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#205070]"
              />
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-4 mt-2 border text-emerald-950 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#205070]"
              ></textarea>
            </div>

            <div className="relative">
              <button
                type="submit"
                className="w-full bg-[#205070] text-white font-bold py-4 rounded-lg hover:bg-[#033040] focus:outline-none focus:ring-2 focus:ring-[#205070]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
