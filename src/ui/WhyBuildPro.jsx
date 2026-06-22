import { FiBarChart } from "react-icons/fi";
import { BsExclamationTriangle } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";


const cardData = [
    {
        id: 1,
        icon: <FiBarChart size={26} />,
        title: "1.4 Trillion USD",
        description: "Global construction market size, representing massive opportunity for quality construction services"
    },
    {
        id: 2,
        icon: <BsExclamationTriangle size={26} />,
        title: "25+ Years",
        description: "of combined experience in our expert construction team, delivering exceptional results across all project types."
    },
    {
        id: 3,
        icon: <CiTimer size={26} />,
        title: "98%",
        description: " Client satisfaction rate with our construction projects completed on time and within budget"
    }
]


export default function WhyBuildPro() {
    return (
        <section className="py-12 px-4 w-full">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Why BuildPro Construction?</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">In an industry where quality matters most, we bring expertise, reliability, and innovation to build your vision.</p>
            </div>

            {/* cards */}
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {cardData.map((card => (
                        <div key={card.id} className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all">
                            {/* Icon */}
                            <span className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                                {card.icon}
                            </span>
                            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">{card.title}</h3>
                            <p className="text-gray-700 ">{card.description}</p>
                        </div>
                    )))
                    }

                </div>
            </div>
        </section>
    )
}
