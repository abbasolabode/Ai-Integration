import { HiChartBar } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GoRocket } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const features = [
    {
        id: 1,
        icon: <HiChartBar className="h-6 w-6 text-gray-500" />,
        title: "Premium Quality Construction",
        description: "Exceptional craftsmanship and attention to detail that adds lasting value to your property."
    },

    {
        id: 2,
        icon: <BsStars className="h-6 w-6 text-gray-500" />,
        title: "Modern Building Solutions",
        description: "Innovative approaches to modern construction challenges."
    },

    {
        id: 3,
        icon: <MdOutlineElectricBolt className="h-6 w-6 text-gray-500" />,
        title: "Stress-Free Project Management",
        description: "Professional coordination and communication so you can focus on your business while we build."
    },

    {
        id: 4,
        icon: <GoRocket className="h-6 w-6 text-gray-500" />,
        title: "Value-Adding Results",
        description: "Construction projects that enhance property value and create lasting impressions for your business."
    },
]




export default function WhatBuildProDelivers() {
    return (
        <div>
            <div className="flex flex-col items-center text-center justify-center w-full">
                <h2 className="text-2xl  font-bold mb-4">What BuildPro Delivers for You</h2>
                <p className=" text-gray-600 max-w-2xl mx-auto">We transform your construction vision into reality with exceptional quality, innovation, and reliability.</p>
            </div>

            <div className="w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="shadow-gray-300 flex items-start p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <span className="bg-gray-200 rounded-full p-3 mr-4  text-gray-700">{feature.icon}</span>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/*  */}
            <div className="flex justify-center items-center pt-7">
                <Link to="/services" className="inline-block bg-gray-500/50 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300  inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all">
                    Learn More about our construction process <IoIosArrowRoundForward size={20} />
                </Link>
            </div>
        </div>
    )
}
