import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../GetInTouch";

//
const cards = [
    {
        id: 1,
        image: "/images/helmet.jpg",
        overlayHeaderText: "Wearable Safety Tech: Protecting Workers While Delivering Real ROI",
        smallOverlayText: "Featured",
        publishedDate: "June 12, 2026",
        desc: "Discover how wearable safety technology puts worker wellbeing first while delivering measurable business benefits through injury prevention and enhanced workplace safety.",
        url: "/",
    },
    {
        id: 2,
        image: "/images/sensor.jpg",
        headerText: "Wearable Safety Tech: Protecting Workers While Delivering Real ROI",
        smallOverlayText: "Innovation",
        publishedDate: "June 12, 2026",
        desc: "Discover how wearable safety technology puts worker wellbeing first while delivering measurable business benefits through injury prevention and enhanced workplace safety.",
        url: "/",
    },
    {
        id: 3,
        image: "/images/technology.jpg",
        headerText: "Wearable Safety Tech: Protecting Workers While Delivering Real ROI",
        smallOverlayText: "Technology",
        publishedDate: "June 12, 2026",
        desc: "Discover how wearable safety technology puts worker wellbeing first while delivering measurable business benefits through injury prevention and enhanced workplace safety.",
        url: "/",
    },
    {
        id: 4,
        image: "/images/2-workers-talking.jpg",
        headerText: "Wearable Safety Tech: Protecting Workers While Delivering Real ROI",
        smallOverlayText: "Process",
        publishedDate: "June 12, 2026",
        desc: "Discover how wearable safety technology puts worker wellbeing first while delivering measurable business benefits through injury prevention and enhanced workplace safety.",
        url: "/",
    },
    {
        id: 5,
        image: "/images/engines.jpg",
        headerText: "Wearable Safety Tech: Protecting Workers While Delivering Real ROI",
        smallOverlayText: "Innovation",
        publishedDate: "June 12, 2026",
        desc: "Discover how wearable safety technology puts worker wellbeing first while delivering measurable business benefits through injury prevention and enhanced workplace safety.",
        url: "/",
    },
];


export default function NewsUi() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section className="w-full min-h-screen ">
            <div className="w-full mx-auto px-4 pt-24 pb-12 bg-linear-to-b from-black to-gray-900 text-white">
                <div className="flex flex-col space-y-5 ">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">WRLDS News & Insights</h1>
                        <p className="text-xl text-gray-300 mb-6">The latest trends and news in sensor-integrated textiles and smart technology</p>
                    </div>
                </div>
            </div>

            {/* Cards section */}
            <div className="mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card1 */}
                    {cards.map(card => (
                        <div key={card.id} className={`grid grid-rows-[200px,1fr] rounded-lg text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-125  ${card.id === 1 ? "col-span-1 md:col-span-2 lg:col-span-3 grid md:grid-cols-2 h-full" : ""}`}>
                            <div style={{
                                backgroundImage: `url(${card?.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                                className="  h-full bg-black/20 flex flex-col items-center justify-center">
                                <p className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white inline-block">{card.smallOverlayText}</p>
                                {card.overlayHeaderText && <h2 className="text-xl font-bold mb-2 line-clamp-2 text-center text-white/90">{card.overlayHeaderText}</h2>}
                            </div>

                            <div className="p-6 flex flex-col items-start">
                                <h2 className="text-xl font-bold mb-2 line-clamp-2">{card.headerText}</h2>
                                <p className="text-gray-500 text-sm mb-2">Published: {card.publishedDate}</p>
                                <p className="text-gray-700 mb-4 line-clamp-3">{card.desc}</p>
                                {/*  */}
                                <Link to={`/newsDetails/${card.id}`} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-stone-400/20 border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 group mt-auto"> Read More <IoIosArrowRoundForward /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Get in Touch component */}
            <>
                <GetInTouch />
            </>
        </section>
    )
};

/* to={`/blogInfo/${item.id}`} */

/* bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center */
/* className=" col-span-1 md:col-span-2 lg:col-span-3 " */


[
  {
    "id": 1,
    "header": "Safety Outcome"
  },
  {
    "id": 2,
    "header": "Human Impact"
  },
  {
    "id": 3,
    "header": "Business Benefit"
  },

]