import React from "react";
import { FaWarehouse } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaHelmetSafety } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import GoToHome from "../../resuables/GoToHome";
import { useForm } from "react-hook-form";
import { useContactMessage } from "../../hooks/useContactMessage";


const selectOptions = ["Renovation & Remodelling", "Infrastructure", "Industrial construction", "Residential construction", "Commercial building"]

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
    // eslint-disable-next-line no-unused-vars
    const { handleSubmit, register, reset, formState: { errors, isSubmitting }, } = useForm();
    const { mutate: sendFormData, isPending } = useContactMessage()



    const onSubmit = (formData) => {
        if (!formData) return;
        console.log(formData)
        sendFormData(formData)
    }
    return (
        <div className="min-h-screen pt-10 flex flex-col space-y-6 pb-10 overflow-x-hidden" >
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


            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 space-y-5 w-full ">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    <div className="w-full">
                        <p className="text-xs uppercase tracking-wider text-yellow-600 font-bold">Request A Quote</p>
                        <h2 className="w-full text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">Tell us About Your Project</h2>
                        <p className="text-gray-600 mt-3 text-[15px] sm:text-base leading-relaxed">Share a few details and our project managers will get back to you with a tailored estimate, timeline, and next steps</p>
                    </div>
                </div>


                <div className="space-y-4  p-4 rounded-lg bg-stone-300 ">
                    <div className="grid grid-cols-1  md:flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
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
            <form action="" onSubmit={handleSubmit(onSubmit)} className="w-full overflow-hidden max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
                <div className="bg-white rounded-3xl shadow-[0_40px_80px_rgba(17,24,39,0.12)] p-6 sm:p-10 lg:p-14">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Left: Form (wide) */}
                        <div className="lg:col-span-7 flex flex-col justify-center min-w-0">
                            <div className="mb-6">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Start Your Project</h3>
                                <p className="mt-3 text-gray-600 max-w-3xl text-lg">Tell us about your vision and we'll respond with a tailored estimate, timeline, and next steps.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2 lg:col-span-1">
                                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full name</label>
                                    <input
                                        disabled={isSubmitting || isPending}
                                        {...register("fullname")}
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        placeholder="Your full name"
                                        className={`mt-2 block w-full rounded-2xl border ${errors.fullname ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-yellow-200"} bg-gray-50 p-4 text-lg placeholder-gray-400 focus:outline-none`}
                                    />
                                    <p className="mt-2 min-h-[1.25rem] text-sm text-red-600">{errors.fullname?.message || "\u00A0"}</p>
                                </div>

                                <div className="md:col-span-2 lg:col-span-1">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        disabled={isSubmitting || isPending}
                                        {...register("email")}
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className={`mt-2 block w-full rounded-2xl border ${errors.email ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-yellow-200"} bg-gray-50 p-4 text-lg placeholder-gray-400 focus:outline-none`}
                                    />
                                    <p className="mt-2 min-h-[1.25rem] text-sm text-red-600">{errors.email?.message || "\u00A0"}</p>
                                </div>

                                <div className="md:col-span-2 lg:col-span-1">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                                    <input
                                        disabled={isSubmitting || isPending}
                                        id="phone"
                                        {...register("phone")}
                                        name="phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        className={`mt-2 block w-full rounded-2xl border ${errors.phone ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-yellow-200"} bg-gray-50 p-4 text-lg placeholder-gray-400 focus:outline-none`}
                                    />
                                    <p className="mt-2 min-h-[1.25rem] text-sm text-red-600">{errors.phone?.message || "\u00A0"}</p>
                                </div>

                                <div className="md:col-span-2 lg:col-span-1">
                                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">Project type</label>
                                    <select
                                        disabled={isSubmitting || isPending}
                                        id="projectType"
                                        {...register("projectType")}
                                        name="projectType"
                                        className={`mt-2 block w-full rounded-2xl border ${errors.projectType ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-yellow-200"} bg-white p-4 text-lg focus:outline-none`}
                                    >
                                        <option className="text-xs" value="new-build">Build</option>
                                        {selectOptions.map((option, i) => (
                                            <option className="text-xs" key={i} value={option}>{option}</option>

                                        ))}
                                    </select>
                                    <p className="mt-2 min-h-[1.25rem] text-sm text-red-600">{errors.projectType?.message || "\u00A0"}</p>
                                </div>

                                <div className="md:col-span-2 lg:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project message</label>
                                    <textarea
                                        disabled={isSubmitting || isPending}
                                        id="message"
                                        {...register("message")}
                                        name="message"
                                        rows="6"
                                        placeholder="Describe your project, goals, and any constraints"
                                        className={`mt-2 block w-full rounded-2xl border ${errors.message ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-yellow-200"} bg-gray-50 p-4 text-lg placeholder-gray-400 focus:outline-none`}
                                    />
                                    <p className="mt-2 min-h-[1.25rem] text-sm text-red-600">{errors.message?.message || "\u00A0"}</p>
                                </div>
                            </div>
                            {/* Submit button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || isPending}
                                    className="inline-flex items-center px-10 py-3 border border-transparent text-lg font-bold rounded-full text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-2xl"
                                >
                                    {isPending || isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </div>

                        {/* Right: Decorative / Info panel */}
                        <aside className="lg:col-span-5 rounded-2xl p-8 flex flex-col justify-center min-w-0 bg-gradient-to-br from-yellow-50 via-white to-white">
                            <div className="mb-6">
                                <p className="text-sm uppercase font-semibold text-yellow-600">Let's build together</p>
                                <h4 className="mt-3 text-2xl font-extrabold text-gray-900">Consultation & Planning</h4>
                                <p className="mt-2 text-gray-600">Free initial consultation, detailed proposals, and expert project planning to keep you on time and budget.</p>
                            </div>

                            <div className="mt-4 space-y-4">
                                <div className="flex items-start gap-3">
                                    <CiPhone className="w-10 h-10 text-yellow-600" />
                                    <div>
                                        <p className="font-semibold">Call us</p>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CiMail className="w-10 h-10 text-yellow-600" />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-gray-600">hello@buildrigt.com</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </form>

        </div>
    )
}
