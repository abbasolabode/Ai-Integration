import React from "react";
import { FaWarehouse } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaHelmetSafety } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import GoToHome from "../../resuables/GoToHome";


const cards = [
    {
        id: 1,
        icon: <CiPhone className="w-11 h-11 rounded-lg bg-yellow-400/15 text-yellow-600 flex items-center justify-center mb-4" />,
        text1: "Call us",
        text2: "+1 (555) 123-4567",
        text3: "Mon-Sat, 8:00AM - 6:00PM",
    },

    {
        id: 2,
        icon: <CiLocationOn className="w-11 h-11 rounded-lg bg-yellow-400/15 text-yellow-600 flex items-center justify-center mb-4" />,
        text1: "Visit Site",
        text2: "120 Foundry Ave, Suit 400",
        text3: "Chicago, IL, 60607",
    },

    {
        id: 3,
        icon: <CiMail className="w-11 h-11 rounded-lg bg-yellow-400/15 text-yellow-600 flex items-center justify-center mb-4" />,
        text1: "email us",
        text2: "hello@buildrigt.com",
        text3: "We respond within 24 hours",
    },

    {
        id: 4,
        icon: <IoTimeOutline className="w-11 h-11 rounded-lg bg-yellow-400/15 text-yellow-600 flex items-center justify-center mb-4" />,
        text1: "Working Hours",
        text2: "Mon - Fr 8AM - 6PM",
        text3: "Saturday 8AM - 2PM",
    },
];


const projectDetails = [
    {
        id: 1,
        icon: <FaWarehouse className="w-10 h-10" />,
        header: "25+ Years of Experience",
        text: "Trusted by hundreds of homeowners and businesses.",
    },
    {
        id: 2,
        icon: <IoShieldCheckmarkOutline className="w-10 h-10" />,
        header: "Licensed & Insured",
        text: "Full compliance with safety and building standards.",
    },

    {
        id: 3,
        icon: < FaHelmetSafety className="w-10 h-10" />,
        header: "On time, on budget",
        text: "Transparent timelines and no hidden surprises.",
    },
]

export default function ContactUi() {
    return (
        <div className="min-h-screen pt-10 flex flex-col space-y-6" >
            <section className="max-w-6xl  px-4 sm:px-6 lg:px-8 text-white pt-10 ">
                <div className="flex flex-col space-y-3">
                    <GoToHome />
                    <p className="w-45 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-medium mb-5">Let's Build Together</p>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl">Whether you're planning a new build, renovation, or large-scale infrastructure project — our team is ready to bring your vision to life with precision and care.</p>
            </section>


            <section className="mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8 z-10 pt-10">

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {cards.map(card => (
                        <div key={card.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6">
                            {card.icon}
                            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">{card.text1}</p>
                            <p className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">{card.text2}</p>
                            <p className="text-sm text-gray-600 mt-1">{card.text3}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 space-y-5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-yellow-600 font-bold">Request A Quote</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">Tell us About Your Project</h2>
                        <p className="text-gray-600 mt-3 text-[15px] sm:text-base leading-relaxed">Share a few details and our project managers will get back to you with a tailored estimate, timeline, and next steps</p>
                    </div>
                </div>


                <div className="space-y-4  p-4 rounded-lg bg-stone-300 ">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                        {/* Icon */}
                        {projectDetails.map(projectDetail => (
                            <React.Fragment>
                                <span className="shrink-0 w-10 h-10 rounded-md bg-gray-900 text-yellow-400 flex items-center justify-center">{projectDetail.icon}</span>
                                <div className="">
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{projectDetail.header}</h3>
                                    <p className="text-sm text-gray-600">{projectDetail.text}.</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </section>

        </div>
    )
}
