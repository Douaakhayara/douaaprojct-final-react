import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";


const Navbar = () => {
 
  return (
    <>
    <header className="w-full fixed top-0 left-0 bg-white shadow z-50">
        <div className="w-full bg-gray-100 text-gray-700 text-sm px-6 py-2 flex justify-between items-center ">
            <span className="flex gap-4 ">
<CiInstagram />
<FaTwitter />
<IoLogoFacebook />
<FaGoogle />
            </span>
        <span>Free shipping for standard order over $100</span>
        <select name="USD" id="USD">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">JPR</option>
            <option value="">USD</option>
            <option value="">USD</option>
        </select>
        <span>contact@example.com</span>
      </div>
       
             <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 gap-5">
          <nav className="flex justify-center items-center gap-[30vw] navbar" >
          <div className="text-2xl font-bold tracking-wide uppercase text-gray-900 flex">
            Fashe <span className="text-red-600 size-7">.</span>
          </div>
          
      <ul className="w-full py-2 flex gap-10 ">
        <Link className=" hover:border-b-2" to={{ pathname: '/' }} >
          <li>Home</li>
        </Link>

        <Link className=" hover:border-b-2" to={{ pathname: '/blog' }}>
          <li>Blog</li>
        </Link>
        <Link className=" hover:border-b-2" to={{ pathname: '/about' }}>
          <li>About</li>
        </Link>
        <Link className=" hover:border-b-2" to={{ pathname: '/shop' }}>
          <li>Shop</li>
        </Link>
                <Link className="text-red-500 hover:border-b-2" to={{ pathname: '/factuer' }}>
          <li>Feactur</li>
        </Link>
                <Link className=" hover:border-b-2" to={{ pathname: '/contact' }}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
</div>
      </header>
    
    






    </>
  );
};

export default Navbar;
