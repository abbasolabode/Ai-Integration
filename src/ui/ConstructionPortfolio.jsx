import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Residential Excellence",
        description:
            "Custom home construction with attention to detail, quality materials, and modern building techniques for lasting results.",
        imageUrl: "/images/residential-building.jpg",
    },
    {
        id: 2,
        title: "Commercial Innovation",
        description:
            "Modern commercial buildings designed for functionality, efficiency, and aesthetic appeal using cutting-edge construction methods.",
        imageUrl: "/images/architect.jpg",
    },
    {
        id: 3,
        title: "Infrastructure Development",
        description:
            "Large-scale infrastructure projects including roads, bridges, and public facilities built to strict safety and quality standards.",
        imageUrl: "/images/infrastructure.jpg",
    },
    {
        id: 4,
        title: "Industrial Construction",
        description:
            "Specialized construction services for factories, warehouses, manufacturing plants, and industrial facilities designed for efficiency, durability, and operational excellence.",
        imageUrl: "/images/industrial-reno.jpg",
    },

    {
        id: 5,
        title: "Renovation & Remodeling",
        description:
            "Comprehensive renovation and remodeling solutions that transform existing spaces, improve functionality, and enhance the value and appearance of residential and commercial properties.",
        imageUrl: "/images/remodel.jpg",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
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
            ease: "easeOut",
        },
    },
};

export default function ConstructionPortfolio() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function responsible for moving backward
    const prevSlide = () => {
        const firstSlide = currentIndex === 0;
        const prev = firstSlide ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(prev);
    };

    // Function responsible for moving forward
    const nextSlide = () => {
        const lastSlide = currentIndex === projects.length - 1;
        const next = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(next);
    };

    return (
        <section className="text-center mb-8 pt-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto flex flex-col items-center"
            >
                <span className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    Construction portfolio
                </span>

                <h2 className="text-2xl font-bold">
                    Our Project Excellence
                </h2>

                <p className="text-gray-600 mt-3 max-w-2xl mx-auto px-8">
                    Explore our showcase of successful construction projects,
                    highlighting our commitment to quality, innovation, and client
                    satisfaction.
                </p>

                <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 250 }}
                >
                    <Link
                        to="/projects"
                        className="flex items-center mt-4 text-blue-600 hover:underline"
                    >
                        Scroll horizontally to see our work
                        <motion.span
                            animate={{ x: [0, 6, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <IoIosArrowRoundForward />
                        </motion.span>
                    </Link>
                </motion.div>
            </motion.div>

            <div className="relative w-full pt-10 px-4 overflow-hidden bg-white p-4 ">
                {/* Slider */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    animate={{
                        x: -(currentIndex * 336),
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                    }}
                    className="relative border-gray-100 rounded-lg p-4 flex space-x-4 w-max"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 30,
                            }}
                            className="shadow-lg w-80 rounded-2xl overflow-hidden shrink-0"
                        >
                            <motion.img
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-auto object-contain"
                                src={project.imageUrl}
                                alt={project.title}
                            />

                            <div className="p-4">
                                <h2 className="font-semibold text-lg">
                                    {project.title}
                                </h2>

                                <p className="text-sm text-gray-600 mt-2">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Buttons */}
                <div className="flex justify-center space-x-8 ml-10 mt-4">
                    <motion.button
                        onClick={prevSlide}
                        whileHover={{
                            scale: 1.1,
                            y: -3,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                        className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-4 rounded-full"
                    >
                        <IoIosArrowRoundBack size={20} />
                    </motion.button>

                    <motion.button
                        onClick={nextSlide}
                        whileHover={{
                            scale: 1.1,
                            y: -3,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                        className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-4 rounded-full ml-2"
                    >
                        <IoIosArrowRoundForward size={20} />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}