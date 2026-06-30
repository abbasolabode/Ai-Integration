import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getNewsById } from "../services/apiNewsDetails";

export function useNewsDetails() {
    const { id } = useParams();

    const { data = {}, error, isLoading } = useQuery({
        queryKey: ["news", id],
        queryFn: () => getNewsById(id),
        enabled: !!id
    });

    return { data, error, isLoading };
};