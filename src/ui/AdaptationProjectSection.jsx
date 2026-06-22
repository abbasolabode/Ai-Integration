import { IoIosArrowRoundDown } from "react-icons/io";
import { ImSpinner11 } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
const stages = [
  {
    id: 1,
    name: "Planning",
    icon: (
      <IoCheckmarkCircleOutline className="rounded-full h-6 w-6 text-white" />
    ),
  },
  {
    id: 2,
    name: "Development",
    icon: <FaCode className="rounded-full h-6 w-6 text-white" />,
  },
  {
    id: 3,
    name: "Testing",
    icon: <LuBox className="rounded-full h-6 w-6 text-white" />,
  },
  {
    id: 4,
    name: "Review",
    icon: <ImSpinner11 className="rounded-full h-6 w-6 text-white" />,
  },
];

export default function AdaptationProjectSection() {
  // State to track the current stage of the project
  const [currentStage, setCurrentStage] = useState(0);

  // useEffect to automatically cycle through stages every 2 seconds
  //Prev is the previous stage index, and we check if it has reached the last stage. If it has, we loop back to the first stage (index 0); otherwise, we move to the next stage by incrementing the index by 1.
  useEffect(() => {
    const interval = setInterval(() => {
      //Checking if the prev value equals to the last element of the array, if TRUE then go back to the first element of the array
      setCurrentStage((prev) => prev === stages.length - 1 ? 0 : prev + 1 // Loop back to the first stage after reaching the last one 
      );
    }, 5000);

    //Clearing the previous operation
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" py-4 px-15 min-[360px]:px-4 min-[768px]:px-10">
      <div className="lg:px-30">
        <div className=" relative  min-[360px]:left-10  flex flex-col justify-center items-center">
          {/* vertical line */}
          <div className="w-1 h-16 bg-linear-to-b from-white via-gray-500 to-gray-400 mx-auto relative right-10 bottom-1.5"></div>

          <span className="w-24 h-24">
            <IoIosArrowRoundDown className="rounded-full w-5 h-5 bg-gray-400 text-white border" />
          </span>
        </div>

        {/* Project Details */}
        <div className=" -mt-5 flex flex-col space-y-3 px-4 py-4 rounded-xl shadow-sm shadow-gray-500/50">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="text-md font-medium">
                Adaptation Project
              </h3>

              <p className="flex items-center gap-2 text-sm tracking-wider leading-relaxed">
                Iterative Development
                <span>
                  <ImSpinner11 className="animate-spin transition-all duration-50" />
                </span>
              </p>
            </div>

            <p className="font-light tracking-wide">
              Working iteratively with customers to tailor solutions
              to their needs
            </p>
          </div>

          {/* Flex container */}
          <div className="flex flex-col space-y-4 items-center">
            <div className="relative rounded-md w-full h-3 bg-gray-300 overflow-hidden">
              {/* Progress bar - Moving horizontal line for iteration  */}
              <div
                className="absolute left-0 top-0 h-full bg-stone-500 transition-all duration-700 ease-in-out"
                style={{ width: `${((currentStage + 1) / stages.length) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-around w-full">
              {stages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={` ${currentStage === index ? "bg-stone-200/60 py-2" : ""} flex w-30 flex-col items-center justify-center gap-3 p-1.5 rounded-md`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${currentStage === index
                      ? "bg-stone-600 scale-125 shadow-lg shadow-blue-500/40"
                      : "bg-gray-400/80"
                      }`}
                  >
                    {stage.icon}
                  </span>

                  <p
                    className={`text-sm tracking-wide transition-all duration-500 ${currentStage === index
                      ? "text-stone-600 font-semibold"
                      : ""
                      }`}
                  >
                    {stage.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm tracking-wide leading-relaxed">
              <span>
                <IoCheckmarkCircleOutline
                  className="text-green-400"
                  size={20}
                />
              </span>

              <p className="tracking-wider font-light">
                Customer feedback integrated at every stage
              </p>
            </div>
          </div>
        </div>

        <div className="relative  min-[360px]:left-10 w-full flex flex-col justify-center items-center pt-8">
          {/* vertical line */}
          <div className="w-1 h-16 bg-linear-to-b from-white via-gray-500 to-gray-400 mx-auto relative right-10 bottom-1.5"></div>

          <span className="w-24 h-24">
            <IoIosArrowRoundDown className="rounded-full w-5 h-5 bg-gray-400 text-white border" />
          </span>
        </div>
      </div>


      {/* Navigation button/link */}
      <div className="">
        <div className="flex flex-col gap-5 min-[768px]:flex-row items-center justify-center mt-6">
          <Link className="w-80 font-medium tracking-wider hover:shadow-lg  py-3 rounded-lg bg-stone-600/50 text-white flex items-center justify-center gap-2">Learn More About Our Technology <IoIosArrowRoundForward /></Link>
          <button className="w-60 tracking-wider font-medium cursor-pointer hover:shadow-lg py-3 rounded-lg bg-gray-700/50 text-white flex items-center justify-center gap-2">Contact Our Experts <LuMessageSquare /> </button>
        </div>
      </div>
    </section>
  );
}