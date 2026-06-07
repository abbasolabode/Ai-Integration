import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useSubscribe() {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationKey: ["subscribe"],
        mutationFn: () => { },
        onSuccess: () => {
            toast.success("You've successfully subscribed to our newsletter!")
            queryClient.invalidateQueries({ queryKey: ["subscribe"] });
        },

        onError: (error) => {
            toast.error(error?.message);
        }
    });


    return { mutate, isPending };
}