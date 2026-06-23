import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getContactDetails } from "../services/apiContact";
import { useNavigate } from "react-router-dom";

export function useContactMessage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationKey: ["contact"],
        mutationFn: getContactDetails,
        onSuccess: () => {
            toast.success("Thanks for reaching to us! We'll get back to you shortly!"),
                queryClient.invalidateQueries({ queryKey: ["contact"] });
            navigate("/")// If the formData is successfully sent to the backend navigate/move to homepage
        },

        //Display error message if there's an error while sending data to the backend
        onError: () => toast.error("Error occured while sending form data to the backend"),
    })


    //Return the mutation message
    return { mutate, isPending };
}
