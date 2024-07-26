import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div>
      <section
        className="relative flex items-center h-[850px] bg-cover bg-top"
        style={{ backgroundImage: `url(/images/backgroundImage.jpg)` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="container mx-auto text-center relative">
          <h3 className="text-white text-2xl">
            <Typewriter
              words={['Best Options for you']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <h1 className="text-white text-5xl font-bold italic py-5">
            <Typewriter
              words={['A healthy dose of solutions']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <div>
            <a href="#" className="btn bg-yellow-500 text-white font-bold py-2 px-6 mr-2">Analyse your Healh Stats</a>
            <a href="#" className="btn bg-[#0C2B4B] text-white font-bold py-2 px-6"> Find medicines near you</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
