import { useState } from "react";
import { BiMicrochip } from "react-icons/bi";
import { LiaIndustrySolid } from "react-icons/lia";
import { LuHandshake } from "react-icons/lu";
import { motion } from "framer-motion";

const cardData = [
    {
        id: 1,
        icon: <BiMicrochip className="h-16 w-16" size={22} />,
        title: "WRLDS Proprietary Modules",
        description: "Our core technology components developed in-house",
        miniCardData: {
            title: "WRLDS Proprietary Modules",
            subtitle: "Our core technology components developed in-house",
            description: "Our proprietary modules are designed to provide unique solutions and competitive advantages in the market."
        }
    },
    {
        id: 2,
        icon: <LiaIndustrySolid className="h-16 w-16" size={22} />,
        title: "Vetted Off-the-Shelf Hardware",
        description: "Carefully selected complement our proprietary technology",
        miniCardData: {
            title: "Vetted Off-the-Shelf Hardware",
            subtitle: "Carefully selected complement our proprietary technology",
            description: "We carefully select off-the-shelf components to complement our proprietary technology and ensure optimal performance."
        }
    },
    {
        id: 3,
        icon: <LuHandshake className="h-16 w-16" size={22} />,
        title: "Vetted Production Partners",
        description: "Expert manufacturing partners for quality and reliability",
        miniCardData: {
            title: "Vetted Production Partners",
            subtitle: "Expert manufacturing partners for quality and reliability",
            description: "We collaborate with expert manufacturing partners to ensure the highest quality and reliability in our products."
        }
    }
];

// Animation variants
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const iconVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const headerVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const miniCardVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 10,
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 10,
        transition: {
            duration: 0.2,
        },
    },
};

export default function OurApproach() {
    const [isHovered, setIsHovered] = useState(null);

    return (
        <section className="flex flex-col gap-8 py-10 px-4 md:px-8 lg:px-16">
            {/* Header Section */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={headerVariants}
            >
                <div className="flex flex-col justify-center items-center">
                    <motion.h2
                        variants={headerVariants}
                        className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                        Our Approach
                    </motion.h2>
                    <motion.h2
                        variants={headerVariants}
                        className="text-3xl font-bold mb-4 text-center"
                    >
                        How our technology works
                    </motion.h2>
                    <motion.p
                        variants={headerVariants}
                        className="px-2 text-center text-gray-600 max-w-3xl mx-auto"
                    >
                        WRLDS builds hardware and software with proprietary and off-the-shelf modules, allowing us to develop completely unique solutions at high speed and lower risk.
                    </motion.p>
                </div>
            </motion.div>

            {/* Cards Section */}
            <div className="pt-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-center w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Cards */}
                    {cardData.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={cardVariants}
                            onMouseEnter={() => setIsHovered(card.id)}
                            onMouseLeave={() => setIsHovered(null)}
                            className="relative"
                        >
                            {/* Main Card */}
                            <motion.div
                                whileHover={{
                                    y: -8,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut",
                                    },
                                }}
                                className="bg-linear-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Icon with animation */}
                                    <motion.div
                                        variants={iconVariants}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 5,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                        }}
                                        className="bg-gray-50 rounded-full p-4 mb-4"
                                    >
                                        {card.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                        className="text-lg font-bold mb-2"
                                    >
                                        {card.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.4 }}
                                        className="text-sm text-gray-600"
                                    >
                                        {card.description}
                                    </motion.p>
                                </div>
                            </motion.div>

                            {/* Mini Card on Hover */}
                            {isHovered === card.id && (
                                <motion.div
                                    variants={miniCardVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className={`w-full min-[700px]:w-100 border-gray-800/20 absolute top-65 left-0 right-0 shadow-gray-600/30 shadow-xl p-6 rounded-xl  bg-white z-50 ${card.id === 3 ? "right-50" : ""}`}
                                >
                                    <motion.div
                                        className="flex flex-col justify-center gap-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1, duration: 0.3 }}
                                    >
                                        <motion.h2
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1, duration: 0.3 }}
                                            className="text-md font-semibold tracking-wide whitespace-nowrap"
                                        >
                                            {card.miniCardData.title}
                                        </motion.h2>

                                        <motion.h4
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.15, duration: 0.3 }}
                                            className="text-sm font-medium text-gray-700 "
                                        >
                                            {card.miniCardData.subtitle}
                                        </motion.h4>

                                        <motion.p
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.3 }}
                                            className="text-sm tracking-wide font-light text-gray-600 leading-relaxed"
                                        >
                                            {card.miniCardData.description}
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}