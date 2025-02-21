import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, mediaType = "video", brightness, title, description, liveLink }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      {/* Conditionally Render Video or Image */}
      {mediaType === "video" ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      ) : (
        <img
          src={src}
          alt={title}
          style={{ filter: `brightness(${brightness})` }}
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/80 transition-all hover:text-white"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Live Link ➡</p>
          </a>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          🚀 Engineering the Future of the Web
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          From innovative startups to enterprise solutions, I craft scalable, high-performance digital experiences with cutting-edge technology.
        </p>
      </div>

      {/* Main Bento Card */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/devplexity-edited.mp4"
          mediaType="video"
          title={<>dev<b>p</b>le<b>x</b>ity</>}
          description="An advanced web agency creating high-performance websites, mobile apps, and digital experiences for brands nationwide. 🚀"
          liveLink="https://devplexity.com"
        />
      </BentoTilt>

      {/* Grid of Bento Cards */}
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            mediaType="video"
            title={<>i'm s<b>a</b>h<b>e</b>bull<b>a</b>h.</>}
            description="Made my portfolio website with React.js, Tailwind CSS. 🚀"
            liveLink="https://zigma.com"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="https://cdn.dribbble.com/users/192882/screenshots/4659605/media/c291dcfccf93b83e58744c56060f440a.gif"
            mediaType="image"
            title={<>crypt<b>o</b>v<b>e</b>rs<b>e</b></>}
            description="A real-time crypto analytics platform providing insights into market trends, asset performance, and price fluctuations."
            liveLink="https://cryptobucks.com"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="/project-images/excelitest.png"
            mediaType="image"
            brightness="45%"
            title={<>e<b>xce</b>lit<b>e</b>st</>}
            description="A powerful AI-powered MCQ generator that streamlines test creation for educators, automating the process with Excel integration and real-time analytics."
            liveLink="https://excelitest.vercel.app"
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_2">
          <BentoCard
            src="https://media.tenor.com/9vRAkntogEMAAAAd/background.gif"
            mediaType="image"
            title={<>M<b>o</b>re co<b>m</b>ing s<b>o</b>on.</>}
            description="I am working on 2 projects that I will be launching soon. Stay tuned for more information."
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="/project-images/urbanhype.png"
            mediaType="image"
            brightness="30%"
            title={<>urb<b>a</b>nhyp<b>e</b></>}
            description="A powerful AI-powered MCQ generator that streamlines test creation for educators, automating the process with Excel integration and real-time analytics."
            liveLink="https://excelitest.vercel.app"
          />
        </BentoTilt>


      </div>

      {/* <BentoTilt className="border-hsla relative mb-7 mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/devplexity-edited.mp4"
          mediaType="video"
          title={<>j<b>o</b>urn<b>a</b>l m<b>a</b>n<b>a</b>gement <b>s</b>y<b>s</b>tem</>}
          description="Journal Mangement System"
          liveLink="https://devplexity.com"
        />
      </BentoTilt> */}
    </div>
  </section>
);

export default Features;
