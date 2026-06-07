import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

/* Array of objects */
const navLinks = [
  {
    id: 1,
    label: "Home",
    path: "/home",
  },
  {
    id: 2,
    label: "About Us",
    path: "/about",
  },
  {
    id: 3,
    label: "Customer Cases",
    path: "/customerCases",
  },
  {
    id: 4,
    label: "Learn More",
    path: "/learnMore",
  },
  {
    id: 5,
    label: "News",
    path: "/news",
  },
  {
    id: 6,
    label: "Careers",
    path: "/careers",
  },
  {
    id: 7,
    label: "Contact Us",
    path: "/contactUs",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black text-white min-[834px]:flex items-center justify-around">
      {/* Top bar */}
      <div className="flex justify-between items-center p-4">
        <Link className="tracking-wider" to="/home">
          Wrlds
        </Link>

        {/* Toggle button */}
        <button className="min-[834px]:hidden" onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="overflow-hidden bg-black"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul className="py-4">
              {navLinks.map((navLink, index) => (
                <motion.li
                  key={navLink.id}
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 30, scale: 0.95 }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                  }}
                  className={`pl-4 text-sm py-4 ${navLink.id === 7 ? "bg-stone-500 rounded-md" : ""
                    }`}
                >
                  <NavLink
                    to={navLink.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => isActive ? "text-stone-400 tracking-widest font-semibold" : "text-white"}
                  >
                    {navLink.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>


      {/* Desktop Navigation */}
      {/* The large screen navigation is displayed here */}
      <nav className="hidden min-[834px]:block">
        <ul className="flex space-x-6 lg:space-x-10">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className={`${navLink.id === 7 ? "bg-gray-500/50 rounded-md px-3 py-1" : ""}`}>
              <NavLink
                to={navLink.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-400 tracking-widest font-semibold "
                    : "text-white"
                }
              >
                {navLink.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}