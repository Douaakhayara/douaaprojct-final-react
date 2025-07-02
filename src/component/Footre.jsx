import { useState } from "react";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter, FaGoogle } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-16 pb-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 pt-[100px]">

      
        <div>
          <h3 className="text-white font-semibold uppercase mb-4">Get in Touch</h3>
          <p className="text-gray-400 leading-relaxed">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018
            or call us on <br />
          </p>
            <span className="flex gap-4 pt-5  ">
<CiInstagram />
<FaTwitter />
<IoLogoFacebook />
<FaGoogle />
            </span>
        </div>

        <div>
          <h4 className="text-white font-semibold uppercase mb-4">Categories</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Men</a></li>
            <li><a href="#" className="hover:text-white">Women</a></li>
            <li><a href="#" className="hover:text-white">Dresses</a></li>
            <li><a href="#" className="hover:text-white">Sunglasses</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-white font-semibold uppercase mb-4">Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Search</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold uppercase mb-4">Help</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Track Order</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-white font-semibold uppercase mb-4">Newsletter</h4>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-sm text-sm text-gray-800 focus:outline-none border-1 bg-white"
            />
            <button
             
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-sm uppercase text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-12 border-t border-gray-700 pt-6">
        Copyright © 2018 MassTechnologist.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
