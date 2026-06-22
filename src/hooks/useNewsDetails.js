import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useNewsDetails() {
    const { id } = useParams();
    
    const { data = {}, isLoading } = useQuery({
        queryKey: ["blog", id],
        queryFn: () => getNewsById(id),
        enabled: !!id,
    });

    return { data, isLoading };
};