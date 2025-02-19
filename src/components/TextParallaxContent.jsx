import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import TorchShowcase from "../ui-verse/torch-showcase/torch-showcase.tsx"
import SpaceButton from "../ui-verse/space-button/space-button.tsx"
// Import images from assets
import image1 from "../assets/images/scroll-up-images/csjmc-alumni-hero.png";
import image2 from "../assets/images/scroll-up-images/ctpr-hero.png";
// Import video file

import video1 from "../assets/videos/csjmc.mp4";
import video2 from "../assets/videos/ctprdu.mp4";
import video3 from "../assets/videos/excelitest.mp4";

const TextParallaxContentExample = () => {
    return (
        <>
            <div className="bg-black">
                <h1>some of my works</h1>
                {/* Project 1 */}
                {/* <TextParallaxContent
                imgUrl={image1}
                subheading="Complete Alumni Automation Platform"
                heading="Built for all of us."
            >
                <ExampleContent 
                    description="Complete Alumni Automation platform with admin panel."
                    liveLink="https://example.com/alumni-platform"
                />
            </TextParallaxContent> */}

                {/* Project 2 */}
                {/* <TextParallaxContent
                imgUrl={image2}
                subheading="Complete Journal Management System"
                heading="Never compromise."
            >
                <ExampleContent 
                    description="Complete journal management system with admin panel."
                    liveLink="https://example.com/journal-system"
                />
            </TextParallaxContent> */}


                {/* Project 1 with Video */}
                <TextParallaxContent
                    imgUrl={video1} // Pass the video URL here
                    // subheading="Complete Alumni Automation Platform"
                    // heading="Built for all of us."
                    isVideo={true} // Indicate that this is a video
                >
                    {/* <ExampleContent
                        description="Complete Alumni Automation platform with admin panel."
                        liveLink="https://csjmcalumni.in"
                    /> */}
                    <div className="w-full flex items-center justify-center">
                        <SpaceButton
                            websiteName="Alumni Management System"
                            buttonText="Live Link"
                            redirectLink="https://csjmcalumni.in"
                        />
                    </div>
                </TextParallaxContent>
                {/* Project 2 with Video */}
                <TextParallaxContent
                    imgUrl={video2} // Pass the video URL here
                    // subheading="Complete Journal Management System"
                    // heading="Never compromise."
                    isVideo={true} // Indicate that this is a video
                >
                    {/* <ExampleContent
                        description="Complete journal management system with admin panel."
                        liveLink="https://ctprdu.in"
                    /> */}
                    <div className="w-full flex items-center justify-center">
                        <SpaceButton
                            websiteName="Journal Management System"
                            buttonText="Live Link"
                            redirectLink="https://ctprdu.in"
                        />
                    </div>
                </TextParallaxContent>
                {/* Project 3 with Video */}
                <TextParallaxContent
                    imgUrl={video3} // Pass the video URL here
                    // subheading="Excelitest"
                    // heading="Test Automation with Excel Integration"
                    isVideo={true} // Indicate that this is a video
                >
                    {/* <ExampleContent
                        description="Excelitest - The test automation platform integrated with Excel files and quizzes."
                        liveLink="https://excelitest.vercel.app"
                    /> */}
                    <div className="w-full flex items-center justify-center">
                        <SpaceButton
                            websiteName="Excelitest"
                            buttonText="Live Link"
                            redirectLink="https://excelitest.vercel.app"
                        />
                    </div>
                </TextParallaxContent>










            </div>
            <div className="bg-black w-full h-[600px] flex justify-center items-start">
                <TorchShowcase />
            </div>
        </>
    );
};

// Constants
const IMG_PADDING = 12;

// TextParallaxContent Component
const TextParallaxContent = ({ imgUrl, subheading, heading, children, isVideo = false }) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} isVideo={isVideo} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

// StickyImage Component (Handles both images and videos)
const StickyImage = ({ imgUrl, isVideo }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
            style={{
                scale,
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
            }}
        >
            {isVideo ? (
                <motion.video
                    src={imgUrl}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover brightness-10"
                    style={{ opacity }}
                />
            ) : (
                <motion.div
                    style={{
                        backgroundImage: `url(${imgUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity,
                    }}
                    className="absolute inset-0"
                />
            )}
        </motion.div>
    );
};

// OverlayCopy Component (Adds animated text)
const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
            style={{
                y,
                opacity,
            }}
        >
            <p className="mb-2 text-black text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
            <p className="text-center text-black text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

// ExampleContent Component (For additional project details)
const ExampleContent = ({ description, liveLink }) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Project Details
        </h2>
        <div className="col-span-1 md:col-span-8">
            {/* <p className="mb-4 text-xl text-white md:text-2xl">
                {description}
            </p> */}
            <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
            >
                Visit Live Site <FiArrowUpRight className="inline" />
            </a>
        </div>
    </div>
);

export default TextParallaxContentExample;
