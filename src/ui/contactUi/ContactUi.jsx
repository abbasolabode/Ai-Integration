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

            {/* Form  */}
            <form action="" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="mb-6">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">Start Your Project</h3>
                            <p className="mt-2 text-gray-600 max-w-2xl">Share a few details and our project managers will reach out with a tailored estimate and timeline.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="lg:col-span-2">
                                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full name</label>
                                <input
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    placeholder="Your full name"
                                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>

                            <div className="lg:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>

                            <div className="lg:col-span-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>

                            <div className="lg:col-span-2">
                                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">Project type</label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-white p-3 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    <option value="new-build">New build</option>
                                    <option value="renovation">Renovation</option>
                                    <option value="infrastructure">Infrastructure</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="lg:col-span-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Describe your project, goals, and any constraints"
                                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 shadow-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}
