import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="z-9999 fixed my-8 bottom-0 left-1/2 transform -translate-x-1/2 mx-auto flex w-fit rounded-full border-2 border-white bg-slate-100 p-1"
        >
            <Tab setPosition={setPosition} target="/">Home</Tab>
            <Tab setPosition={setPosition} target="/works">Works</Tab>
            <Tab setPosition={setPosition} target="/milestones">Milestones</Tab>
            <Tab setPosition={setPosition} target="/bio">Bio</Tab>
            <Tab setPosition={setPosition} target="/upcoming">Upcoming</Tab>

            <Cursor position={position} />
        </ul>
    );
};

// eslint-disable-next-line react/prop-types
const Tab = ({ children, setPosition, target }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            <Link to={target} className="block">{children}</Link>
        </li>
    );
};

// eslint-disable-next-line react/prop-types
const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-99 h-7 rounded-full bg-black md:h-12"
        />
    );
};

export default SlideTabs;
