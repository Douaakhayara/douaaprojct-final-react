import React from "react";
import { images } from "../constant/images";
import { Link } from "react-router-dom";


const leftBigItems = [
  { id: 1, image: images.blog, text: "Black Friday Guide: Best Sales & Discount Codes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..." },
  { id: 2, image: images.blog2, text: "Black Friday Guide: Best Sales & Discount Codes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..." },
  { id: 3, image: images.blog3, text: "Black Friday Guide: Best Sales & Discount Codes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..." },
];

const rightSmallItems = [
  { id: 1, image: images.gallry, text: "Boxy3 T-Shirt with Roll Sleeve", prix1: " $30.00 ",prix: "  $20.00"},
  { id: 3, image: images.gallry2, text: "Boxy3 T-Shirt with Roll Sleeve",prix1: " $30.00 ",prix: "  $20.00" },
  { id: 2, image: images.gallry, text: "Boxy3 T-Shirt with Roll Sleeve",prix1: " $30.00",prix: "  $20.00" },
  { id: 4, image: images.gallry3, text: "Boxy3 T-Shirt with Roll Sleeve",prix1: " $30.00 ",prix: "  $20.00" },
  { id: 5, image: images.photo1, text: "Boxy3 T-Shirt with Roll Sleeve",prix1: " $30.00 ",prix: "  $20.00" },
  { id: 6, image: images.photo2, text: "Boxy3 T-Shirt with Roll Sleeve" ,prix1: " $30.00 ",prix: "  $20.00"},
];

const Blog= () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 pt-28  ">
   
      <section
        className="w-full h-[300px] bg-center bg-cover flex items-center justify-center text-white mb-10"
        style={{
          backgroundImage: `url(${images.carousel})`,
        }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg uppercase">Our Blog</h1>
      </section>

      <div className="flex flex-col md:flex-row gap-90">
   
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          {leftBigItems.map(({ id, image, text }) => (
            <Link to={`/blog1/${id}`}>
            <div key={id} className="flex flex-col items-center w-[900px] hover:scale-90">
              <img src={image} alt={text} className="w-full h-auto rounded-lg object-cover" />
              <p className="mt-2 text-lg  text-center">{text}</p>
            </div> 
            </Link>
          ))}
        </div>

        
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {rightSmallItems.map(({ id, image, text,prix,prix1 }) => (
            <div key={id} className="flex gap-4 items-center">
              <img src={image} alt={text} className="w-32 h-auto rounded-md object-cover" />
              <div className="flex flex-col justify-center ">
                <p className="text-sm">{text}</p>
              <p className="text-sm">{prix}</p>
              <p className="text-sm">{prix1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
