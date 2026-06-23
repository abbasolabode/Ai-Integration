import { useNavigate } from "react-router-dom";
//This is a hook that returns a function to move to homepage
export function useMoveToHomePage() {
    const navigate = useNavigate();
    const moveToHomePage = () => navigate("/");
    // returning a variable function 
    return { moveToHomePage };
}