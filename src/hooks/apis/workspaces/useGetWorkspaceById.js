import { fetchWorkspaceDetailsRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth"
import { useQuery } from "@tanstack/react-query";

export const useGetWorkspaceById = (id) => {
    const { auth } = useAuth();
    const { isFetching, isSuccess, error, data: workspace } = useQuery({
        queryKey: ["workspace", id],
        queryFn: ({ queryKey }) =>
            fetchWorkspaceDetailsRequest({ workspaceId: queryKey[1], token: auth?.token }),
        staleTime: 10000
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspace
    };
};