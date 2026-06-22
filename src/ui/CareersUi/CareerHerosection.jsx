import { IoIosArrowRoundBack } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiPhone } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const cards = [
    {
        id: 1,
        header: "Innovation",
        text: "Work on cutting-edge technology that's changing multiple industries.",
    },
    {
        id: 2,
        header: "Impact",
        text: "Create solutions that enhance safety, performance, and quality of life.",
    },
    {
        id: 3,
        header: "Growth",
        text: "Develop your skills in a rapidly expanding field with diverse challenges.",
    },
];

export default function CareerHerosection() {
    const navigate = useNavigate();

    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <header className="max-w-6xl mx-auto flex flex-col space-y-2">
                <button
                    className="flex items-center space-x-4 text-gray-700"
                    onClick={() => navigate("/")}
                >
                    <span>
                        <IoIosArrowRoundBack />
                    </span>
                    Back to Home
                </button>

                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
                    <p className="text-xl text-gray-600 mb-4">
                        We're looking for passionate innovators to help us revolutionize the smart textile industry.
                    </p>
                    <p className="text-xl text-gray-600 mb-4">
                        We welcome both full-time professionals and interns who are eager to contribute to groundbreaking technology.
                    </p>
                </div>
            </header>

            <section className="pt-5">
                <h2 className="text-3xl font-bold mb-6">Why Join Wrlds?</h2>
                <div className="p-6 rounded-lg h-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                        {cards.map((card) => (
                            <article
                                key={card.id}
                                className="flex flex-col gap-2 bg-gray-50 p-6 rounded-lg border border-gray-100 h-full"
                            >
                                <h3 className="font-bold text-lg mb-2">{card.header}</h3>
                                <p className="text-gray-600">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm mt-12">
                <h2 className="font-bold text-xl mb-6">Contact Our COO</h2>
                <div className="flex flex-col space-y-2 justify-center text-center items-center mx-auto border pt-4 border border-stone-200 rounded-lg">
                    <figure>
                        <img
                            className="rounded-full w-28 h-28 object-cover"
                            src="/images/avatar-love.png"
                            alt="Love Anderberg, COO"
                        />
                    </figure>
                    <div className="flex flex-col space-y-1 pt-3 ">
                        <p className="font-semibold text-lg">Love Anderberg</p>
                        <p className="text-gray-500 mb-4">COO</p>
                        <div className="space-y-3 text-gray-700 flex flex-col ">
                            <a
                                href="mailto:love@wrlds.com"
                                className="inline-flex items-center gap-2 hover:text-blue-600"
                            >
                                <CiMail />
                                love@wrlds.com
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 hover:text-blue-600"
                            >
                                <SlSocialLinkedin />
                                Linkedin Profile
                            </a>
                            <p className="inline-flex items-center gap-2">
                                <CiPhone />
                                +234-7065560628
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};