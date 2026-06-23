import React from "react";
import { FaWarehouse } from "react-icons/fa";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { SyncLoader } from "react-spinners";
import { FaHelmetSafety } from "react-icons/fa6";
import { IoShieldCheckmarkOutline, IoTimeOutline } from "react-icons/io5";
import GoToHome from "../../resuables/GoToHome";
import { useForm } from "react-hook-form";
import { useContactMessage } from "../../hooks/useContactMessage";
import ContactInput from "../../resuables/ContactInput";
import ContactSubmitButton from "../../resuables/ContactSubmitButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 1.1, ease: "easeOut", delay },
    }),
};

const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (delay = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

// ─── Helper: Scroll-triggered section wrapper ──────────────────────────────────

function InViewSection({ children, className, variants, custom, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            variants={variants || fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={custom ?? delay ?? 0}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const selectOptions = [
    "Renovation & Remodelling",
    "Infrastructure",
    "Industrial construction",
    "Residential construction",
    "Commercial building",
];

const cards = [
    {
        id: 1,
        icon: <CiPhone className="w-11 h-11 rounded-lg bg-black text-yellow-600 flex items-center justify-center mb-4" />,
        text1: "Call us",
        text2: "+1 (555) 123-4567",
        text3: "Mon-Sat, 8:00AM - 6:00PM",
    },
    {
        id: 2,
        icon: <CiLocationOn className="w-11 h-11 rounded-lg bg-black text-yellow-600 flex items-center justify-center mb-4" />,
        text1: "Visit Site",
        text2: "120 Foundry Ave, Suite 400",
        text3: "Chicago, IL, 60607",
    },
    {
        id: 3,
        icon: <CiMail className="w-11 h-11 rounded-lg bg-black text-yellow-600 flex items-center justify-center mb-4" />,
        text1: "Email us",
        text2: "hello@buildrigt.com",
        text3: "We respond within 24 hours",
    },
    {
        id: 4,
        icon: <IoTimeOutline className="w-11 h-11 rounded-lg bg-black text-yellow-600 flex items-center justify-center mb-4" />,
        text1: "Working Hours",
        text2: "Mon – Fri 8AM – 6PM",
        text3: "Saturday 8AM – 2PM",
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
        icon: <FaHelmetSafety className="w-10 h-10" />,
        header: "On Time, On Budget",
        text: "Transparent timelines and no hidden surprises.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ContactUi() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();
    const { mutate: sendFormData, isPending } = useContactMessage();

    const cardsRef = useRef(null);
    const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

    const trustRef = useRef(null);
    const trustInView = useInView(trustRef, { once: true, margin: "-60px" });

    const formRef = useRef(null);
    const formInView = useInView(formRef, { once: true, margin: "-60px" });

    const onSubmit = (formData) => {
        if (!formData) return;
        sendFormData(formData, { onSettled: () => reset() });
    };

    return (
        <div className="min-h-screen pt-10 flex flex-col space-y-6 pb-10 overflow-x-hidden">

            {/* ── Hero Section ── */}
            <section className="max-w-6xl px-4 sm:px-6 lg:px-8 text-white pt-10">
                <div className="flex flex-col space-y-3">
                    <InViewSection variants={fadeIn} delay={0}>
                        <GoToHome />
                    </InViewSection>

                    <InViewSection variants={fadeUp} delay={0.1}>
                        <p className="w-45 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-medium mb-5">
                            Let's Build Together
                        </p>
                    </InViewSection>
                </div>

                <InViewSection variants={fadeUp} delay={0.2}>
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl">
                        Whether you're planning a new build, renovation, or large-scale infrastructure
                        project — our team is ready to bring your vision to life with precision and care.
                    </p>
                </InViewSection>
            </section>

            {/* ── Info Cards ── */}
            <section className="mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8 z-10 pt-10">
                <motion.div
                    ref={cardsRef}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={cardsInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={cardVariant}
                            whileHover={{
                                y: -6,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.10)",
                                transition: { duration: 0.35, ease: "easeOut" },
                            }}
                            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6 cursor-default"
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={cardsInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: card.id * 0.12 }}
                            >
                                {card.icon}
                            </motion.div>
                            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
                                {card.text1}
                            </p>
                            <p className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                                {card.text2}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">{card.text3}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── Trust / Project Details Banner ── */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 space-y-5 w-full">
                <motion.div
                    ref={trustRef}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={trustInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div variants={fadeUp} className="mb-6">
                        <p className="text-xs uppercase tracking-wider text-yellow-600 font-bold">
                            Request A Quote
                        </p>
                        <h2 className="w-full text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
                            Tell us About Your Project
                        </h2>
                        <p className="text-gray-600 mt-3 text-[15px] sm:text-base leading-relaxed">
                            Share a few details and our project managers will get back to you with a
                            tailored estimate, timeline, and next steps.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={scaleIn}
                        custom={0.2}
                        className="space-y-4 p-4 rounded-lg bg-stone-300"
                    >
                        <div className="grid grid-cols-1 md:flex items-start gap-8 p-4 rounded-lg bg-gray-50 border border-gray-100">
                            {projectDetails.map((detail, i) => (
                                <motion.div
                                    key={detail.id}
                                    variants={fadeUp}
                                    custom={i * 0.12}
                                    className="flex items-start gap-4"
                                >
                                    <motion.span
                                        whileHover={{ rotate: 8, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                        className="shrink-0 w-10 h-10 rounded-md bg-gray-900 text-yellow-400 flex items-center justify-center"
                                    >
                                        {detail.icon}
                                    </motion.span>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                            {detail.header}
                                        </h3>
                                        <p className="text-sm text-gray-600">{detail.text}.</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── Form Section ── */}
            <motion.form
                ref={formRef}
                action=""
                onSubmit={handleSubmit(onSubmit)}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                variants={fadeIn}
                className="w-full overflow-hidden max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 lg:px-8 mt-6"
            >
                <motion.div
                    variants={scaleIn}
                    custom={0.1}
                    className="bg-white rounded-3xl shadow-[0_40px_80px_rgba(17,24,39,0.12)] p-6 sm:p-10 lg:p-14"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                        {/* Left: Form Fields */}
                        <motion.div
                            variants={slideLeft}
                            custom={0.2}
                            className="lg:col-span-7 flex flex-col justify-center min-w-0"
                        >
                            <div className="mb-6">
                                <motion.h3
                                    variants={fadeUp}
                                    custom={0.25}
                                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900"
                                >
                                    Start Your Project
                                </motion.h3>
                                <motion.p
                                    variants={fadeUp}
                                    custom={0.35}
                                    className="mt-3 text-gray-600 max-w-3xl text-lg"
                                >
                                    Tell us about your vision and we'll respond with a tailored estimate,
                                    timeline, and next steps.
                                </motion.p>
                            </div>

                            <motion.div
                                variants={staggerContainer}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {[
                                    <ContactInput
                                        label="Full Name"
                                        id="fullname"
                                        disabled={isSubmitting || isPending}
                                        register={register}
                                        placeholder="Your full name"
                                        type="text"
                                        rules={{ required: "Full Name is required" }}
                                        error={errors}
                                    />,
                                    <ContactInput
                                        label="Email"
                                        id="email"
                                        disabled={isSubmitting || isPending}
                                        register={register}
                                        placeholder="Enter your email"
                                        type="text"
                                        rules={{ required: "Email is required" }}
                                        pattern={{
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Please enter a valid email address",
                                        }}
                                        error={errors}
                                    />,
                                    <ContactInput
                                        label="Phone Number"
                                        id="phone"
                                        disabled={isSubmitting || isPending}
                                        register={register}
                                        placeholder="Phone number"
                                        type="text"
                                        rules={{ required: "Phone number is required" }}
                                        error={errors}
                                        pattern={{
                                            value: /^\+?[1-9]\d{1,14}$/,
                                            message: "Please enter a valid phone number",
                                        }}
                                    />,
                                ].map((inputEl, i) => (
                                    <motion.div key={i} variants={cardVariant}>
                                        {inputEl}
                                    </motion.div>
                                ))}

                                {/* Project Type Select */}
                                <motion.div variants={cardVariant} className="md:col-span-2 lg:col-span-1">
                                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
                                        Project type
                                    </label>
                                    <select
                                        disabled={isSubmitting || isPending}
                                        id="projectType"
                                        {...register("projectType", { required: "Project type is required" })}
                                        name="projectType"
                                        className={`mt-2 block w-full rounded-2xl border ${errors.projectType
                                            ? "border-red-300 focus:ring-red-200"
                                            : "border-gray-200 focus:ring-yellow-200"
                                            } bg-white p-4 text-lg focus:outline-none`}
                                    >
                                        <option className="text-xs" value="" hidden>
                                            Select project type
                                        </option>
                                        <option className="text-xs" value="new-build">
                                            Build
                                        </option>
                                        {selectOptions.map((option, i) => (
                                            <option className="text-xs" key={i} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {errors?.projectType && (
                                        <p className="mt-2 min-h-[1.25rem] text-sm text-red-600">
                                            {errors?.projectType?.message || "\u00A0"}
                                        </p>
                                    )}
                                </motion.div>

                                {/* Message */}
                                <motion.div variants={cardVariant}>
                                    <ContactInput
                                        label="Message"
                                        id="message"
                                        disabled={isSubmitting || isPending}
                                        register={register}
                                        placeholder="Write us what you want us to build for you"
                                        type="text"
                                        rules={{ required: "Message is required" }}
                                        error={errors}
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Submit button */}
                            <motion.div
                                variants={fadeUp}
                                custom={0.5}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <ContactSubmitButton
                                    isPending={isPending}
                                    isSubmitting={isSubmitting}
                                    SyncLoader={SyncLoader}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Right: Info Panel */}
                        <motion.aside
                            variants={slideRight}
                            custom={0.3}
                            className="lg:col-span-5 rounded-2xl p-8 flex flex-col justify-center min-w-0 bg-gradient-to-br from-yellow-50 via-white to-white"
                        >
                            <motion.div variants={fadeUp} custom={0.4} className="mb-6">
                                <p className="text-sm uppercase font-semibold text-yellow-600">
                                    Let's build together
                                </p>
                                <h4 className="mt-3 text-2xl font-extrabold text-gray-900">
                                    Consultation & Planning
                                </h4>
                                <p className="mt-2 text-gray-600">
                                    Free initial consultation, detailed proposals, and expert project planning
                                    to keep you on time and budget.
                                </p>
                            </motion.div>

                            <motion.div variants={staggerContainer} className="mt-4 space-y-4">
                                {[
                                    {
                                        icon: <CiPhone className="w-10 h-10 text-yellow-600" />,
                                        label: "Call us",
                                        value: "+1 (555) 123-4567",
                                    },
                                    {
                                        icon: <CiMail className="w-10 h-10 text-yellow-600" />,
                                        label: "Email",
                                        value: "hello@buildrigt.com",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={cardVariant}
                                        whileHover={{ x: 4 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                        className="flex items-start gap-3"
                                    >
                                        <motion.span
                                            initial={{ scale: 0.7, opacity: 0 }}
                                            animate={formInView ? { scale: 1, opacity: 1 } : {}}
                                            transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                                        >
                                            {item.icon}
                                        </motion.span>
                                        <div>
                                            <p className="font-semibold">{item.label}</p>
                                            <p className="text-gray-600">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.aside>
                    </div>
                </motion.div>
            </motion.form>
        </div>
    );
}