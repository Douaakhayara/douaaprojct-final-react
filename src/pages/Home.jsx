import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { images } from "../constant/images";
import tem from "../assets/images/images/banner-08.jpg";
import { Link } from "react-router-dom";



const slides = [
  { id: 1, title: "LEATHER BAGS", image: images.carousel },
  { id: 2, title: "LEATHER BAGS", image: images.carousel2 },
  { id: 3, title: "LEATHER BAGS", image: images.carousel3 },
];

const services = [
  { id: 1, image: images.card1 },
  { id: 2, image: images.card2 },
  { id: 3, image: images.card3 },
];

const featuredProducts = [
  { id: 1, image: images.shop },
  { id: 2, image: images.shop1 },
  { id: 3, image: images.shop2 },
  { id: 4, image: images.shop3 },
  { id: 5, image: images.shop4 },
  { id: 6, image: images.shop5 },
  { id: 7, image: images.shop5 },
  { id: 8, image: images.gallry },
];
const devs = [
  {
    id: 1,
    image: images.blog,
    title: "New York SS 2018 Street Style: By Annina Mislin",
    description: "by fashe-theme Admin on Dec 28,2017 Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
 


  },
  

  {
    id: 2,
    image: images.blog2,
    title: "New York SS 2018 Street Style: By Annina Mislin",
    description: "by fashe-theme Admin on Dec 28,2017 Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
 

  },
  {
    id: 3,
    image: images.blog3,
     title: "New York SS 2018 Street Style: By Annina Mislin",
    description: "by fashe-theme Admin on Dec 28,2017 Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
 

  },
];
const infoItems = [
  {
    id: 1,
    title: "Free Delivery Worldwide",
    description: "We deliver your orders anywhere in the world without extra charges.",
  },
  {
    id: 2,
    title: "30 Days Return",
    description: "Simply return it within 30 days for an exchange.",
  },
  {
    id: 3,
    title: "Store Opening",
    description: "Shop open from Monday to Sunday.",
  },
];



const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

 const bgImage = tem;
  const videoUrl = "https://cdn.shopify.com/s/files/1/0533/2089/files/bg-video-01.mp4";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  

  return (
    <div>
      
      <section className="mt-16 relative max-w-7xl mx-auto overflow-hidden rounded-lg h-[500px]">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-2">{slides[currentSlide].title}</h2>
          <p className="text-xl max-w-xl border-t-4 text-white w-100 pt-5">new collection 2018</p>
         <Link to={"/blog"}>
          <button className="rounded-[20px] p-2 px-10 bg-white text-black">Shop new</button>
         </Link>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full"
        >
          <FiChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full"
        >
          <FiChevronRight size={28} />
        </button>
      </section>

     
      <section className="mt-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {services.map(({ id, name, image }) => (
          <div key={id} className="p-6 border rounded-lg shadow hover:shadow-lg transition relative">
            <img src={image} alt={name} className="w-full h-64 object-cover hover:scale-95" />
    <Link to={"/shop"}>
            <button className="p-2 px-10 bg-white text-black absolute bottom-10 right-30 hover:bg-red-500">watch</button>
    </Link>
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
          </div>
        ))}
      </section>

      
      <section className="max-w-7xl mx-auto mt-20 px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-center">OUR PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map(({ id, image }) => (
          <div key={id} className="overflow-hidden shadow rounded-lg relative group">
            <Link to={"/shop"}>
              <img src={image} alt="" className="w-full h-100 object-cover transition-opacity duration-300" />
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/20 text-black font-bold p-2 px-10 rounded">
                new shop
              </button>
            </Link>
              <div className="p-4">
                <p>Boxy2 T-Shirt with Roll Sleeve</p>
                <h1>$20.00</h1>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* // */}
      <section className="relative h-[150vh] w-full text-center text-white mt-20  ">
        <div
          className="absolute inset-0 bg-center bg-cover flex flex-col justify-center items-center bg-fixed "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">LOOKBOOK</h2>
          <button
            onClick={() => setShowVideo(true)}
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition "
          >
            PLAY Video
          </button>
        </div>

        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              aria-label="Close video"
            >
              ×
            </button>
            <video src={videoUrl} controls autoPlay className="max-w-full max-h-full rounded" />
          </div>
        )}
        {/* // */}
      </section>
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
      {devs.map(({ id, image, title, description }) => (
        <div
          key={id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img src={image} alt={title} className="w-full h-48 object-cover hover:scale-99" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </div>

<section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center tracking-wide">
        @ FOLLOW US ON INSTAGRAM
      </h2>

      <div className="flex justify-center mb-12">
        <p className="text-gray-500 text-lg font-medium max-w-xl text-center">
          Mirum est notare quam littera gothica
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {infoItems.map(({ id, title, description }) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>













    </div>
  );
};

export default Home;
