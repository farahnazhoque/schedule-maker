import React, { useEffect } from 'react';
import LandingPageComponent from '../components/LandingPageComponent';

function LandingPage() {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return <LandingPageComponent />;
}

export default LandingPage;
