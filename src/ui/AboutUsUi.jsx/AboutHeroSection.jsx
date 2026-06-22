import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import GetInTouch from "../GetInTouch";
import { useEffect } from "react";
import { useMoveToHomePage } from "../../hooks/useMoveToHomePage";


const team = [
    {
        id: 1,
        name: "Felix von Heland",
        image: "/images/avatar-felix.png",
        position: "CEO and Founder",
        desc: "Leading WRLDS Technologies with a vision to transform the future of smart textiles.",
    },

    {
        id: 2,
        name: "Niek Bijman",
        image: "/images/avatar-neik.png",
        position: "Software Lead",
        desc: "Specializing in cloud infrastructure and APIs for seamless data integration.",
    },

    {
        id: 3,
        name: "Chengjie Li",
        image: "/images/avatar-li.png",
        position: "Hardware Lead",
        desc: "Expert in embedded systems engineering, leading our hardware development efforts.",
    },
    {
        id: 4,
        name: "Love",
        image: "/images/avatar-love.png",
        position: "COO",
        desc: "Overseeing daily operations and ensuring business objectives are met effectively.",
    },
]


const ourValues = [
    {
        id: 1,
        boldText: "Innovation:",
        text: "Innovation: We push boundaries to create solutions that weren't possible before."
    },
    {
        id: 2,
        boldText: "Quality:",
        text: " We're committed to excellence in every sensor, algorithm, and solution we deliver."
    },
    {
        id: 3,
        boldText: "Collaboration:",
        text: "We work closely with our clients to ensure their unique needs are met."
    },
    {
        id: 4,
        boldText: "Impact:",
        text: " We measure success by the tangible differences our technology makes in the real world."
    },

]


export default function AboutHeroSection() {
  const {moveToHomePage} = useMoveToHomePage()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-24">
            <div className="px-6 flex flex-col space-y-4 sm:px-6 lg:px-8">
                <button onClick={moveToHomePage} className="flex cursor-pointer items-center text-stone-500">
                    <IoIosArrowRoundBack size={20} />
                    <p className=" text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">Back to Home</p>
                </button>

                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-bold mb-6">About WRLDS Technology</h1>
                    <p className="text-xl text-gray-600 mb-12">We're a team of innovators dedicated to revolutionizing smart textile technology for industries worldwide.</p>
                </div>
            </div>

            {/* Company's values  */}
            <div className=" px-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 space-y-6">
                    {/* Our Mission */}
                    <div className="flex flex-col space-y-3">
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                        <p className="text-gray-600">At WRLDS Technologies, we're on a mission to transform ordinary textiles into intelligent, data-driven solutions that improve safety, performance, and quality of life across industries.</p>
                        <br />
                        <p className="text-gray-600 ">We believe that by embedding intelligence into everyday fabrics, we can create a more connected, responsive, and safer world.</p>
                    </div>


                    {/* Our Values */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-3xl font-bold">Our Values</h2>
                            {ourValues.map(value => (
                                <span key={value.id} className="flex items-center space-x-1.5">
                                    <IoMdCheckmarkCircleOutline className="-mt-9" size={40} />
                                    <p className="text-gray-600"><strong>{value.boldText}</strong>  {value.text}</p>
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="mb-16 px-6 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>

                    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                        <p className="text-gray-600 ">We started with the ambition to make an inherently scattered and complex development area modular, smart and available to analog brands. After successfully raising millions of dollars for development, we spent the first two years in full code mode.</p>
                        <br />
                        <p className="text-gray-600 ">The goal was to turn all the scattered hardware and building blocks into simple modules to be assembled like Lego. During this time we took in a range of customers for whom we built prototypes - a way for us to make sure what we built had bearing in real world use cases.</p>
                        <br />
                        <p className="text-gray-600 ">In 2023 we felt we had reached a technology level allowing us to start working on enterprise level. Since then, we have focused on textile integrations because of the enormous potential smart textiles have across multiple industries from healthcare to public safety.</p>
                    </div>
                </div>
            </div>


            {/* Our Team  */}
            <div className="mb-6 px-6 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-5">
                    <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                    <p className="text-gray-600 mb-8">Our diverse team combines expertise in textile engineering, electronics, software development, artificial intelligence, and industry-specific knowledge to deliver holistic solutions.</p>
                </div>

                {/* Profiles */}
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map(Profile => (
                            <div key={Profile.id} className="rounded-lg p-6 text-card-foreground shadow-sm bg-gray-50 border border-gray-100 overflow-hidden">
                                <div className="flex flex-col items-center text-center">
                                    {/*  */}
                                    <figure className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                                        <img className="w-full h-full object-cover filter grayscale" src={Profile.image} alt={Profile.name} />
                                    </figure>
                                    <div>
                                        <p className="font-bold text-lg">{Profile.name}</p>
                                        <p className="text-gray-500 text-sm mb-2">{Profile.position}</p>
                                        <p className="text-gray-600 text-sm">{Profile.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-16 pt-8 border-gray-200">
                        <button className="cursor-pointer inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">Join Our Team <IoIosArrowRoundForward className="lucide lucide-arrow-right ml-2 w-4 h-4 group-hover:translate-x-1 transition-transfor" /> </button>
                    </div>
                </div>
            </div>

            {/* Get in Touch */}
            <>
                <GetInTouch />
            </>

        </section>
    );
};

