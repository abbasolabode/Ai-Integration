import { motion } from "framer-motion";
import { LuConstruction } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FaHelmetSafety } from "react-icons/fa6";

const cardData = [
  {
    id: 1,
    icon: <LuConstruction size={24} />,
    title: "Expert Construction",
    description: "Professional building services from foundation to finishing with premium quality standards.",
  },
  {
    id: 2,
    icon: <FaHelmetSafety size={24} />,
    title: "Safety",
    description: "Rigorous safety protocols and certified professionals ensuring secure construction environments.",
  },
  {
    id: 3,
    icon: <FiUsers size={24} />,
    title: "Experienced Team",
    description: "Skilled craftsmen and project managers delivering exceptional results on time and on budget.",
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
    y: 40,
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

export default function AboutCompanyCards() {
  return (
    <section className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 p-8"
      >
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            className="group bg-white p-4 md:p-5 rounded-lg shadow-sm border-gray-100 transition-all duration-300"
          >
            <motion.span
              whileHover={{
                rotate: 8,
                scale: 1.2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 12,
              }}
              className="inline-flex mb-4 text-stone-600 p-1.5 rounded bg-gray-200/50"
            >
              {card.icon}
            </motion.span>

            <h2 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">
              {card.title}
            </h2>

            <p className="text-gray-600 text-xs md:text-sm">
              {card.description}
            </p>

            {/* Subtle animated line */}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
              className="h-[2px] bg-blue-500 mt-4"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}