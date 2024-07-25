import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h2 className="font-bold mb-2">Company</h2>
          <ul>
            <li className="mb-2"><a href="#about" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#company" className="hover:underline">Company</a></li>
            <li className="mb-2"><a href="#press" className="hover:underline">Press & Blog</a></li>
            <li className="mb-2"><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="#faq" className="hover:underline">Faq</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h2 className="font-bold mb-2">Courses</h2>
          <ul>
            <li className="mb-2"><a href="#winter" className="hover:underline">Winter driving</a></li>
            <li className="mb-2"><a href="#seniors" className="hover:underline">Program for seniors</a></li>
            <li className="mb-2"><a href="#adult" className="hover:underline">Adult in car lessons</a></li>
            <li className="mb-2"><a href="#defensive" className="hover:underline">Defensive driving</a></li>
            <li className="mb-2"><a href="#stick" className="hover:underline">Stick shift lessons</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h2 className="font-bold mb-2">Useful Links</h2>
          <ul>
            <li className="mb-2"><a href="#home" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#drupal" className="hover:underline">Drupal Themes</a></li>
            <li className="mb-2"><a href="#wordpress" className="hover:underline">WordPress Themes</a></li>
            <li className="mb-2"><a href="#support" className="hover:underline">Support</a></li>
            <li className="mb-2"><a href="#services" className="hover:underline">Services</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h2 className="font-bold mb-2">DREAMS</h2>
          <p>Address: 15 Division Street, New York, NY 12032, United States of America</p>
          <p>Phone: +0 (123) 456789</p>
          <p>Email: Kaseo@gmail.com</p>
          <p>Fax: +8 (123) 456 789</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2021 All rights reserved By Al Siam</p>
      </div>
    </footer>
  );
};

export default Footer;
