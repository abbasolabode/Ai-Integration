import { motion } from "framer-motion";
import { FaHelmetSafety } from "react-icons/fa6";
import { BsBuildings, BsBuilding } from "react-icons/bs";
import { TiSpanner } from "react-icons/ti";

const serviceCards = [
    {
        id: 1,
        icon: <BsBuilding />,
        title: "Residential Construction",
        image: "/images/construction-worker.jpg",
        description: "Custom home building and renovation services tailored to your unique vision and needs.",
    },
    {
        id: 2,
        icon: <BsBuildings />,
        title: "Commercial Development",
        image: "/images/crane-workers.jpg",
        description: "Large-scale commercial projects delivered with precision and efficiency.",
    },
    {
        id: 3,
        icon: <FaHelmetSafety />,
        title: "Safety & Compliance",
        image: "/images/safety-boots.jpg",
        description: "Specialized solutions for complex industrial projects with strict safety and quality standards.",
    },
    {
        id: 4,
        icon: <TiSpanner />,
        title: "Project Management",
        image: "/images/architect.jpg",
        description: "Comprehensive project management services to ensure timely and budget-conscious delivery of construction projects.",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export default function ConstructionServiceCards() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex pt-10 px-6 flex-col justify-center items-center space-y-4"
            >
                <p className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    Construction Services
                </p>

                <p className="text-gray-600 mt-4 text-center max-w-3xl px-6">
                    Our comprehensive construction services deliver exceptional quality
                    across residential, commercial, and industrial projects with expert
                    craftsmanship and modern technology.
                </p>
            </motion.div>

            {/* Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 p-4"
            >
                {serviceCards.map((card) => (
                    <motion.div
                        key={card.id}
                        variants={cardVariants}
                        whileHover={{
                            y: -12,
                            scale: 1.03,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 18,
                        }}
                        style={{
                            backgroundImage: `url(${card.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            opacity: 0.8,
                        }}
                        className=" brightness-50 opacity-25 relative z-10 flex flex-col p-7 h-full justify-between bg-black/50 rounded-xl overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 p-4 bg-black/50 rounded-xl">
                            {/* Icon */}
                            <motion.span
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 8,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 12,
                                }}
                                className="text-white text-2xl inline-flex p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg mb-4"
                            >
                                {card.icon}
                            </motion.span>

                            {/* Title */}
                            <motion.h3
                                whileHover={{ x: 3 }}
                                className="font-semibold text-white text-xl mb-2"
                            >
                                {card.title}
                            </motion.h3>

                            {/* Description */}
                            <p className="text-white/90 text-sm leading-relaxed">
                                {card.description}
                            </p>

                            {/* Animated line */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.4 }}
                                className="h-[2px] bg-white/80 mt-5"
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}