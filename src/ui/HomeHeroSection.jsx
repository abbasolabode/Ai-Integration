import { GoArrowRight } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const backgroundImage = {
  backgroundImage: "url('./images/construction-site.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomeHeroSection() {
  return (
    <section
      className="relative overflow-hidden w-full min-h-175 flex items-center justify-center"
    >
      {/* Background */}
      <motion.div
        style={backgroundImage}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black/65"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 max-w-5xl text-center"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-white text-xs uppercase tracking-[0.25em] mb-8"
        >
          Trusted Construction Solutions
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]"
        >
          Building Tomorrow's
          <span className="block text-stone-300">
            Infrastructure Today.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-stone-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Professional construction services with cutting-edge technology
          and expert craftsmanship for residential, commercial, and
          industrial projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <Link
              to="/projects"
              className="group bg-white text-black font-semibold tracking-wide flex items-center justify-center gap-2 px-8 py-4 rounded-xl"
            >
              Explore Projects

              <motion.span
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GoArrowRight size={18} />
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <Link
              to="/contactUs"
              className="group border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold tracking-wide flex items-center justify-center gap-2 px-8 py-4 rounded-xl"
            >
              Contact Us

              <motion.span
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LuMessageSquare size={18} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}