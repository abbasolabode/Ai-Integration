import { useEffect } from "react";
import GoToHome from "../../resuables/GoToHome";

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
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <header className="max-w-6xl mx-auto flex flex-col space-y-2">
                <GoToHome />

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

        </div>
    )
};