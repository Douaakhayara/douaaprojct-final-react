import React from "react";
import { images } from "../constant/images"; 

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 pt-40">
     
      <div className="w-full md:w-1/2">
        <img
          src={images.blog2} 
          alt="About"
          className="w-300 h-auto object-cover rounded-lg shadow-md "
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">or story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to our store! We are passionate about delivering high-quality fashion pieces that blend timeless style with modern trends.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our team carefully curates collections that are not only beautiful but also sustainable. Discover our story and explore what makes us different.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quia facere eaque eos nulla ipsam vel. Fugit repudiandae esse similique quaerat, assumenda nihil dolores ipsam doloremque sed, aut dolorum quas.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, blanditiis ut vitae repellendus consequatur sint facilis iusto quibusdam eligendi provident, molestiae vero hic iste, nulla soluta animi maiores? Perspiciatis, sed!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis magnam sed vel deserunt impedit maxime possimus ipsam totam illum! Non cum doloremque rem aliquam tenetur explicabo voluptates quam quia.
        </p>
      </div>
    </section>
  );
};

export default About;
