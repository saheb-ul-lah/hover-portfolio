import { motion } from "framer-motion";

const BouncyCardsFeatures = () => {
    return (
        <section className="bg-neutral-950 px-4 py-12 text-slate-800">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
                <h2 className="max-w-lg text-white text-4xl font-bold md:text-5xl">
                    Grow faster with our
                    <span className="text-slate-400"> all in one solution</span>
                </h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
                >
                    Learn more
                </motion.button>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Mathematical Forum</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">
                            A journal platform for Dibrugarh University. <br />
                            Visit: <a href="https://mathematical-forum.org/" className="underline text-white">mathematical-forum.org</a>
                        </span>
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>Pharmaceutical Society DU</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-orange-50">
                            Alumni portal for the Pharmaceutical Department of Dibrugarh University. <br />
                            Visit: <a href="https://pharmasocietydu.com/" className="underline text-white">pharmasocietydu.com</a>
                        </span>
                    </div>
                </BounceCard>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>CSJMC Alumni Portal</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-emerald-50">
                            A MERN-based alumni platform for CSJMC of Dibrugarh University. <br />
                            Visit: <a href="https://csjmcalumni.in/" className="underline text-white">csjmcalumni.in</a>
                        </span>
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Excelitest</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-red-50">
                            A state-level hackathon-winning project for automating test creation from Excel files. <br />
                            Visit: <a href="https://excelitest.vercel.app/" className="underline text-white">excelitest.vercel.app</a>
                        </span>
                    </div>
                </BounceCard>
            </div>
        </section>
    );
};

// eslint-disable-next-line react/prop-types
const BounceCard = ({ className, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};

// eslint-disable-next-line react/prop-types
const CardTitle = ({ children }) => {
    return (
        <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    );
};

export default BouncyCardsFeatures;
