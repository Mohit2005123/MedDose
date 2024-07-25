import React from 'react';
const Hero = () => {
  return (
    <div>
      <section className="flex items-center h-[850px] bg-cover bg-top" style={{ backgroundImage:`url(/images/backgroundImage.jpg)` }}>
                    <div className="container mx-auto text-center">
                        <h3 className="text-white text-2xl">Best Options for you</h3>
                        <h1 className="text-white text-5xl font-bold italic py-5">A healthy dose of solutions</h1>
                        <div>
                            <a href="#" className="btn bg-yellow-500 text-white font-bold py-2 px-6 mr-2">Contact Us</a>
                            <a href="#" className="btn bg-[#0C2B4B] text-white font-bold py-2 px-6">See Doctors</a>
                        </div>
                    </div>
                </section>
    </div>
  );
};

export default Hero;