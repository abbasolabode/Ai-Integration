import { IoIosArrowRoundForward } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        img: "/images/life-of-construction-worker.jpg",
        datePosted: "June 12, 2025",
        overlayText: "Business",
        header: "Wearable Safety Tech: Protecting Workers While..",
        description:
            "Every worker deserves to go home safe at the end of their shift. That fundamental principle drives the evolution of workplace safety technology, where protecting people has always been the primary goal. What's remarkable about today's wearable safety technology is how it achieves this mission while also delivering tangible business benefits.",
    },
    {
        id: 2,
        img: "/images/helmet.jpg",
        overlayText: "Innovation",
        datePosted: "June 5, 2025",
        header: "Smart PPE Revolution: How Safety Technology is",
        description:
            "The realm of personal protective equipment (PPE) is undergoing a significant transformation, driven by advancements in smart textiles and sensor technology. Traditional PPE, designed as a passive barrier against workplace hazards, is evolving into intelligent, interconnected systems that actively monitor conditions and provide real-time alerts. This shift is creating safer work environments and preventing accidents before they occur.",
    },

    {
        id: 3,
        img: "/images/this-is-engineering.jpg",
        overlayText: "Process",
        datePosted: "June 12, 2025",
        header: "Wearable Safety Tech: Protecting Workers While...",
        description:
            "Every worker deserves to go home safe at the end of their shift. That fundamental principle drives the evolution of workplace safety technology, where protecting people has always been the primary goal. What's remarkable about today's wearable safety technology is how it achieves this mission while also delivering tangible business benefits.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function HomeBlog() {
    const navigate = useNavigate();

    // Programmatic navigation
    const moveTo = () => {
        navigate("/news");
    };

    return (
        <section className="w-full py-12 md:py-24 px-4 md:px-12 container mx-auto max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12"
            >
                {/* Flex container */}
                <div className="min-[700px]:flex items-center">
                    <div className="">
                        <p className="flex items-center gap-2 mb-3 text-black font-medium">
                            <span>
                                <IoNewspaperOutline size={20} />
                            </span>
                            Our Blog
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                            Latest Updates
                        </h2>

                        <p className="text-gray-800 max-w-xl">
                            Explore our latest insights on smart textile technology,
                            industry trends, and innovation.
                        </p>
                    </div>

                    {/* Button for navigation to blog page */}
                    <div className="mt-4 md:mt-0">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-10 px-4 py-2 group border-black text-black hover:bg-black hover:text-white"
                            onClick={moveTo}
                        >
                            View All Posts
                            <span>
                                <IoIosArrowRoundForward />
                            </span>
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Slider section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {/* blog posts */}
                {blogPosts?.map((blogPost) => (
                    <motion.div
                        key={blogPost?.id}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.25 },
                        }}
                        className="rounded-xl bg-card shadow-sm hover:shadow-lg transition-shadow duration-300 h-full overflow-hidden"
                    >
                        {/* Image */}
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                backgroundImage: `url(${blogPost?.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="rounded-xl min-h-40 flex justify-center items-center"
                        >
                            <p className="bg-white/10 text-white backdrop-blur-lg border border-white/20 w-30 text-[14px] p-1.5 text-center rounded-full">
                                {blogPost.overlayText}
                            </p>
                        </motion.div>

                        <div className="p-6 min-h-80">
                            <div className="flex flex-col justify-center space-y-8 min-h-full text-black">
                                <p className="text-gray-500 text-sm mb-2 tracking-wider">
                                    {blogPost.datePosted}
                                </p>

                                <h4 className="text-xl font-bold mb-2 line-clamp-2">
                                    {blogPost.header}
                                </h4>

                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    {blogPost.description}
                                </p>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link className="inline-flex cursor-pointer w-40 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-gray-400/50 bg-background h-10 px-4 py-2 text-black hover:bg-black hover:text-white">
                                        Read more
                                        <IoIosArrowRoundForward />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}