import { useState, useEffect } from 'react';

const Example = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading state, e.g., fetch data or delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Set for 3 seconds

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, []);

    return (
        <div>
            {isLoading ? (
                <CutoutTextLoader
                    height="450px"
                    background="white"
                    imgUrl="/imgs/random/11.jpg" // Change to correct image path
                />
            ) : (
                <div>Your actual content here</div> // Replace with your actual content
            )}
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const CutoutTextLoader = ({ height, background, imgUrl }) => {
    return (
        <div className="relative" style={{ height }}>
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            />
            <div
                style={{ background }}
                className="absolute inset-0 animate-pulse z-10"
            />
            <span
                className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    fontSize: 'clamp(3rem, 12vw, 10rem)',
                    lineHeight: height,
                }}
            >
                Loading...
            </span>
        </div>
    );
};

export default Example;
