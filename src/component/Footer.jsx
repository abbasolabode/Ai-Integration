import { FiLinkedin } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useSubscribe } from "../hooks/useSubscribe";

export default function Footer() {
    const { mutate, isPending } = useSubscribe();
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, } = useForm()
    const onSubmit = ({ email }) => {
        if (!email) return;
        console.log(email);
        //If email exists, send the email value to the backend
        mutate(email, {
            onSettled: reset(),
        });
    }
    return (
        <footer className="w-full bg-black text-white pt-16 pb-8">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-6">
                    {/* Logo */}
                    <div className="lg:col-span-2 flex flex-col space-y-3">
                        <Link
                            to="/"
                            className="h-10 w-auto mb-6 text-white text-4xl"
                        >
                            wrlds
                        </Link>

                        <p className="text-gray-300 mb-6">
                            WRLDS Technologies provides an end-to-end platform for
                            the creation and deployment of AI-powered smart sensor
                            devices, giving customers 100% ownership while handling
                            the complete technological
                        </p>

                        <address>
                            <p className="text-gray-300">Hornsgatan 110</p>
                            <p className="text-gray-300 mb-6">
                                117 26, Stockholm Sweden
                            </p>
                        </address>
                    </div>

                    {/* Footer Content */}
                    <div className="flex flex-col space-y-6 w-full">
                        {/* Social Icon */}
                        <div>
                            <a href="/">
                                <FiLinkedin
                                    size={14}
                                    className="w-10 h-10 p-1.5 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                                />
                            </a>
                        </div>

                        {/* Links */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold mb-4 text-white">
                                Company
                            </h3>

                            <div className="flex flex-col gap-2">
                                <Link className="text-gray-300 hover:text-white transition-colors inline-block whitespace-nowrap">
                                    About Us
                                </Link>

                                <Link className="text-gray-300 hover:text-white transition-colors inline-block whitespace-nowrap">
                                    Careers
                                </Link>

                                <Link className="text-gray-300 hover:text-white transition-colors inline-block whitespace-nowrap">
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>

                        {/* Get in Touch */}
                        <div className="w-full">
                            <h3 className="text-lg font-bold mb-4 text-white whitespace-nowrap">
                                Get in Touch
                            </h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
                                <div>
                                    <input
                                        {...register("email", {
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Please enter a valid email address",
                                            },
                                        })}
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-400"
                                        placeholder="Your email"
                                        type="email"
                                        name="email"
                                        id="email"
                                        disabled={isSubmitting || isPending}
                                    />
                                    {errors?.email?.message && <small className="text-[10px] text-red-500 tracking-wider">{errors?.email?.message}</small>}
                                </div>

                                <button
                                    disabled={isPending || isSubmitting}
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center disabled:opacity-50 cursor-pointer tracking-wider"
                                    type="submit"
                                >
                                    {!isPending || !isSubmitting ? <>Subscribe <IoIosArrowRoundForward size={20} /></> : <ClipLoader size={18} color="#ffffff" />}

                                </button>
                            </form>
                        </div>

                        <hr className="border-gray-700" />

                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm tracking-wider font-light">
                                WRLDS Technologies. All rights reserved.
                            </p>

                            <p className="text-sm tracking-wider font-light">
                                Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}