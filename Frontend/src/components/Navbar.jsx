import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFacebook, FaInstagram, FaTwitter, FaDribbble, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-[#0C2B4B] relative shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex lg:w-1/4 w-full items-center p-2 bg-yellow-500">
            <img src="" className="p-4" alt="logo" />
          </div>
          <div className="lg:hidden flex justify-end w-full">
            <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
              {menuOpen ? <FaTimes size="1.5em" /> : <FaBars size="1.5em" />}
            </button>
          </div>
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:flex lg:ml-auto lg:mr-auto flex flex-col lg:flex-row items-center text-base justify-center lg:w-2/4`}>
            <Link to="/" className="mr-5 hover:text-yellow-500 text-white font-bold">Home</Link>
            <Link to="/doctors" className="mr-5 hover:text-yellow-500 text-white font-bold">Doctors</Link>
            <Link to="/news" className="mr-5 hover:text-yellow-500 text-white font-bold">News</Link>
            <Link to="/pages" className="mr-5 hover:text-yellow-500 text-white font-bold">Pages</Link>
            <Link to="/contact" className="mr-5 hover:text-yellow-500 text-white font-bold">Contact</Link>
          </nav>
          <div className="hidden lg:flex lg:w-1/4 w-full justify-end items-center">
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaSearch size="1.2em" /></a>
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaFacebook size="1.2em" /></a>
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaInstagram size="1.2em" /></a>
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaTwitter size="1.2em" /></a>
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaDribbble size="1.2em" /></a>
            <a href="#" className="btn bg-yellow-500 text-white font-bold py-2 px-4 ml-4 hover:bg-yellow-600 transition duration-300">Scan</a>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center bg-[#0C2B4B] p-4">
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaSearch size="1.2em" /></a>
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaFacebook size="1.2em" /></a>
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaInstagram size="1.2em" /></a>
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaTwitter size="1.2em" /></a>
            <a href="#" className="text-white p-2 hover:text-yellow-500"><FaDribbble size="1.2em" /></a>
            <a href="#" className="btn bg-yellow-500 text-white font-bold py-2 px-4 ml-4 hover:bg-yellow-600 transition duration-300 mt-4">Scan</a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
