import React, { useEffect } from 'react';
import './App.css';
import LineImage from './assets/Line 1.png';

function App() {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling on unmount, if needed
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className="video-background">
        <video
          playsInline
          autoPlay
          muted
          loop
          className="min-w-full min-h-full object-cover"
        >
          <source src="./src/assets/LandingPage.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3'>
        <div className="col-span-2 relative z-2 text-black pt-[65vh] pb-[10vh] pr-[20vw] pl-[5vw] font-serif lg:text-4xl md:text-3xl sm:text-2xl">
            Plan and Co.
            <div className='lg:text-lg md:text-md sm:text-sm'>
              <br></br>
              <p>Streamlined time management, designed for life's</p>
              <p>multifaceted tempo. Harmonize education, work,</p>
              <p>self-care, and play with an intuitive, bespoke scheduler.</p>
            </div>
        </div>

        <div className='relative z-2 text-black pt-[50vh] pr-[1vw] pl-[22vw] font-serif lg:text-2xl md:text-lg sm:text-sm'>
          <button>
            Home
          </button>
          <div className="pt-[2vh] pl-[2vw]">
            <img src={LineImage} alt="Line" className="object-cover h-10 w-2" />
          </div>
          <button>
            About
          </button>
          <div className="pt-[2vh] pl-[2vw]">
            <img src={LineImage} alt="Line" className="object-cover h-10 w-2" />
          </div>
          <button>
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

