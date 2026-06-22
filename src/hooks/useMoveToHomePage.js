import { useNavigate } from "react-router-dom";

//This is a hook 
export function useMoveToHomePage(){
    const navigate = useNavigate();
    const moveToHomePage = ()=> navigate("/");
    // returning a variable function 
    return {moveToHomePage};
}