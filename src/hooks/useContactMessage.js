import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useContactMessage() {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationKey: ["contact"],
        mutationFn: () => { },
        onSuccess: () => {
            toast.success("Thanks for reaching to us! We'll get back to you shortly!"),
                queryClient.invalidateQueries({ queryKey: ["contact"] });
        },

        onError: () => toast.error("Error occured while sending form data to the backend"),
    })


    return { mutate, isPending };
}
