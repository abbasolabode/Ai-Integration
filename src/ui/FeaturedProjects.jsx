import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSlider } from "../hooks/useSlider";

const movingSlider = [
    {
        id: 1,
        title: "PRESTIGE HOMES DEVELOPMENT",
        description: "Luxury Residential Complex",
        img: "/images/building-underconsruction.jpg",
        tags: ["Residential", "Luxury", "Modern", "Eco-Friendly"],
        bodyText: "Premium residential community featuring 200 luxury units with modern amenities, landscaped grounds, and energy-efficient construction.",
        link: "/project/prestige-homes",
    },
    {
        id: 2,
        title: "STATE UNIVERSITY SYSTEM",
        description: "Educational Campus Development",
        img: "/images/university.jpg",
        tags: ["Educational", "Campus", "Multi-Building", "Student-Housing"],
        bodyText: "Innovative educational campus development featuring state-of-the-art facilities and sustainable design.",
        link: "/project/state-university-system",
    },
    {
        id: 3,
        title: "METROPOLITAN DEVELOPMENT",
        description: "Mixed-Use Urban Development",
        img: "/images/worker.jpg",
        tags: ["High-Rise", "Commercial", "Mixed-Use", "Sustainable"],
        bodyText: "Innovative mixed-use urban development featuring high-rise buildings, commercial spaces, and sustainable design.",
        link: "/project/metropolitan-development",
    },
    {
        id: 4,
        title: "TECHMANUFACTURING CORP",
        description: "Industrial Facility Construction",
        img: "/images/worker-at-a-building.jpg",
        tags: ["Industrial", "Commercial", "Modern", "Eco-Friendly"],
        bodyText: "State-of-the-art industrial facility construction with modern amenities and sustainable design.",
        link: "/project/techmanufacturing-corp",
    },
];

export default function FeaturedProjects() {
    const { prevSlide, nextSlide, currentIndex } = useSlider(movingSlider);

    return (
        <section className="w-full py-12 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col items-center justify-center">
                <span className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    Featured Projects
                </span>

                <div className="flex flex-col space-y-3 justify-center items-center">
                    <h2 className="text-3xl font-bold mb-3 text-center">
                        Building Excellence Across Industries
                    </h2>

                    <p className="text-gray-600 text-center">
                        Explore our diverse portfolio of construction projects delivering
                        quality craftsmanship across residential, commercial, and
                        infrastructure developments.
                    </p>

                    <span className="text-sm mx-1 text-blue-600 flex items-center">
                        <MdKeyboardArrowLeft size={20} />
                        Swipe to navigate
                        <MdKeyboardArrowRight size={20} />
                    </span>
                </div>
            </div>

            {/* Slider */}
            <div className="w-full relative h-162.5 overflow-hidden mt-10">
                <div className="absolute inset-0 flex items-center justify-center">
                    {movingSlider.map((slider, index) => {
                        const offset =
                            (index - currentIndex + movingSlider.length) %
                            movingSlider.length;

                        let translateX = 0;
                        let scale = 0.8;
                        let opacity = 0.4;
                        let zIndex = 1;

                        if (offset === 0) {
                            translateX = 0;
                            scale = 1;
                            opacity = 1;
                            zIndex = 30;
                        } else if (offset === 1) {
                            translateX = 320;
                            scale = 0.9;
                            opacity = 0.7;
                            zIndex = 20;
                        } else if (offset === movingSlider.length - 1) {
                            translateX = -320;
                            scale = 0.9;
                            opacity = 0.7;
                            zIndex = 20;
                        } else {
                            translateX = 700;
                            opacity = 0;
                            scale = 0.7;
                            zIndex = 0;
                        }

                        return (
                            <div
                                key={slider.id}
                                className="absolute max-w-md min-w-md"
                                style={{
                                    transform: `translateX(${translateX}px) scale(${scale})`,
                                    opacity,
                                    zIndex,
                                    transition:
                                        "all 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
                                }}
                            >
                                <div className="rounded-lg overflow-hidden min-h-125 border-gray-100 shadow-sm hover:shadow-md flex flex-col w-full space-y-8 border bg-white">
                                    {/* Background Image */}
                                    <div
                                        className="relative  min-h-40 z-10 flex flex-col items-center justify-center space-y-8 bg-black/90 brightness-50 contrast-125"
                                        style={{
                                            backgroundImage: slider.img
                                                ? `url(${slider.img})`
                                                : "none",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                    >
                                        <h2 className="text-2xl font-bold text-white mb-2 text-center px-4">
                                            {slider.title}
                                        </h2>

                                        <div className="w-12 h-1 bg-white mb-2"></div>

                                        <p className="text-white/90 text-sm">
                                            {slider.description}
                                        </p>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col grow space-y-5">
                                        <h2 className="text-xl font-bold mb-1 text-gray-800">
                                            {slider.description}
                                        </h2>

                                        <p className="text-gray-500 text-sm font-medium">
                                            {slider.title}
                                        </p>

                                        <p className="text-gray-600 text-sm mb-4 grow">
                                            {slider.bodyText}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-col gap-3 p-8">
                                        <div className="flex flex-wrap gap-2">
                                            {slider.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block px-2 py-1 bg-stone-500/20 text-stone-600 text-xs font-medium rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            to={slider.link}
                                            className="text-stone-600 hover:underline"
                                        >
                                            Learn more <span>&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-4 rounded-full z-30"
                >
                    <MdKeyboardArrowLeft />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-4 rounded-full z-30"
                >
                    <MdKeyboardArrowRight />
                </button>
            </div>
        </section>
    );
};
