import { useNavigate } from "react-router-dom";

export function useMoveToHomePage(){
    const navigate = useNavigate();
    const moveToHomePage = ()=> navigate("/");


    return {moveToHomePage};
}