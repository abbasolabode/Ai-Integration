import { LuMessageSquare } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

export default function EnquiryForSolutions() {
    return (
        <div className="p-6 w-full ">
            <div className="flex flex-col space-y-10 mx-auto">
                <p className="font-medium px-10 text-center mx-auto ">These projects demonstrate our commitment to quality construction and innovative building solutions</p>

                <div className="flex flex-col gap-4 justify-center min-[768px]:flex-row min-[768px]:items-center min-[768px]:space-y-4 min-[768px]:gap-4 ">
                    {/* Button 1 */}
                    <button className="justify-center min-[768px]:flex  gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer tracking-wider disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 inline-flex items-center px-4 sm:px-6 py-6 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all sm:w-auto">Need Custom Solutions? <motion.span animate={{ x: [0, 6, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}><LuMessageSquare size={20} /> </motion.span>
                    </button>

                    {/* Button 2 */}
                    <button className="justify-center gap-2 whitespace-nowrap min-[884px]:-mt-2.5 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gray-300 cursor-pointer tracking-wider disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 inline-flex items-center px-4 sm:px-6 py-3 p-6 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all w-full sm:w-auto">Learn More About Our Technology
                        <motion.span
                            animate={{ x: [0, 6, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}><GoArrowRight size={20} /></motion.span> </button>
                </div>
            </div>

        </div>
    )
}
