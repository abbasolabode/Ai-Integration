import { IoIosArrowRoundBack } from "react-icons/io";
import { useMoveToHomePage } from "../hooks/useMoveToHomePage";

export default function GoToHome() {
    const { moveToHomePage } = useMoveToHomePage()
    return (
        <button
            className="flex items-center space-x-4 text-gray-700 " onClick={moveToHomePage}>
            <span><IoIosArrowRoundBack /></span>
            Back to Home
        </button>
    )
}
