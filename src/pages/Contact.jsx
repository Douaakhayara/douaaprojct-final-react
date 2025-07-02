import React, { useState } from "react";
import { images } from "../constant/images";

const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log({ name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <section
        className="w-full h-[300px] bg-center bg-cover flex items-center justify-center text-white mb-10"
        style={{
          backgroundImage: `url(${images.blog2})`,
        }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg uppercase">Contact Us</h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">send us your message</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 h-[400px]">
            <iframe
              className="w-full h-full rounded-lg"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.287014009246!2d-7.620023285202172!3d33.59021504943801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2f6c91cb5f1%3A0x6d8e67149a9fc816!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sma!4v1656577898888!5m2!1sen!2sma"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
