import './App.css';
import { useState, useEffect } from 'react';
import CutoutTextLoader from './components/CutoutTextLoader'; // Ensure the loader component is imported
import TextParallaxContent from './components/TextParallaxContent';
import Home from './Pages/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loader visible for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <CutoutTextLoader
          height="450px"
          background="white"
          imgUrl="/imgs/random/11.jpg" // Ensure this path points to an actual image
        />
      ) : (
        <>
          <Home />
          <TextParallaxContent />
        </>
      )}
    </>
  );
}

export default App;
