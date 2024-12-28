import { ReactLenis } from "lenis/dist/lenis-react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
    useAnimate,
} from "framer-motion";
// import { SiSpacex } from "react-icons/si";
// import { FiArrowDown, FiArrowRight, FiMapPin } from "react-icons/fi";
import { FiArrowDown, FiCoffee, FiMapPin, FiCode, FiStar } from "react-icons/fi";
import { useTypewriter } from 'react-simple-typewriter';
import { useRef, useEffect } from "react";

// Hero images lifting up 
import signSaheb from "../assets/images/extras/saheb-fake-signature.png";
// import centerImg from "../assets/images/scroll-up-images/excelitest-hero.png";
import heroImg1 from "../assets/images/scroll-up-images/mathematical-forum-hero.png";
import heroImg2 from "../assets/images/scroll-up-images/csjmc-alumni-hero.png";
import heroImg3 from "../assets/images/scroll-up-images/pharma-society-hero.png";
import heroImg4 from "../assets/images/scroll-up-images/ctpr-hero.png";


const SmoothScrollHero = () => {
    return (
        <div className="bg-zinc-950">
            <ReactLenis
                root
                options={{
                    // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
                    lerp: 0.05,
                    //   infinite: true,
                    //   syncTouch: true,
                }}
            >
                {/* <Nav /> */}
                <Hero />
                {/* <Schedule /> */}
            </ReactLenis>
        </div>
    );
};

const Nav = () => {
    return (
        <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
            {/* Replace the icon with the CenterImage */}
            <motion.div
                className="w-20 h-20 bg-contain bg-center"
                style={{
                    backgroundImage: `url(${signSaheb})`,
                    filter: "invert(100%)",
                }}
            />
            <button
                onClick={() => {
                    document.getElementById("launch-schedule")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                className="flex items-center gap-1 text-md text-white"
            >
                Scroll Down <FiArrowDown />
            </button>
        </nav>

    );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
            className="relative w-full"
        >
            <Nav />
            <CenterImage />

            <ParallaxImages />

            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>
    );
};
const CenterImage = () => {
    const { scrollY } = useScroll();
    const [scope, animate] = useAnimate();

    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 500],
        ["170%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    const [text] = useTypewriter({
        words: [
            "Hello World!",
            "I am Saheb Mansuri.",
            "Welcome to my portfolio!",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    useEffect(() => {
        animate(scope.current, { y: [20, 0], opacity: [0, 1] }, { duration: 0.5, delay: 0.2 });
    }, [animate, scope]);

    return (
        <motion.div
            className="sticky top-0 h-screen w-full flex items-center justify-center"
            style={{
                clipPath,
                backgroundSize: "cover",
                opacity,
                backgroundImage: `url(https://i.pinimg.com/originals/4a/34/99/4a3499c6b5cca368ec4e3717f9077114.gif)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="relative flex flex-col items-center" ref={scope}>
                <motion.div
                    className="text-center p-6 text-white rounded-lg shadow-lg"
                    style={{
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <motion.h1
                        className="text-4xl font-bold mb-4 tracking-wide flex items-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span style={{fontFamily:"Montserrat"}}>{text}</span>
                        <span className="text-accent ml-1">|</span>
                    </motion.h1>
                    <p style={{fontFamily:"Montserrat"}} className="text-lg">Explore my digital universe</p>
                </motion.div>

                <div className="flex justify-center mt-8 gap-6">
                    <IconButton icon={<FiCode />} tooltip="Code" />
                    <IconButton icon={<FiStar />} tooltip="Favorites" />
                    <IconButton icon={<FiCoffee />} tooltip="Coffee" />
                </div>
            </div>
        </motion.div>
    );
};

const IconButton = ({ icon, tooltip }) => (
    <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="text-2xl p-3 bg-white/10 text-white rounded-full cursor-pointer backdrop-blur-sm"
    >
        {icon}
    </motion.div>
);

const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            <ParallaxImg
                src={heroImg1}
                alt="And example of a space launch"
                start={-200}
                end={200}
                className="w-1/3"
            />
            <ParallaxImg
                src={heroImg2}
                alt="An example of a space launch"
                start={200}
                end={-250}
                className="mx-auto w-2/3"
            />
            <ParallaxImg
                src={heroImg3}
                alt="Orbiting satellite"
                start={-200}
                end={200}
                className="ml-auto w-1/3"
            />
            <ParallaxImg
                src={heroImg4}
                alt="Orbiting satellite"
                start={0}
                end={-500}
                className="ml-24 w-5/12"
            />
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const ParallaxImg = ({ className, alt, src, start, end }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            ref={ref}
            style={{ transform, opacity, borderRadius: "10px", border: "1px solid aliceBlue" }}
        />
    );
};

const Schedule = () => {
    return (
        <section
            id="launch-schedule"
            className="mx-auto max-w-5xl px-4 py-48 text-white"
        >
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
            >
                Launch Schedule
            </motion.h1>
            <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
            <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
            <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
            <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
            <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
            <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
            <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
        </section>
    );
};

// eslint-disable-next-line react/prop-types
const ScheduleItem = ({ title, date, location }) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
        >
            <div>
                <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
                <p className="text-sm uppercase text-zinc-500">{date}</p>
            </div>
            <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
                <p>{location}</p>
                <FiMapPin />
            </div>
        </motion.div>
    );
};

export default SmoothScrollHero;