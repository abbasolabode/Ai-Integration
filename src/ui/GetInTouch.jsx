import { CiMail } from "react-icons/ci";
import { FiLinkedin, FiPhone } from "react-icons/fi";


const profilesData = [
    {
        id: 1,
        header: "Felix von Heland",
        img: "/images/avatar-felix.png",
        position: "CEO and Founder",
        mail: "mailto:felix@wrlds.com",
        linkedin: "Linkedin Profile",
    },

    {
        id: 2,
        header: "Love Anderberg",
        img: "/images/avatar-love.png",
        position: "COO",
        mail: "love@wrlds.com",
        linkedin: "LinkedIn Profile",
        phone: "076-014 95 08",
    },
]



export default function GetInTouch() {
    return (
        <section className="w-full bg-gradient-to-b from-white to-black">
            <div className=" w-full max-w-5xl mx-auto px-4 py-3 sm:px-6 lg:px-8 ">
                <div className="text-center pt-5 mb-10 md:mb-16 space-y-10">
                    <div>
                        <span className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">Get In Touch</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us Today</h2>
                        <p className="text-lg max-w-2xl mx-auto text-white/80">Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.</p>
                    </div>

                    <div>
                        {/* Flex container */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                            {/* 1 */}
                            {profilesData.map(profile => (
                                <div className="bg-white rounded-xl shadow-xl p-6 md:p-8  border-gray-700">
                                    {/* Image */}
                                    <figure className="w-32 h-32 flex items-center justify-center mx-auto ">
                                        <img src={profile.img} className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale" />
                                    </figure>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900">{profile.header}</p>
                                        <p className="text-gray-600 mb-4">{profile.position}</p>
                                        <div className="flex flex-col space-y-3">
                                            <div className="flex items-center justify-center gap-3">
                                                <CiMail size={20} />
                                                <a
                                                    href={profile.mail}
                                                    className="flex items-center text-gray-700 hover:text-blue-600"
                                                >
                                                    {profile.mail}
                                                </a>
                                            </div>


                                            <div className="flex items-center justify-center gap-3">
                                                <FiLinkedin size={20} />
                                                <a
                                                    href="mailto:felix@wrlds.com"
                                                    className="flex items-center text-gray-700 hover:text-blue-600"
                                                >
                                                    Linkedin Profile
                                                </a>
                                            </div>


                                            {profile.phone && <div className="flex items-center justify-center gap-3">
                                                <FiPhone size={20} />
                                                <a
                                                    href={`tel:${profile.phone.replace(/[\s-]/g, "")}`}
                                                    className="flex items-center text-gray-700 hover:text-blue-600"
                                                >
                                                    {profile.phone}
                                                </a>
                                            </div>}

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
